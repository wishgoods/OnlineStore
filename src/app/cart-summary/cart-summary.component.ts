import { Component, OnInit } from '@angular/core';
import {Cart} from "../store/cart.model";
import {Router} from "@angular/router"
@Component({
  selector: 'cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  constructor(public cart:Cart,public router:Router) {

    
   }

  ngOnInit(): void {
  }
  goToCart(){
    this.router.navigateByUrl("/cart");
  }
}
