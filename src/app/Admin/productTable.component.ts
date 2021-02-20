import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../Model/product.model";
import { repository } from "../Model/product.repository";
@Component({

    templateUrl: "ProductTable.component.html"
})
export class productTableComponent {

    path = 'admin/main/products/';


    constructor(private rep: repository, private router: Router) {

    }
    get products(): Product[] {
        return this.rep.getProducts();
    }
    deleteProduct(id: any) {
        this.rep.deleteProduct(id);
    }
    editProduct(id: any = 0) {
        //console.log(id)
        if (id == 0)
            this.router.navigateByUrl(this.path + "create/");
        else
            this.router.navigateByUrl(this.path + "edit/" + id);
    }




}
