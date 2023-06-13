/**
 * @title Generic Contract
 * @dev A contract that allows sending Ether to a target address.
 */

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract generic {
    /**
     * @dev Emitted when Ether is received and successfully sent to the target address.
     * @param message A message indicating the successful call to the target address.
     */
    event Received(string message);

    /**
     * @dev Sends Ether to a target address.
     * @param targetAddress The address to send the Ether to.
     * @return returnData The return data from the call to the target address.
     */
    function sendEth(
        address targetAddress
    ) public payable returns (bytes memory) {
        (bool success, bytes memory returnData) = targetAddress.call{
            value: msg.value
        }("");
        if (success) {
            emit Received("calledSuccessfully");
            return returnData;
        } else {
            new force{value: msg.value}(payable(targetAddress));
        }
    }
}

/**
 * @title Force Contract
 * @dev A contract used to forcibly transfer Ether to a target address.
 */
contract force {
    /**
     * @dev Constructor function that self-destructs and transfers the Ether to the target address.
     * @param targetAddress The address to transfer the Ether to.
     */
    constructor(address payable targetAddress) payable {
        selfdestruct(targetAddress);
    }
}
