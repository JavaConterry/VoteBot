//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./IERC20.sol";

contract Token is IERC20 {

    mapping(address => uint256) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;
    uint256 private _totalSupply;
    string private _name;
    string private _symbol;



    function name() public view returns (string){
        return _name;
    }
    function symbol() public view returns (string){
        return _symbol;
    }
    function decimals() public view returns (uint8){
        return 18;
    }
    function totalSupply() public view returns (uint256){
        _totalSupply;
    }
    function balanceOf(address _owner) public view returns (uint256 balance){
        return _balances[_owner];
    }
    function transfer(address _to, uint256 _value) public returns (bool success){
        address owner = msg.sender;
        if(balanceOf(owner)>=_value){
            _balances[owner] -= _value;
            _balances[_to] += _value;
        }
    }
    function transferFrom(address _from, address _to, uint256 _value) public returns (bool success){
        require(approve(_from), "ERC20: not enough tokens");
        _balances[_from] -= _value;
        _balances[_to] += _value;
        
    }
    function approve(address _spender, uint256 _value) public returns (bool success){
        return balanceOf(_spender)>=_value;
    }
    function allowance(address _owner, address _spender) public view returns (uint256 remaining){
        return _allowances[owner][spender];
    }

}