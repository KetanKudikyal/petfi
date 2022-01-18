// Test the crowdsale contract.
const { expect } = require("chai");
const { ethers } = require("hardhat");

const baseIpfsPath = "ipfs://QmWkfRwR6TK8STyAe66iA7vCZhZrcd28uJdHJ9VEw7keig/";
const maxSupply = 13;
const maxAllowed = 3;

describe("Initializing the contract.", () => {
  it("Should deploy properly", async () => {
    const [owner, addr1] = await ethers.getSigners();
    const Crowdsale = await ethers.getContractFactory("Crowdsale");
    const crowdsale = await Crowdsale.deploy(
      baseIpfsPath,
      maxSupply,
      maxAllowed
    );
    await crowdsale.deployed();

    // Let's try to mint some NFTs.
    const mintTx1 = await crowdsale.connect(addr1).mint();
    await mintTx1.wait();
  });
});
