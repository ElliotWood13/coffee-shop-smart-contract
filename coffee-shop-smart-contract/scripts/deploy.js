// 0x5FbDB2315678afecb367f032d93F642f64180aa3
// Finished at Setup a basic react app, setup Metamask
const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  const accountBalance = await deployer.getBalance();

  console.log("Deploying contracts with account: ", deployer.address);
  console.log("Account balance: ", accountBalance.toString());

  const coffeeShopFactory = await hre.ethers.getContractFactory("CoffeeShop");
  const coffeeShop = await coffeeShopFactory.deploy();
  await coffeeShop.deployed();

  console.log("CoffeeShop address: ", coffeeShop.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
