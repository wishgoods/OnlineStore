import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cart} from '../store/cart.model';

@Component({
  
  templateUrl: './cart-details.component.html'
})

export class CartDetailsComponent implements OnInit {

  constructor(public cart:Cart,public router:Router) { }

  ngOnInit(): void {

  }
  goToStore(){
    this.router.navigateByUrl("/store");
  }
   
  
}
