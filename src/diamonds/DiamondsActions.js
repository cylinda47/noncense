import DiamondsContract from '../../build/contracts/Diamonds.json'
import { browserHistory } from 'react-router'
import store from '../store'

const contract = require('truffle-contract')

export const RECEIVE_ALL_DIAMONDS = 'RECEIVE_ALL_DIAMONDS';
export const RECEIVE_DIAMOND = 'RECEIVE_DIAMOND';

export const receiveAllDiamonds = diamonds => {
  return {
    type: RECEIVE_ALL_DIAMONDS,
    diamonds,
  }
}

export const receiveDiamond = payload => {
  return {
    type: RECEIVE_DIAMOND,
    diamond: {
      id: payload[0].toNumber(),
      name: payload[1],
      price: payload[2].toNumber(),
      ownerAddr: payload[3]
    },
  }
}

export function requestAllDiamonds() {
  let web3 = store.getState().web3.web3Instance;
  // Double-check web3's status.
  if (typeof web3 !== 'undefined') {
    web3.eth.defaultAccount = web3.eth.coinbase;
    return function (dispatch) {
      // Using truffle-contract we create the authentication object.
      const diamonds = contract(DiamondsContract);
      diamonds.setProvider(web3.currentProvider);
      diamonds.web3.eth.defaultAccount = diamonds.web3.eth.coinbase;

      diamonds.deployed()
        .then(instance => {
          instance.getAllDiamonds()
            .then(result => {
              let allDiamonds = {};

              result[1].forEach((price, index) => {
                allDiamonds[index] = {} 
                allDiamonds[index].price = price.toNumber()
              })

              result[2].forEach((ownerAddr, index) => {
                allDiamonds[index].ownerAddr = ownerAddr;
              })

              if (result[0]) {
                result[0].slice(1).split('|').forEach((name, index) => {
                    allDiamonds[index].name = name;
                })
              }

              dispatch(receiveAllDiamonds(allDiamonds)); 
            })
        })
        .catch(function(err){
            console.log(err);
        })
    } 
  }
}

export function createDiamond(name, price) {
    let web3 = store.getState().web3.web3Instance;
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        web3.eth.defaultAccount = web3.eth.coinbase;
        return function (dispatch) {
            // Using truffle-contract we create the authentication object.
            const diamonds = contract(DiamondsContract);
            diamonds.setProvider(web3.currentProvider);
            diamonds.web3.eth.defaultAccount = diamonds.web3.eth.coinbase; 

            diamonds.deployed()
                .then(function (instance) {
                    instance.createDiamond(name, price)
                        .then(() => {
                            instance.getLastDiamond()
                              .then(payload => {
                                console.log(payload);
                                dispatch(receiveDiamond(payload));
                              });
                        });
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
    }
}


export function buyDiamond(id, price) {
      let web3 = store.getState().web3.web3Instance;
      // Double-check web3's status.
      if (typeof web3 !== 'undefined') {
        web3.eth.defaultAccount = web3.eth.coinbase;
        return dispatch => {
            // Using truffle-contract we create the authentication object.
            const diamonds = contract(DiamondsContract);
            diamonds.setProvider(web3.currentProvider);
            diamonds.web3.eth.defaultAccount = diamonds.web3.eth.coinbase; 

            diamonds.deployed()
                .then(function (instance) {
                    console.log('buying diamond ', id);
                    instance.buy(id, { value: web3.toWei(price) })
                        .then(() => {
                            instance.getLastDiamond().then(payload => {
                                dispatch(receiveDiamond(payload));
                            });
                        })
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}

export function requestDiamond(id) {
    let web3 = store.getState().web3.web3Instance;
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {
        web3.eth.defaultAccount = web3.eth.coinbase;
        return dispatch => {
            // Using truffle-contract we create the authentication object.
            const diamonds = contract(DiamondsContract);
            diamonds.setProvider(web3.currentProvider);
            diamonds.web3.eth.defaultAccount = diamonds.web3.eth.coinbase; 

            diamonds.deployed()
                .then(function (instance) {
                    instance.getDiamond.call(id).then(payload => {
                        dispatch(receiveDiamond(payload));
                    });
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}
