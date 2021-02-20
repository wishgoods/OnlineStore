import { StoreComponent } from './store.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { modelModule } from '../Model/model.module'
import { Cart } from './cart.model';
import { CartSummaryComponent } from '../cart-summary/cart-summary.component';
import { CartDetailsComponent } from '../cart-details/cart-details.component';
import { CheckOutComponent } from '../check-out/check-out.component';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [
        StoreComponent,
        CartSummaryComponent,
        CartDetailsComponent,
        CheckOutComponent
    ],
    imports: [
        modelModule,
        BrowserModule,
        FormsModule,
        RouterModule
    ],
exports:[
    StoreComponent,  CartDetailsComponent,
    CheckOutComponent
]

})
export class StoreModule { }
