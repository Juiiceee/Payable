// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Payable {

    function send() payable public {
    }

    function getBalance() view public returns(uint256){
		return address(this).balance;
	}
}
