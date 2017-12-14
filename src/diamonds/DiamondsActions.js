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
    diamond
  }
}

export const receiveDiamond = diamond => {
    return {
        type: RECEIVE_DIAMOND, 
        diamond, 
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
                    
                    return diamondsInstance.getDiamond.call(2, {from: account}).then(function(result){
                                console.log(result);
                                console.log(result[0].toNumber());
                                console.log(result[1].toNumber());
                                // should be 0,3, address
                                // we want to dispatch an action to receivealldiamonds that holds the diamond info
                                // destruct result (array) into object
                                const d = {
                                    id: result[0].toNumber(),
                                    price: result[1].toNumber(),
                                    ownerAddr: result[2]
                                }

                                dispatch(receiveAllDiamonds(d));
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


export function createDiamond(price) {

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

                return diamondsInstance.createDiamond.call(price, { from: account })
                    .then(function(result){
                        console.log(result);
                        const d = {
                            id: result[0].toNumber(),
                            price: result[1].toNumber(),
                            ownerAddr: result[2]
                        }

                        dispatch(receiveDiamond(d)); 
                    })
                    .catch(function (err) {
                        console.log(err);
                    })


            })
            // })
        }
    }
}

