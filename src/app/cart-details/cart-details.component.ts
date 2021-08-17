import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { booleanCartService } from '../store/boolean-cart-service';
import {Cart} from '../store/cart.model';

@Component({
  selector:'app-cart-details',
  templateUrl: './cart-details.component.html'
})

export class CartDetailsComponent implements OnInit {
  public is_cart:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  constructor(public cart:Cart,public router:Router,
    public b_service:booleanCartService) { }

  ngOnInit(): void {

  }
  goToStore(){
    this.router.navigateByUrl("/store");
  }
   hideCart()
   {
     this.b_service.setValue(this.is_cart);
   }
  
}
