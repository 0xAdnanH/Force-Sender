// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract receiveEth {
    event Succeed(string);

    receive() external payable {
        emit Succeed("sending succeeded");
    }
}
