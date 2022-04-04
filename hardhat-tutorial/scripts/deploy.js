const { ethers } = require("hardhat");

async function main() {
  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so ReportHealthContract here is a factory for instances of our ReportHealth contract.
  */
  const ReportHealthContract = await ethers.getContractFactory("ReportHealth");

  // here we deploy the contract
  const deployedReportHealthContract = await ReportHealthContract.deploy();
  // 10 is the Maximum number of ReportHealthed addresses allowed
  
  // Wait for it to finish deploying
  await deployedReportHealthContract.deployed();

  // print the address of the deployed contract
  console.log(
    "ReportHealth Contract Address:",
    deployedReportHealthContract.address
  );
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
