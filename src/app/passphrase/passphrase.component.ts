import { Component, OnInit } from '@angular/core';

import { MainService } from '../main.service';

@Component({
  selector: 'app-passphrase',
  templateUrl: './passphrase.component.html',
  styleUrls: ['./passphrase.component.scss']
})
export class PassphraseComponent implements OnInit {

  constructor(public main: MainService) {

  }

  ngOnInit() {
    
  }

}
