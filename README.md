https://github.com/0xAdnanH/Generic-Contract.git

## Installation

### cloning the repository

You can clone the repository and install its dependencies to start using the smart contracts.

```bash
$ git clone https://github.com/0xAdnanH/Generic-Contract.git
$ cd ./Generic-Contract
$ npm install
```


## Explanation 

This repository contains a generic contract written in Solidity that facilitates the sending of Ether in addition to a force contract that uses "self-destruct" opcode . When Low-Level-Call fails to send ether , the force contract is used to send ether forcefully . 

### Case of failing
If the recipient address was not an EOA (otherwise it is a smart contract), a receive or fallback function is needed to receive the ether . But supposing the contract does not have any of these functions , the generic contract has the logic to forcefully send ether .
