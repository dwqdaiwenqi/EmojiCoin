import { Injectable } from '@angular/core';

import * as contract from 'truffle-contract'
import emoji_artifact from './EmojiCoin'

declare var web3;
declare var ethers;

@Injectable()
export class MainService {

  public wallet = {};

  public seedPhrase = "";
  public publicKey = "";
  public privateKey = "";
  public password = "";

  public ethBalance = 0;
  public emojiBalances = [];

  public masterAddress = "0xc32eddfc4921f0f5f4df2513b63469da84fae998";

  public emojis = [
    {
      "symbol": "😀",
      "index": 0,
      "base_price": 0.1,
      "supply": 0,
      "totalSupply": 0,
      "balance": 0,
      "amount": 0
    },
    {
      "symbol": "😂",
      "index": 1,
      "base_price": 0.25,
      "supply": 0,
      "totalSupply": 0,
      "balance": 0,
      "amount": 0
    },
    {
      "symbol": "💩",
      "index": 2,
      "base_price": 1,
      "supply": 0,
      "totalSupply": 0,
      "balance": 0,
      "amount": 0
    },
    {
      "symbol": "🦄",
      "index": 3,
      "base_price": 1,
      "supply": 0,
      "totalSupply": 0,
      "balance": 0,
      "amount": 0
    },
    {
      "symbol": "👏",
      "index": 4,
      "base_price": 0.5,
      "supply": 0,
      "totalSupply": 0,
      "balance": 0,
      "amount": 0
    },
  ]

  public EmojiCoin;

  constructor() {

  }

  createEmojis() {
    for (var i = 0; i < 5; i++) {
      this.createEmoji(i);
    }
  }

  createEmoji(i) {
    this.EmojiCoin.deployed().then((instance) => {
      return instance.createEmoji(i, 100, { from: this.masterAddress });
    })
    .then(() => {
      console.log("Emoji Index", i, "created!");
    })
  }

  loadArtifacts() {
    this.EmojiCoin = contract(emoji_artifact);
    this.EmojiCoin.setProvider(web3.currentProvider);
    console.log(this.EmojiCoin);
  }

  loggedIn() {
    return this.privateKey.length > 0 && this.publicKey.length > 0;
  }

  getBalance() {
    let balance = web3.fromWei(web3.eth.getBalance(this.publicKey)).toNumber().toFixed(2);
    this.ethBalance = balance;
  }

  getEmojiBalances() {

    this.emojis.forEach((emoji, index) => {

      console.log("Getting emoji", emoji['index'], "info");

      this.getEmojiSupply(emoji, index);
      this.getEmojiBalance(emoji, index);
      this.getMyEmojiBalance(emoji, index);

    });
  }

  getEmojiSupply(emoji, index) {
    this.EmojiCoin.deployed().then((instance) => {
      return instance.getEmojiSupply(emoji['index']);
    })
    .then((value) => {
      this.emojis[index]['totalSupply'] = value.toNumber();
    });
  }

  getEmojiBalance(emoji, index) {
    this.EmojiCoin.deployed().then((instance) => {
      return instance.getEmojiBalance(this.publicKey, emoji['index']);
    })
    .then((value) => {
      this.emojis[index]['supply'] = value.toNumber();
    });
  }

  getMyEmojiBalance(emoji, index) {
    this.EmojiCoin.deployed().then((instance) => {
      return instance.getEmojiBalance(this.publicKey, emoji['index']);
    })
    .then((value) => {
      this.emojis[index]['balance'] = value.toNumber();
    });
  }

  buyEmoji(emoji, amount) {
    this.EmojiCoin.deployed().then((instance) => {
      return instance.sendEmojis(this.publicKey, emoji.index, amount, { from: this.masterAddress })
    })
    .then((value) => {
      web3.eth.sendTransaction({
        from: this.publicKey,
        to: this.masterAddress,
        value: web3.toWei(amount * emoji.base_price, "ether")
      })
      this.getEmojiBalances();
    })
  }

}
