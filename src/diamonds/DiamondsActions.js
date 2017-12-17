import DiamondsContract from '../../build/contracts/Diamonds.json';
import store from '../store';

const contract = require('truffle-contract');

export const RECEIVE_ALL_DIAMONDS = 'RECEIVE_ALL_DIAMONDS';
export const RECEIVE_OWN_DIAMONDS = 'RECEIVE_OWN_DIAMONDS';
export const RECEIVE_DIAMOND = 'RECEIVE_DIAMOND';
export const RECEIVE_DIAMOND_DETAILS = 'RECEIVE_DIAMOND_DETAILS';
export const RECEIVE_CONVERSION = 'RECEIVE_CONVERSION';

export const receiveAllDiamonds = diamonds => {
  return {
    type: RECEIVE_ALL_DIAMONDS,
    diamonds,
  }
}

export const receiveOwnDiamondIds = diamondIds => {
  return {
    type: RECEIVE_OWN_DIAMONDS,
    diamondIds,
  }
}

export const receiveDiamond = payload => {
  return {
    type: RECEIVE_DIAMOND,
    diamond: {
      id: payload[0].toNumber(),
      name: payload[1],
      price: payload[2].toNumber(),
      ownerAddr: payload[3],
      url: payload[4],
    },
  }
}

export const receiveDiamondDetails = payload => {
  return {
    type: RECEIVE_DIAMOND_DETAILS,
    diamond: {
      id: payload[0].toNumber(),
      shape: payload[1].toNumber(),
      carat: payload[2].toNumber(),
      grade: payload[3].toNumber(),
      cut: payload[4].toNumber(),
      color: payload[5].toNumber(),
    },
  }
}

export const receiveETHtoUSD = conversion => {
  return {
    type: RECEIVE_CONVERSION,
    conversion
  }
}

function getDiamondContract() {
  let web3 = store.getState().web3.web3Instance;
  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    web3.eth.defaultAccount = web3.eth.coinbase;
    const diamonds = contract(DiamondsContract);
    diamonds.setProvider(web3.currentProvider);
    diamonds.web3.eth.defaultAccount = diamonds.web3.eth.coinbase;

    return diamonds;
  }
}

export function requestAllDiamonds() {
  return function (dispatch) {
    const diamonds = getDiamondContract();

    diamonds.deployed()
      .then(instance => instance.getAllDiamonds()
        .then(result => {
          let allDiamonds = {};

          for (let i = 0; i < result[1].length; i++) {
            const namesArray = result[0].slice(1).split('|');
            const urlsArray = result[3].slice(1).split('|');
            allDiamonds[i] = {} ;
            allDiamonds[i].id = i;
            allDiamonds[i].price = result[1][i].toNumber();
            allDiamonds[i].ownerAddr = result[2][i];
            allDiamonds[i].name = namesArray[i];
            allDiamonds[i].url = urlsArray[i];
          }

          dispatch(receiveAllDiamonds(allDiamonds)); 
        })
      )
      .catch(err => console.log(err))
  } 
}

export function requestOwnDiamonds() {
  return function (dispatch) {
    const diamonds = getDiamondContract();

    diamonds.deployed()
      .then(instance => instance.getOwnDiamonds()
        .then(result => {
          let ownDiamonds = {};
          const diamondIds = [];

          for (let i = 0; i < result[2].length; i++) {
            const namesArray = result[1].slice(1).split('|');
            const urlsArray = result[3].slice(1).split('|');
            const id = result[0][i].toNumber();
            ownDiamonds[id] = {} ;
            ownDiamonds[id].id = id;
            diamondIds.push(id);
            ownDiamonds[id].price = result[2][i].toNumber();
            ownDiamonds[id].name = namesArray[i];
            ownDiamonds[id].url = urlsArray[i];
          }

          dispatch(receiveAllDiamonds(ownDiamonds)); 
          dispatch(receiveOwnDiamondIds(diamondIds)); 
        })
      )
      .catch(err => console.log(err))
  } 
}

export function createDiamond(name, priceUSD, url, shape, carat, grade, cut, color) {
  return function (dispatch) {
    const web3 = store.getState().web3.web3Instance;
    const diamonds = getDiamondContract();

    return diamonds.deployed()
      .then(instance => {
        const priceEth = priceUSD / store.getState().conversion;
        return instance.createDiamond(
          name, web3.toWei(priceEth), url, shape, carat, grade, cut, color
        )
          .then(() => {
            setTimeout(() => instance.getLastDiamond()
              .then(payload => {
                dispatch(receiveDiamond(payload));
            }), 400);
            setTimeout(() => instance.getLastDiamondDetails()
              .then(payload => {
                dispatch(receiveDiamondDetails(payload));
            }), 500);
          });
      })
      .catch(err => console.log(err))
  }
}

export function updateDiamond(id, priceUSD) {
  return dispatch => {
    const web3 = store.getState().web3.web3Instance;
    const diamonds = getDiamondContract();

    return diamonds.deployed()
      .then(instance => {
        const priceEth = priceUSD / store.getState().conversion;
        return instance.updatePrice(id, web3.toWei(priceEth))
          .then(() => instance.getDiamond.call(id)
            .then(payload => dispatch(receiveDiamond(payload)))
          )
      })
      .catch(err => console.log(err))
  }
}

export function buyDiamond(id, priceWei) {
  return dispatch => {
    const diamonds = getDiamondContract();

    return diamonds.deployed()
      .then(instance => instance.buy(id, { value: priceWei})
        .then(() => instance.getDiamond.call(id)
          .then(payload => dispatch(receiveDiamond(payload)))
        )
      )
      .catch(err => console.log(err))
  }
}

export function requestDiamond(id) {
  return dispatch => {
    const diamonds = getDiamondContract();

    diamonds.deployed()
      .then(instance => {
        instance.getDiamond.call(id)
          .then(payload => dispatch(receiveDiamond(payload)));
        instance.getDiamondDetails.call(id)
          .then(payload => dispatch(receiveDiamondDetails(payload)));
      })
      .catch(err => console.log(err))
  }
}
