// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;
contract Cafe{
    struct Memo{
        string name;
        string message;
        uint timestamp;
        address from;

    }
    Memo[] memos;
    address payable owner;
    constructor(){
        owner= payable(msg.sender);
    }
    function buy(string memory name,string memory message) public payable{
        require(msg.value>0,"Pay more than 0 ETH");
        owner.transfer(msg.value);
        memos.push(Memo(name,message,block.timestamp,msg.sender));




    }
    function getMemos() public view returns(Memo[] memory){
        return memos;
    }
}