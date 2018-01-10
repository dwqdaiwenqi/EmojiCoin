import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MainService } from '../main.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public main: MainService, public router: Router) {

  }

  ngOnInit() {
    if (this.main.loggedIn() == false) {
      this.router.navigateByUrl('/');
    }

    this.main.loadArtifacts();
    this.main.createEmojis();
    this.main.getBalance();
    this.main.getEmojiBalances();
  }

}
