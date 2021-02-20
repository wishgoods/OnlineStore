import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import {from, Observable} from "rxjs";
import { Order } from "./order.model";

@Injectable()
export class StaticDataSource{

    private products:Product[]=[
        new Product(1,"Shirt","Category1","TShirt(Category1)",100),
        new Product(2,"Pants","Category1","Shorts(Category1)",50),
        new Product(3,"Coats","Category1","Wind-Block(Category1)",250),
        new Product(4,"perfume","Category2","Gucci(Category2)",150),
        new Product(4,"perfume","Category2","channel(Category2)",200),
        new Product(4,"perfume","Category2","dior(Category2)",300),
        new Product(7,"Hat","Category1","work(Category1)",100),
        new Product(8,"Hat","Category1","helmet(Category1)",100),
        new Product(9,"Lipstick","Category2","Red(Category2)",100),
        new Product(10,"Wallet","Category1","Leather(Category1)",100)
    ]

    getProducts():Observable<Product[]>
    {
            return from([this.products]);
    }
    saveOrder(order:Order):Observable<Order>
    {
        console.log(JSON.stringify(order));
        return from ([order]);
    }
}