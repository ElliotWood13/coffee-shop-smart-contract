// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.17;
import "hardhat/console.sol";

contract CoffeeShop {
    uint256 totalCoffeesBought;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function buyCoffee() public {
        totalCoffeesBought += 1;
        console.log("Coffee bought by:", msg.sender);
    }

    function getTotalCoffeesBought() public view returns (uint256) {
        console.log("Total number of coffees bought:", totalCoffeesBought);
        return totalCoffeesBought;
    }
}
