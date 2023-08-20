const hre = require("hardhat");

async function main() {
  const cafe = await hre.ethers.getContractFactory("cafe");
  const contract = await cafe.deploy(); //instance of contract

  await contract.deployed();
  console.log("Address of contract:", contract.address);
}
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
