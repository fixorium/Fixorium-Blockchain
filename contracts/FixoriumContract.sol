 pragma solidity ^0.8.0;

contract FixoriumContract {
    // Mapping of addresses to balances
    mapping (address => uint256) public balances;

    // Event emitted when tokens are transferred
    event Transfer(address indexed from, address indexed to, uint256 value);

    // Constructor function
    constructor() public {
        // Initialize the contract
    }

    // Function to transfer tokens
    function transfer(address _to, uint256 _value) public {
        // Check if the sender has sufficient balance
        require(balances[msg.sender] >= _value, "Insufficient balance");

        // Update the balances
        balances[msg.sender] -= _value;
        balances[_to] += _value;

        // Emit the Transfer event
        emit Transfer(msg.sender, _to, _value);
    }
}

