import { Component, OnInit } from '@angular/core';
import {Cart} from "../store/cart.model";
import {Router} from "@angular/router";

@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {
  public is_cart:boolean =false;
  constructor(public cart:Cart,public router:Router) {

    
   }

  ngOnInit(): void {
  }
  goToCart(){
    this.is_cart=false;
    //this.router.navigateByUrl("/cart");
  }
  
  checkCart():boolean
  {
    return this.is_cart;
  }

}
