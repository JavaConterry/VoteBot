//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./ERC20Standard.sol";

contract Token is ERC20Standard {
    constructor() {
        totalSupply = 10000;
        name = "Token";
        decimals = 0;
        balances[msg.sender] = totalSupply;
    }
}