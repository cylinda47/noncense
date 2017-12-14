pragma solidity ^0.4.18;

contract Diamonds {
  // separate arrays for each diamond field. Index is the diamondId
   uint[] diamondPrices;
   address[] diamondOwners;
   string[] diamondNames;
   string public diamondNamesString;

   address private owner;
   
   function Diamonds() public {
       // constructor function
       owner = msg.sender; // contract owner
   }
   
   function createDiamond(string name, uint price) public returns (uint, string, uint, address) {
       diamondNames.push(name);
       diamondNamesString = concat(diamondNamesString, name, "|");
       diamondPrices.push(price);
       diamondOwners.push(msg.sender);
       uint diamondId = diamondPrices.length - 1; 

       return (diamondId, diamondNames[diamondId], diamondPrices[diamondId], diamondOwners[diamondId] ); // return diamondId
   }
   
   function buy(uint diamondId) payable public returns (uint) {
       // diamondId is index of diamond in the arrays
       require(diamondPrices.length > diamondId &&
           msg.value >= diamondPrices[diamondId] * 1e18);

       diamondOwners[diamondId].transfer(diamondPrices[diamondId] * 1e18);
       diamondOwners[diamondId] = msg.sender; // change owner

       return diamondId;
   }

   function getAllDiamonds() view public returns (string, uint[], address[]) {
       return (diamondNamesString, diamondPrices, diamondOwners);
   }

   function getDiamond(uint diamondId)
       view
       public
       returns (uint, string, uint, address)
   {
       require(diamondPrices.length > diamondId);
       return (diamondId, diamondNames[diamondId], diamondPrices[diamondId], diamondOwners[diamondId]);
   }
   
   function kill() public {
       // destroy contract and send all remaining funds to contract owner’s address
       require (msg.sender == owner);
       selfdestruct(owner);
   }
   
   function concat(string _base, string _value, string _separator)
       pure
       internal
       returns (string)
       {
       bytes memory _baseBytes = bytes(_base);
       bytes memory _valueBytes = bytes(_value);
       
       string memory _tmpValue = new string(_baseBytes.length + _valueBytes.length + 1);
       bytes memory _newValue = bytes(_tmpValue);
       
       uint i;
       uint j;
       
       for (i=0; i < _baseBytes.length; i++) {
           _newValue[j++] = _baseBytes[i];
       }
       
       _newValue[j++] = bytes(_separator)[0];
       
       for (i=0; i < _valueBytes.length; i++) {
           _newValue[j++] = _valueBytes[i];
       }
       
       return string(_newValue);
   }
}