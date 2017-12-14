pragma solidity ^0.4.0;

contract Diamonds {
    struct Diamond {
        uint id;
        uint price; // in ether (should convert to Wei)
        address ownerAddr;
    }
    
    Diamond[] public allDiamonds; // array of Diamond structs
    mapping(uint => Diamond) public diamonds; 
    address owner;
    
    event DiamondLogger(uint, uint, address);
    
    function Diamonds() public {
        owner = msg.sender;
    }

    function getDiamondId() public constant returns (uint diamondId) {
        return allDiamonds.length;
    }
    
    function createDiamond(uint price) public {
        // uint diamondId = allDiamonds.length;
        allDiamonds.push(Diamond(0, price, msg.sender));
        diamonds[0] = Diamond(0, price, msg.sender); 
        
        // DiamondLogger(allDiamonds[diamondId].id, allDiamonds[diamondId].price, allDiamonds[diamondId].ownerAddr);
    }
    
    function buy(uint diamondId) payable public {
        //find diamond (diamondId should be index of diamond in allDiamonds)
        if (allDiamonds.length > diamondId && 
            msg.value >= allDiamonds[diamondId].price * 1e18) {
            allDiamonds[diamondId].ownerAddr.transfer(allDiamonds[diamondId].price * 1e18);
            allDiamonds[diamondId].ownerAddr = msg.sender;
        }
    }

    function getDiamond(uint diamondId) public returns(uint, uint, address) {
        Diamond memory d = diamonds[diamondId];
        
        // break the struct's members out into a tuple
        // in the same order that they appear in the struct
        return (d.id, d.price, d.ownerAddr);
    }

    function diamondsTot() public returns (address, uint) {
        return (msg.sender, allDiamonds.length); 
    }
    
    function kill() public {
        if (msg.sender == owner) 
          selfdestruct(owner);
    }
}