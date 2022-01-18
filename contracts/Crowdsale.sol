//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "hardhat/console.sol";


contract Crowdsale is ERC721URIStorage {
    string public baseIpfsPath;
    
    uint public maxSupply;
    uint public mintIndex = 1;
    address public admin;
    uint maxAllowed;

    struct minter {
        uint maxAllowed;
        uint minted;
    }
    mapping (address => minter) public minters;

    constructor(string memory _baseIpfsPath, uint _maxSupply, uint _maxAllowed) ERC721("PETFI NFTs", "PET") {
        baseIpfsPath = _baseIpfsPath;
        maxSupply = _maxSupply;
        maxAllowed = _maxAllowed;
        // Admin is the originator.
        admin = msg.sender;
    }

    function mint() public returns (string memory) {
        minter storage minterInfo = minters[msg.sender];
        if (minterInfo.maxAllowed == 0) {
            minterInfo.maxAllowed = maxAllowed;
        }
        require(mintIndex < maxSupply, "CANT_MINT_MORE");
        require(minterInfo.minted < minterInfo.maxAllowed, "CANT_MINT_MORE_THAN_ALLOWED");

        _mint(msg.sender, mintIndex);
        string memory ipfsUri = string(abi.encodePacked(baseIpfsPath, Strings.toString(mintIndex), ".json"));
        console.log("ipfsUri", ipfsUri, "mintIndex", mintIndex);

        _setTokenURI(mintIndex, ipfsUri);
 
        mintIndex += 1;
        minterInfo.minted += 1;

        // Returning required variables.
        return ipfsUri;
    }
}