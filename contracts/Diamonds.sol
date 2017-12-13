pragma solidity ^0.4.0;

contract Diamonds {
    struct Diamond {
        uint id;
        uint price; // in ether (should convert to Wei)
        address ownerAddr;
    }
    
    Diamond[] public allDiamonds; // array of Diamond structs
    address owner;
    
    event DiamondLogger(uint, uint, address);
    
    function Diamonds() public {
        owner = msg.sender;
    }

    function testDiamonds() public returns (bytes32) {
        return 0x456; 
    }
    
    function createDiamond(uint price) public returns (uint) {
        uint diamondId = allDiamonds.length;
        allDiamonds.push(Diamond(diamondId, price, msg.sender));
        DiamondLogger(allDiamonds[diamondId].id, allDiamonds[diamondId].price, allDiamonds[diamondId].ownerAddr);
        return diamondId;
    }
    
    function buy(uint diamondId) payable public {
        //find diamond (diamondId should be index of diamond in allDiamonds)
        if (allDiamonds.length > diamondId && 
            msg.value >= allDiamonds[diamondId].price * 1e18) {
            allDiamonds[diamondId].ownerAddr.transfer(allDiamonds[diamondId].price * 1e18);
            allDiamonds[diamondId].ownerAddr = msg.sender;
        }
    }
    
    function kill() public {
        if (msg.sender == owner) 
          selfdestruct(owner);
    }
}