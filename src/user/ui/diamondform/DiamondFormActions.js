import DiamondsContract from '../../../../build/contracts/Diamonds.json'
// import { loginUser } from '../diamondform/DiamondFormActions'
import store from '../../../store'

const contract = require('truffle-contract')

export function createDiamond(price) {
    let web3 = store.getState().web3.web3Instance

    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

        return function (dispatch) {
            // Using truffle-contract we create the authentication object.
            const diamonds = contract(DiamondsContract)
            diamonds.setProvider(web3.currentProvider)

            // Declaring this for later so we can chain functions on Authentication.
            var diamondInstance
            console.log("1");
            // Get current ethereum wallet.
            // web3.eth.getCoinbase((error, coinbase) => {
            //     // Log errors, if any.
            //     if (error) {
            //         console.error(error);
            //     }
            //     console.log("2");
            //     diamonds.deployed().then(function (instance) {
            //         diamondInstance = instance
            //         console.log(diamonds);
            //         // Attempt to sign up user.
            //         diamondInstance.testDiamonds().then( result => 
            //             console.log(result)
            //         )
            //         diamondInstance.createDiamond(price, { from: coinbase })
            //             .then(function (result) {
            //                 console.log(result);
            //                 // If no error, login user.
            //                 return result;
            //             })
            //             .catch(function (result) {
            //                 // If error...
            //                 console.log(result);
            //             })
            //     })
            
            web3.eth.getAccounts(function (error, accounts) {
                if (error) {
                    console.log(error);
                }
                diamonds.deployed().then(function (instance) {
                    var account = accounts[0];
                    diamondInstance = instance;
                    diamondInstance.createDiamond(price, { from: account })
                }).then(function (result) {
                    console.log(result);
                }).catch(function (err) {
                    console.log(err.message);
                });
            });
            }
    } else {
        console.error('Web3 is not initialized.');
    }
}
