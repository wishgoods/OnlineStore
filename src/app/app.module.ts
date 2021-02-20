import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {StoreModule} from './store/store.module';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckOutComponent } from './check-out/check-out.component';


@NgModule({
  declarations: [
    AppComponent

  
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
