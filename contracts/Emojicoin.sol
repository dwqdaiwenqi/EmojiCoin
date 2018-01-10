pragma solidity ^0.4.17;

contract EmojiCoin {

	mapping (uint => uint) public indexes;
	mapping (uint => mapping (address => uint)) public emojis;

	function EmojiCoin() public {

	}

	function createEmoji(uint index, uint supply) public returns(bool) {
		if (indexes[index] > 0) return false;
		indexes[index] = supply;
		emojis[index][msg.sender] = supply;
		return true;
	}

	function sendEmojis(address receiver, uint index, uint amount) public returns(bool) {
		if (emojis[index][msg.sender] < amount) return false;

		emojis[index][msg.sender] -= amount;
		emojis[index][receiver] += amount;

		return true;
	}

	function getEmojiSupply(uint index) public constant returns(uint) {
		return indexes[index];
	}

	function getEmojiBalance(address account, uint index) public constant returns(uint) {
		return emojis[index][account];
	}
}
