// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract HelloWorld {

    string public message;
    address public owner;
    uint public helloSzam;

    constructor() public {
        message = "Hello Vilag";
        owner = msg.sender;
        helloSzam = 2;
    }

    function setSzam(uint _newSzam) public {
        helloSzam = _newSzam;
    }

    function setMessage(string memory _newMessage) public {
        require(owner == msg.sender, "Nem egy owner");
        message = _newMessage;
    }
}