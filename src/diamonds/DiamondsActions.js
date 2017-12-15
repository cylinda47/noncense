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

export const receiveDiamond = diamond => {
  return {
    type: RECEIVE_DIAMOND,
    diamond: { 
      id: diamond[0].toNumber(), 
      name: diamond[1], 
      price: diamond[2].toNumber(),
      owner: diamond[3]
    }
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
            const account = diamonds.web3.eth.defaultAccount;

            // Declaring this for later so we can chain functions on Authentication.
            var diamondsInstance;

            // Get current ethereum wallet.
            // web3.eth.getCoinbase((error, coinbase) => {
                // Log errors, if any.
                // if (error) {
                //     console.error(error);
                // }

                diamonds.deployed().then(function (instance) {

                    diamondsInstance = instance;

                    // Attempt to login user.

                    // Try to get all diamonds 
                    
                    return diamondsInstance.getAllDiamonds.call({from: account}).then(function(result){
                                console.log(result);

            
                              let allDiamonds = {}; 

                              result[1].forEach((price, index) =>{
                                  allDiamonds[index] = {}
                                  allDiamonds[index].price = price.toNumber()

                              })
                              result[2].forEach((address, index) =>{
                                  allDiamonds[index].address = address
                              })
                                // const d = {
                                //     id: result[0].toNumber(), 
                                //     price: result[1].toNumber(), 
                                //     ownerAddr: result[2]
                                // }

                                dispatch(receiveAllDiamonds(allDiamonds)); 

                            })

                        })
                        .catch(function(err){
                            console.log(err);
                        })





                    // diamondsInstance.login({ from: coinbase })
                    //     .then(function (result) {
                    //         // // If no error, login user.
                    //         // var userName = web3.toUtf8(result);

                    //         dispatch(receiveAllDiamonds(allDiamonds));

                    //         // Used a manual redirect here as opposed to a wrapper.
                    //         // This way, once logged in a user can still access the home page.
                    //         var currentLocation = browserHistory.getCurrentLocation()

                    //         if ('redirect' in currentLocation.query) {
                    //             return browserHistory.push(decodeURIComponent(currentLocation.query.redirect))
                    //         }

                    //         return browserHistory.push('/dashboard')
                    //     })
                    //     .catch(function (result) {
                    //         // If error, go to signup page.
                    //         console.error('Wallet ' + coinbase + ' does not have an account!')

                    //         return browserHistory.push('/signup')
                    //     })
        // })
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
            const account = diamonds.web3.eth.defaultAccount;

            // Declaring this for later so we can chain functions on Authentication.

            // Get current ethereum wallet.
            // web3.eth.getCoinbase((error, coinbase) => {
            // Log errors, if any.
            // if (error) {
            //     console.error(error);
            // }

            diamonds.deployed()
                .then(function (instance) {
                    instance.createDiamond(name, price)
                        .then(result => {
                            console.log(result);
                            // const d = {
                            //     id: result[0],
                            //     name: result[1],
                            //     price: result[2].toNumber(),
                            //     ownerAddr: result[3]
                            // }
                            // dispatch(receiveDiamond(d)); 
                        })
                        .then(result =>{
                            instance.getAllDiamonds().then(result => {
                                console.log(result);
                        })
                })
                .catch(function (err) {
                    console.log(err);
                })


            })
            // })
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
                            instance.getLastDiamond().then(diamond => {
                                console.log(diamond);
                                // dispatch(receiveDiamond(diamond));
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
                    instance.getDiamond.call(id).then(diamond => {
                        dispatch(receiveDiamond(diamond));
                    });
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}