
pragma solidity ^0.4.17;

contract Diamonds {
  /* mapping field below is equivalent to an associative array or hash.
  The key of the mapping is candidate name stored as type bytes32 and value is
  an unsigned integer to store the vote count
  */


  struct Diamond {
    // uint date; 
    // bytes32 laserRegistry; 
    // bytes32 shapeAndCut; 
    // bytes32 measurements; 
    // uint caratWeight; 
    // bytes32 colorGrade; 
    // bytes32 cutGrade; 
    uint price; 
    // pointer to owner address? 
    address ownerAddress; 
    
  }

  mapping (uint => Diamond) public diamondInfo; 
  Diamond[] public diamondList;
  
  uint totalDiamonds; 

  

  function buy(uint diamondId) payable public returns (uint){
    // price of the diamond user is buying 
    uint price = diamondList[diamondId].price;
    address ownerAddress = diamondList[diamondId].ownerAddress;
    require(msg.value >= price); 
    ownerAddress.transfer(msg.value);
    return ownerAddress.balance; 
  }

  function createDiamond(uint price) public returns (uint) {
    // create the new diamond and add to list of all diamonds 
    diamondList.push(Diamond(price, msg.sender));
    totalDiamonds++;

    return totalDiamonds; 

  }


 
}