import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "./order.model"
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from "./static.datasource";


@Injectable()
export class OrderRepository {

    private orders: Order[] = [];
    private loaded: boolean = false;

    constructor(private datasource: StaticDataSource, private restsource: RestDataSource) {

    }
    loadOrders() {
        this.loaded = true;
        this.restsource.getOrder().subscribe(orders => this.orders = orders);
    }
    getOrders(): Order[] {
        return this.orders;
    }




    saveOrder(order: Order): Observable<Order> {

        return this.restsource.saveOrder(order);
    }

    updateOrder(order: Order): Observable<Order> {
        this.restsource.updateOrder(order)
        .subscribe(order =>
             { 
                 this.orders.splice(this.orders.
                    findIndex(o => o.id == order.id), 1, order);
                 })
         return this.restsource.updateOrder(order);
    }
    deleteOrder(id:number){
        this.restsource.deleteOrder(id).subscribe(
            order=>{
                this.orders.splice(this.orders.findIndex(o=>o.id = id),1);
            }
        );
    }
}




