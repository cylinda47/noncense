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

            diamonds.deployed()
                .then(function (instance) {
                    instance.getAllDiamonds().then(all => {
                        console.log(all);
                        const allNames = all[0].slice(1).split('|');
                        console.log(allNames);
                    });
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}

export function createDiamond({ name, price }) {
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

            diamonds.deployed()
                .then(function (instance) {
                    instance.createDiamond(name, price)
                        .then(result => {
                            instance.getAllDiamonds().then(all => {
                                console.log(all);
                                const allNames = all[0].slice(1).split('|');
                                console.log(allNames);
                                instance.getDiamond(allNames.length - 1).then(console.log);
                            });
                        })
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}

export function buyDiamond(diamondId) {
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

            diamonds.deployed()
                .then(function (instance) {
                    console.log('buying diamond ', diamondId);
                    getBalance(instance.address);
                    instance.buy(diamondId, { value: web3.toWei(6) })
                        .then(result => {
                            instance.getAllDiamonds().then(all => {
                                console.log(all);
                            });
                            setTimeout(() => getBalance(instance.address), 3500);
                        })
                }).catch(function(err){
                    console.log(err);
                })
        }
    }
}

function getBalance(address) {
    const web3 = store.getState().web3.web3Instance;
    web3.eth.getBalance(address, (err, res) => {
        const bal = web3.fromWei(res, 'ether').toNumber();
        console.log('contract balance is: ', bal);
    });
}