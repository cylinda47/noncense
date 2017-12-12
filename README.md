# Nonsense

### Nonsense is a software development project aiming to construct a Diamond/Precious Stone marketplace on an Ethereum blockchain.

## Background and Overview

The marketplace for new and used precious stones is monopolized by a select few distinct retailers who are able to both provide authentication from verified sources and sell the product at its highest value. We intend to challenge this standard by developing a means of tracking authentication and sales information for each individual product using Ethereum blockchain technology.

This problem decomposes into several areas of activity:
* Setting up an Ethereum environment
* Composing Ethereum Smart Contracts to define transactions
* Building a front end marketplace for users to interact with our solution employing

## Functionality & MVP
- [ ] Compose an Ethereum Smart Contracts
- [ ] Construct an Ethereum marketplace
- [ ] Seed Marketplace with appropriate precious stone and transaction history data
- [ ] Create interactive walkthrough of how the process works

### Bonus Features

## Technologies & Technical Challenges

**Backend: Truffle/Solidity**

**Frontend: Web3 API**

**Development Testing: Remix IDE**

### Composing a Smart Contract
* Setting up environment
    * This necessitates use of Solidity on the Ethereum framework
    * web3.js communicates between Ethereum Node (similar to a server) or Smart Contract deployed to blockchain from inside JavaScript/web applcation.

* Seeding the contract with Ether
    * Determining the details of the contract is critical as once the contracts are 'signed,' they are immutable.

### Web3.js
* Communicates between frontend and backend.
    * Backend:
        * Ethereum node
        *  Smart Contract deployed to the blockchain
    * Frontend:
        * JavaScript/Web Application
    * Uses JSON RPC calls

### Constructing a Marketplace
* This will be done on the Ethereum blockchain.
    * Although this presents as a normal webpage, everything under the hood will be written in Web3 API, truffle, and Meteor.js.
    * This framework relies heavily on Web3 API to connect the frontend to the backend.

* Determining the nature of the interactions
    * Users will buy and sell precious stones. The limitations of their contracts will have to be determined. While it may be feasible to add more functionality than exchanging financial compensation for a product, that remains unclear. It may also come to light that more details of the transaction would be necessary for this marketplace to be functional.
    * We will validate our transaction model with our seed data.

### UX
* Frontend Interface
    * We will implement calls to the blockchain to search for precious stones that are available.
    * We will send the stone data to render on the application interface.
    * The desired details of the transaction for the seller will be available for the user to see.
    * Users can make bids for the stone and offer adaptations to the seller's specified contract.

* Backend
    * Our backend will be a standard Ethereum build which houses all of the necessary information.

## Accomplished over the Weekend
* Identify necessary technologies and setup working environments.
    * Download Ethereum blockchain.

* Compose a sample Smart Contract
* Research Web3 API, truffle, and Solidity
    * Specific focus on interplay

## Team Members & Work Breakdown

**Jacob Butler, Kevin Lee, Linda Chan, William Meng**

### Day 1 (Mon)
* Share research findings
* Test Smart Contracts
### Day 2 (Tues)
* Test unique Smart Contracts
    * Finalize Smart Contract structure for project
* Build and test Ethereum network
### Day 3 (Wed)
* Construction of frontend commences
### Day 4 (Thurs)
*
### Day 5 (Fri)
* Nonsense gets deployed to Heroku
### Day 6 (Sat)
* Seed frontend interface
### Day 7 (Sun)
* Finalize functionality of website interface
* Improve UX
### Day 8 (Mon)
* Complete README for project
