const EmojiCoin = artifacts.require(`./EmojiCoin.sol`)

module.exports = (deployer) => {
  deployer.deploy(EmojiCoin)
}
