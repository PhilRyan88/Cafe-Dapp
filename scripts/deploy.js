const hre = require("hardhat");

async function main() {
  const Cafe = await hre.ethers.getContractFactory("Cafe");
  const lock = await Lock.deploy();

  await Cafe.deployed();

  console.log("Deployed address :", `${lock.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
