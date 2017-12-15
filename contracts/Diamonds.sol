pragma solidity ^0.4.18;

contract Diamonds {
  
    // separate arrays for each diamond field. Index is the id
    string[] diamondNames;
    string diamondNamesString;
    uint[] diamondPrices; // in Wei
    string[] diamondUrls;
    string diamondUrlsString;
    address[] diamondOwners;
    uint8[] diamondShapes;
    uint16[] diamondCarats;
    uint8[] diamondGrades;
    uint8[] diamondCuts;
    uint8[] diamondColors;

    address private owner;
    
    function Diamonds() public {
        // constructor function
        owner = msg.sender; // contract owner
    }
    
    function createDiamond(string name, uint price, string url, uint8 shape, 
        uint16 carat, uint8 grade, uint8 cut, uint8 color) public 
    {
        diamondNames.push(name);
        diamondNamesString = concat(diamondNamesString, name, "|");
        diamondPrices.push(price);
        diamondOwners.push(msg.sender);
        diamondUrls.push(url);
        diamondUrlsString = concat(diamondUrlsString, name, "|");
        diamondShapes.push(shape);
        diamondCarats.push(carat);
        diamondGrades.push(grade);
        diamondCuts.push(cut);
        diamondColors.push(color);
    }
    
    function buy(uint id) payable public {
        // id is index of diamond in the arrays
        require(diamondPrices.length > id && 
            msg.value >= diamondPrices[id]);

        diamondOwners[id].transfer(diamondPrices[id]);
        diamondOwners[id] = msg.sender; // change owner
    }

    function updatePrice(uint id, uint price) public {
        require(diamondPrices.length > id && 
            msg.sender == diamondOwners[id]);
        
        diamondPrices[id] = price;
    }
    
    function getDiamond(uint id) view public 
        returns (uint, string, uint, address, string) 
    {
        require(diamondPrices.length > id);
        return (id, diamondNames[id], diamondPrices[id], diamondOwners[id],
            diamondUrls[id]
        );
    }

    function getDiamondDetails(uint id) view public 
        returns (uint, uint8, uint16, uint8, uint8, uint8)
    {
        return (id, diamondShapes[id], diamondCarats[id], diamondGrades[id],
            diamondCuts[id], diamondColors[id]
        );
    }
    
    function getLastDiamond() view public 
        returns (uint, string, uint, address, string) 
    {
        uint id = diamondPrices.length - 1;
        return (id, diamondNames[id], diamondPrices[id], diamondOwners[id],
            diamondUrls[id]
        );
    }
    
    function getLastDiamondDetails() view public 
        returns (uint, uint8, uint16, uint8, uint8, uint8)
    {
        uint id = diamondPrices.length - 1;
        return (id, diamondShapes[id], diamondCarats[id], diamondGrades[id],
            diamondCuts[id], diamondColors[id]);
    }

    function getAllDiamonds() view public 
        returns (string, uint[], address[], string) 
    {
        return (diamondNamesString, diamondPrices, diamondOwners,
            diamondUrlsString
        );
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