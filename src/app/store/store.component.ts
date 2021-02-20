import { HashLocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/product.model';
import { repository } from '../Model/product.repository';
import { Cart } from './cart.model';
import {Router} from '@angular/router'
@Component({
  selector: 'store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  public selectedCategory: any = null;
  public productPerPage: number = 4;
  public selectedPage: number = 1;

  constructor(private rep: repository,
              private cart:Cart,
              private router :Router          ) { }

  ngOnInit(): void {
    //console.log(this.cart.lastAddedCategory)
    if(this.cart.lastAddedCategory="Category1")
    {this.changeCategory(1);}
    else{this.changeCategory(2);}
    
  }
  get products(): Product[] {
    let pageIndex = (this.selectedPage - 1) * this.productPerPage;
    return this.rep.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productPerPage);

  }
  get categories(): string[] {
    
    return this.rep.getCategories();
  }
  changeCategory(newCategory?: any) {
    this.selectedCategory = newCategory;
    this.changePage(1);
  }
  changePage(newPage: number) {
   
   
   
      this.selectedPage = newPage;

  }
  changePageSize(newSize: number = 4) {
    //console.log(newSize)
    if (newSize == null)
      this.productPerPage = 4
    else
      this.productPerPage = Number(newSize);
     this.changePage(1);
  }
  get PageNumbers(): number[] {
    return Array(Math.ceil(this.rep
      .getProducts(this.selectedCategory).length / this.productPerPage))
      .fill(0).map((x, i) => i + 1);
  }
  addProductToCart(product:Product)
  {
    this.cart.addLines(product);
    this.router.navigateByUrl("/cart");
  }
}
