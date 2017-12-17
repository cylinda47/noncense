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
    uint8[] diamondClaritys;
    uint8[] diamondCuts;
    uint8[] diamondColors;

    address contractOwner;
    
    mapping(address => uint[]) ownerDiamondIds;
    
    function Diamonds() public {
        // constructor function
        contractOwner = msg.sender;
    }
    
    function createDiamond(string name, uint price, string url, uint8 shape, 
        uint16 carat, uint8 clarity, uint8 cut, uint8 color) public 
    {
        ownerDiamondIds[msg.sender].push(diamondNames.length);
        diamondNames.push(name);
        diamondNamesString = concat(diamondNamesString, name, "|");
        diamondPrices.push(price);
        diamondOwners.push(msg.sender);
        diamondUrls.push(url);
        diamondUrlsString = concat(diamondUrlsString, url, "|");
        diamondShapes.push(shape);
        diamondCarats.push(carat);
        diamondClaritys.push(clarity);
        diamondCuts.push(cut);
        diamondColors.push(color);
    }
    
    function buy(uint id) payable public {
        // check for valid id and sufficient funds sent
        require(diamondPrices.length > id && 
            msg.value >= diamondPrices[id]);
        
        // remove id from previous owner's array of diamond ids
        uint[] memory ids = ownerDiamondIds[diamondOwners[id]];
        for (uint i = 0; i < ids.length; i++) {
            if (ids[i] == id) {
                // move last id value to index of id
                ownerDiamondIds[diamondOwners[id]][i] = ids[ids.length - 1];
                break;
            }
        }
        
        // shorten previous owner's array of diamond ids by 1
        ownerDiamondIds[diamondOwners[id]].length --;
        
         // transfer money to previous owner
        diamondOwners[id].transfer(diamondPrices[id]);
        
        // change ownership
        diamondOwners[id] = msg.sender;
        ownerDiamondIds[msg.sender].push(id);
    }

    function updatePrice(uint id, uint price) public {
        require(diamondPrices.length > id && 
            msg.sender == diamondOwners[id]);
        
        diamondPrices[id] = price;
    }

    function getAllDiamonds() view public 
        returns (string, uint[], address[], string) 
    {
        return (diamondNamesString, diamondPrices, diamondOwners,
            diamondUrlsString
        );
    }

    function getOwnDiamonds() view public
        returns (uint[], string, uint[], string) 
    {   
        uint[] memory ids = ownerDiamondIds[msg.sender];
        uint[] memory prices = new uint[](ids.length);
        string memory namesString;
        string memory urlsString;
        
        for (uint i = 0; i < ids.length; i++) {
            prices[i] = diamondPrices[ids[i]];
            namesString = concat(namesString, diamondNames[ids[i]], "|");
            urlsString = concat(urlsString, diamondUrls[ids[i]], "|");
        }
        
        return (ids, namesString, prices, urlsString);
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
        return (id, diamondShapes[id], diamondCarats[id], diamondClaritys[id],
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
        return (id, diamondShapes[id], diamondCarats[id], diamondClaritys[id],
            diamondCuts[id], diamondColors[id]);
    }
    
    function kill() public {
        // destroy contract and send all remaining funds to contract owner's address
        require (msg.sender == contractOwner);
        selfdestruct(contractOwner);
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