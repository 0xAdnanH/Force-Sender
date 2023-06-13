const { expect } = require("chai");
const { ethers } = require("hardhat");
let provider = ethers.provider;
let address1;
let address2;
let genericContract;
let forceContract;
let randomContract1;
let randomContract2;
let ethValue = ethers.utils.parseEther("10");
before(async () => {
  [address1, address2] = await ethers.getSigners();
  const GenericFactory = await ethers.getContractFactory("generic");
  const forceFactory = await ethers.getContractFactory("force");
  const randomFactory1 = await ethers.getContractFactory("receiveEth");
  const randomFactory2 = await ethers.getContractFactory("NoReceive");
  randomContract1 = await randomFactory1.deploy();
  randomContract2 = await randomFactory2.deploy();
  forceContract = await forceFactory.deploy(address2.address);
  genericContract = await GenericFactory.deploy();
});

describe("Send eth to EOA", () => {
  it("should send eth successfully", async () => {
    await expect(genericContract.sendEth(address1.address), {
      value: ethValue,
    }).to.emit(genericContract, "Received");
    const result = await provider.getBalance(address1.address);
    expect(result).to.be.greaterThan(0);
  });
});
describe("Send eth to a contract with receive", () => {
  it("should receive eth successfully", async () => {
    expect(
      await genericContract.sendEth(randomContract1.address, {
        value: ethValue,
      })
    ).to.emit(genericContract, "Received");
    const result = await provider.getBalance(randomContract1.address);
  });
});
describe("Send eth to a non receive contract", () => {
  it("should send successfully", async () => {
    await genericContract.sendEth(randomContract2.address, {
      value: ethValue,
    });
    const result = await provider.getBalance(randomContract2.address);
    expect(result).to.be.greaterThan(0);
  });
});
