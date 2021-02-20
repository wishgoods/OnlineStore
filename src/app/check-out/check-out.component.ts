import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import{Order} from '../Model/order.model';
import {OrderRepository} from '../Model/order.repository';
import { Cart } from '../store/cart.model';

@Component({
 
  templateUrl: './check-out.component.html',
  styleUrls:['./check-out.component.css']
 
})
export class CheckOutComponent implements OnInit {
orderSent:boolean=false;
submitted:boolean=false;
  constructor(public repository:OrderRepository,public order:Order,private cart:Cart) {

   }

  ngOnInit(): void {
  }
  submitOrder(form:NgForm)
  {
    this.submitted=true;
    if(form.valid)
    {
      this.repository.saveOrder(this.order).subscribe(order=>{
        this.order.clear();
        this.orderSent=true;
        this.submitted=false;
      });
    }
    this.cart.clear();
    
  }

}
