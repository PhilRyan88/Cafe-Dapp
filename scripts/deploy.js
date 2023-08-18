const hre = require("hardhat");

async function main() {
  const Caffe = await hre.ethers.getContractFactory("Cafe");
  const Cafe = await Caffe.deploy();

  await Cafe.waitForDeployment();

  console.log("Deployed to :", `${Cafe.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
