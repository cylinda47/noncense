pragma solidity ^0.4.18;

contract Diamonds {
   // separate arrays for each diamond field. Index is the id
    uint[] diamondPrices;
    address[] diamondOwners;
    string[] diamondNames;
    string diamondNamesString;

    address private owner;
    
    function Diamonds() public {
        // constructor function
        owner = msg.sender; // contract owner
    }
    
    function createDiamond(string name, uint price) public {
        diamondNames.push(name);
        diamondNamesString = concat(diamondNamesString, name, "|");
        diamondPrices.push(price);
        diamondOwners.push(msg.sender);
    }
    
    function buy(uint id) payable public {
        // id is index of diamond in the arrays
        require(diamondPrices.length > id && 
            msg.value >= diamondPrices[id] * 1e18);

        diamondOwners[id].transfer(diamondPrices[id] * 1e18);
        diamondOwners[id] = msg.sender; // change owner
    }
    
    function getDiamond(uint id) view public 
        returns (uint, string, uint, address) 
    {
        require(diamondPrices.length > id);
        return (id, diamondNames[id], diamondPrices[id], diamondOwners[id]);
    }
    
    function getLastDiamond() view public 
        returns (uint, string, uint, address) 
    {
        uint id = diamondPrices.length - 1;
        return (id, diamondNames[id], diamondPrices[id], diamondOwners[id]);
    }

    function getAllDiamonds() view public 
        returns (string, uint[], address[]) 
    {
        return (diamondNamesString, diamondPrices, diamondOwners);
    }
    
    function kill() public {
        // destroy contract and send all remaining funds to contract owner's address
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