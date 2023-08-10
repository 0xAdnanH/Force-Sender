# Force Sender

The Force Sender project explores the concept of forcibly sending native tokens to smart contracts. Unlike externally owned accounts (EOAs), smart contracts require a `receive` function or a fallback payable to accept native tokens. 

This project demonstrates how to use the `selfdestruct` mechanism to compel the transfer of native tokens, even if the recipient contract doesn't implement a special function like `receive` or `fallback`.

## Goals of the Project

The primary goal of the Force Sender project is to:

- **Highlight Selfdestruct for Forced Native Token Transfer:** Shed light on the utilization of the `selfdestruct` mechanism to forcefully transfer native tokens to contracts. By leveraging `selfdestruct`, native tokens accumulated within one contract can be seamlessly sent to an address without invoking a specific function, even if the recipient is a smart contract.

## Technicalities of the Project

- **Contract Creation using the `new` Keyword:** Unlike previous projects that employed direct `CREATE` or `CREATE2` opcodes with bytecode like [Factory](https://github.com/0xAdnanH/Factory) and [Minimal-Proxy](https://github.com/0xAdnanH/Minimal-Proxy), this project uses the `new` keyword to create a new contract. This approach leverages a pre-defined contract template to streamline deployment.

- **Usage of `selfdestruct`:** While `selfdestruct` serves the purpose in this project, it is important to approach its usage with caution. This mechanism should be employed thoughtfully, and researchers must perform due diligence before utilizing it, especially considering ongoing discussions in the Ethereum Improvement Proposal (EIP) space about its deprecation.

- **Documented with Natspec:** The project's functions and overall functionality are documented using `natspec`, providing clear insights into each function's purpose and usage.

- **Unit Tests with ethers.js:** The project incorporates unit tests written with `ethers.js` to verify the functionality of the implemented contracts.

**Note:** The Force Sender project is educational and intended to explore the concept of forcibly transferring native tokens to contracts. It is not suitable for deployment in a production environment.

## Installation

### Cloning the Repository

To get started with the Force Sender project, clone the repository and install its dependencies:

```bash
$ git clone https://github.com/0xAdnanH/Force-Sender.git
$ cd ./Force-Sender
$ npm install
```

### Instructions

#### Compile

To Compile the contract run:

```bash
$ npx hardhat compile
```

#### Tests

To run the unit tests:

```bash
$ npx hardhat test
```
