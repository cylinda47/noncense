import DiamondsContract from '../../build/contracts/Diamonds.json'
import { browserHistory } from 'react-router'
import store from '../store'

const contract = require('truffle-contract')

export const RECEIVE_ALL_DIAMONDS = 'RECEIVE_ALL_DIAMONDS';


export const receiveAllDiamonds = diamonds => {
    return {
        type: RECEIVE_ALL_DIAMONDS,
        diamonds,
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
                    
                    return diamondsInstance.createDiamond(3).then(function(result){
                        console.log(result);
                    })
                        .then(function(result){
                            diamondsInstance.getDiamond.call(0, {from: account}).then(function(result){
                                // var diamond = web3.toUtf8(result)
                                console.log(result);
                                console.log(result[0].toNumber());
                                console.log(result[1].toNumber());
                                // console.log(diamond);
                                // dispatch(receiveAllDiamonds(diamond))
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
                })
        // })
    }
}
}