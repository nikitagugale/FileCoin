// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract CryptoCat is ERC20 {
    constructor() ERC20("CryptoCat", "CPC") {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}

// 0x55867B5dC30dB7c5aB9DC86deB9A82064cc7259B