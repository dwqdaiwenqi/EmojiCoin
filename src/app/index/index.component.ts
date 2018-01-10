import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import * as HDWalletProvider from "truffle-hdwallet-provider";

import { MainService } from '../main.service';

declare var web3;
declare var ethers;
declare var lightwallet;

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  public password = "";

  public ethSeedphrase = "";
  public ethPassword = "";

  constructor(public main: MainService, public router: Router) {

  }

  ngOnInit() {
    console.log(web3);
    console.log(lightwallet);
  }

  createWallet() {
    let self = this;
    let seed = lightwallet.keystore.generateRandomSeed();

    this.main.seedPhrase = seed;

    let wallet = ethers.Wallet.fromMnemonic(seed);

    this.main.wallet = wallet;
    this.main.publicKey = wallet.address;
    this.main.privateKey = wallet.privateKey;

    this.router.navigateByUrl('/passphrase');
  }

  unlockWallet() {
    let self = this;

    this.main.seedPhrase = this.ethSeedphrase;

    let wallet = ethers.Wallet.fromMnemonic(this.ethSeedphrase);

    this.main.wallet = wallet;
    this.main.publicKey = wallet.address;
    this.main.privateKey = wallet.privateKey;

    this.router.navigateByUrl('/passphrase');
  }

}
