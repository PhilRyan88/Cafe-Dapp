// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.2 <0.9.0;

contract Cafe{

    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;
    }
    Memo[] memos;
    address payable owner; //to receive payment i had to use payable
    constructor(){
        owner=payable(msg.sender);


    }
    function buy(string calldata name,string calldata message) external payable{
        require(msg.value>0,"Amount should be more than 0 ether");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));



    }
    function getMemos()public view returns (Memo[] memory){
        return memos;
    }

}