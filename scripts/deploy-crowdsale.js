// Deploying the crowdsale contract.

const baseIpfsPath = "ipfs://QmU9weLhTPpDeenZccrnU1rWSxH5NcUb7cuyR8LdWcKwoe/";
const maxSupply = 13;
const maxAllowed = 3;

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  const Crowdsale = await ethers.getContractFactory("Crowdsale");
  const crowdsale = await Crowdsale.deploy(baseIpfsPath, maxSupply, maxAllowed);
  await crowdsale.deployed();
  console.log(`Deployed the crowdsale contract to: ${crowdsale.address}`);
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
