import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';

import { MainService } from './main.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { PassphraseComponent } from './passphrase/passphrase.component';
import { TradeComponent } from './trade/trade.component';
import { HeaderComponent } from './header/header.component';
import { MarketComponent } from './market/market.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    PassphraseComponent,
    TradeComponent,
    HeaderComponent,
    MarketComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    FormsModule,
    RouterModule.forRoot([
      {
        'path': '',
        'component': IndexComponent
      },
      {
        'path': 'passphrase',
        'component': PassphraseComponent
      },
      {
        'path': 'trade',
        'component': TradeComponent
      },
      {
        'path': 'market',
        'component': MarketComponent
      },
      {
        'path': 'dashboard',
        'component': DashboardComponent
      }
    ])
  ],
  providers: [
    MainService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
