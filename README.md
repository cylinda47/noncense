# Noncense

### Nonsense is a software development project aiming to construct a Diamond/Precious Stone marketplace on the Ethereum blockchain.

## Background and Overview

Problem Statement: Currently, peer to peer buying and selling of jewelry isn’t possible at a large scale because identification still relies on paper certificates. With the recent creation of Everledger, a company that gives each newly sold diamond a digital identification and registers it on a blockchain, our plan is to create an online peer to peer marketplace and establish a layer of trust that allows users to transact their assets without going through a middle man. We’ll accomplish this by using ethereum to construct a decentralized architectural framework where each user is in control of their funds, their assets, and their data, and no centralized institution is taking a cut of their profits.  

This problem decomposes into several areas of activity:
* Setting up a mock Ethereum environment
* Composing Ethereum Smart Contracts to handle transaction logic 
* Building a front end marketplace for users to interact with our solution employing

## Functionality & MVP
- [ ] Show all jewelry listings
- [ ] Allow users to post a new jewelry listing for sale
- [ ] Edit a jewelry listing 
- [ ] Buy and sell jewelry 
- [ ] Seed Marketplace with appropriate precious stone and transaction history data

### Bonus Features
* Populate with real gem data from EverLedger
* Add search feature that filters jewelry by criteria 
* Add auction layer and bidding capabilities 
* Display order history, add favorites 

## Technologies & Technical Challenges

**Framework: Truffle**
* A one-stop shop for backend, frontend and testing detailed below (like Ruby on Rails).

**Backend: Solidity**

**Frontend: Web3 API, JavaScript, HTML, CSS**

**Development Testing: Remix IDE**

### Composing a Smart Contract
* Setting up environment
    * This necessitates use of Solidity on the Ethereum framework
    * Web3.js communicates between Ethereum Node (similar to a server) or Smart Contract deployed to blockchain from inside JavaScript/web application.

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
* This will be done on a mock Ethereum blockchain.
    * Although this presents as a normal webpage, everything under the hood will be written in Web3 API, truffle, and Solidity.
    * This framework relies heavily on Web3 API to connect the frontend to the backend.

* Determining the nature of the interactions
    * Users will buy and sell precious stones. The limitations of their contracts will have to be determined. While it may be feasible to add more functionality than exchanging financial compensation for a product, that remains unclear. It may also come to light that more details of the transaction would be necessary for this marketplace to be functional.
    * We will validate our transaction model with our seed data.

### UX
* Frontend Interface
    * We will implement calls to the blockchain to search for precious stones that are available.
    * We will send the stone data to render on the application interface.
    * The desired details of the transaction for the seller will be available for the user to see.

* Backend
    * Our backend will be a standard Ethereum build which houses all of the necessary information.

## Accomplished over the Weekend
* Identify necessary technologies and setup working environments.
    * Download Ethereum blockchain.
* Create minimally functional HTML script using web3
* Compose a sample Smart Contract in Solidity using the Remix IDE
* Research Web3 API, truffle
    * Specific focus on interplay

## Team Members & Work Breakdown

**Jacob Butler, Kevin Lee, Linda Chan, William Meng**

### Day 1 (Mon)
* Share research findings
* Create smart contracts logic for transactions
* Test Smart Contracts in IDE
### Day 2 (Tues)
* Deploy smart contracts to test blockchain
* Begin construction of front end and use of web3 api 
### Day 3 (Wed)
  * Login/Signup pages
  * Gems index page
  * Gems show page 
### Day 4 (Thurs)
* Continue frontend construction
### Day 5 (Fri)
* Nonsense gets deployed to Heroku
* seed frontend interface 
### Day 6 (Sat)
* Styling and improving UX 
### Day 7 (Sun)
* Refactoring, bug fixes, additional styling, and if time, bonus features 
### Day 8 (Mon)
* Complete README for project
* Continue with any Day 7 tasks that haven’t been finished
