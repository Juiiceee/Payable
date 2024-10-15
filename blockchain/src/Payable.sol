// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract Payable {

    function paye(uint256 newNumber) payable public {
    }

    function rece() view public returns(uint256){
		return address(this).balance;
	}
}
