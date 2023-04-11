const hre = require("hardhat");

async function main() {
  const Collection = await hre.ethers.getContractFactory("Collection");
  const collection = await Collection.deploy();

  await collection.deployed();

  console.log(
    "Collection deployed to:", collection.address
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
