const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const coffeeShop = await hre.ethers.getContractFactory("CoffeeShop");
  const coffeeShopContract = await coffeeShop.deploy();
  await coffeeShopContract.deployed();
  console.log("Contract deployed to:", coffeeShopContract.address);

  console.log("Contract deployed by:", owner.address);

  await coffeeShopContract.getTotalCoffeesBought();

  const buyCoffeeTxn = await coffeeShopContract.buyCoffee();
  await buyCoffeeTxn.wait();

  await coffeeShopContract.getTotalCoffeesBought();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0); // exit Node process without error
  } catch (error) {
    console.log(error);
    process.exit(1); // exit Node process while indicating 'Uncaught Fatal Exception' error
  }
  // Read more about Node exit ('process.exit(num)') status codes here: https://stackoverflow.com/a/47163396/7974948
};

runMain();
