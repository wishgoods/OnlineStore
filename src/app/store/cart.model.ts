import { Injectable } from "@angular/core";
import { Product } from "../Model/product.model";

@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemcount: number = 0;
    public cartPrice: number = 0;
    public lastAddedCategory:any="Category1";

    addLines(product: Product, quantity: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        this.lastAddedCategory =line?.product.category;

        if (line != undefined) {
            line.quantity += quantity;
        }
        else {
            this.lines.push(new CartLine(product, quantity));
        }
        this.recalculate();


    }

    updateQuantity(product: Product, quantity: number = 1) {
        if (quantity>0) {
            let line = this.lines.find(line => line.product.id == product.id);
            if (line != undefined) {
                line.quantity = Number(quantity);
            }
            this.recalculate();
        }
        else
        {
            let line = this.lines.find(line => line.product.id == product.id);
            if (line != undefined) {
                line.quantity = Number(0);
            }
            this.recalculate();
           // this.removeLine(Number(product.id));
        }
    }

    removeLine(id: Number) {
        console.log(this.lines.length);
        let index = this.lines.findIndex(line => line.product.id == id);
        console.log(index);
        this.lines.splice(index, 1);
        this.recalculate();
    }
    clear() {
        this.lines = [];
        this.cartPrice = 0;
        this.itemcount = 0;
        this.recalculate();
    }
    private recalculate() {
        this.itemcount = 0;
        this.cartPrice = 0;
        this.lines.forEach(line => {
            this.itemcount += line.quantity;
            this.cartPrice += (line.quantity * Number(line.product.price));
        });
    }

}

export class CartLine {
    constructor(public product: Product, public quantity: number) {

    }

    get lineTotal() {
        return this.quantity * Number(this.product.price);
    }

}