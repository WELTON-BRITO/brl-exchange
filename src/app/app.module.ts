import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { ExchangeService } from './services/exchange.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [
    AppComponent,
    ExchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,              
    HttpClientModule,   
    NbEvaIconsModule
  ],
  providers: [ExchangeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
