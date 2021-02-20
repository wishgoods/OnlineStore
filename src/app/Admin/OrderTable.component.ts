import { Component } from "@angular/core";
import { Order } from "../Model/order.model";
import { OrderRepository } from "../Model/order.repository";

@Component({
    templateUrl:"OrderTable.component.html"
})
export class OrderTableComponent{

    includeShipped = false;

    constructor(private rep:OrderRepository)
    {

    }
    getOrders():Order[]
    {
        return this.rep.getOrders().filter(o=>this.includeShipped||!o.shipped);
    }
    markShipped(order:Order)
    {
       order.shipped=true;
       this.rep.updateOrder(order);
       
       
       
    }
    delete(id:number)
    {
        this.rep.deleteOrder(id);
    }
}
