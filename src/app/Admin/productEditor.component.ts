import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "../Model/product.model";
import { repository } from "../Model/product.repository";

@Component({
    templateUrl: "productEditor.component.html"
})
export class ProducEditorComponent {

    editing: boolean = false;
    product: Product = new Product();

    constructor(private rep: repository, private router: Router, activateRoute: ActivatedRoute) {

        this.editing = activateRoute.snapshot.params["mode"] == "edit";
       // console.log(this.editing);
        if (this.editing) {
            Object.assign(this.product, rep.getProduct(activateRoute.snapshot.params["id"]));
        }
    }
    save(form: NgForm) {
        this.product.id = 1;
        while(this.rep.getProduct(this.product.id) )
        {
            this.product.id += 1;
        }
        //while (this.rep.getProducts().find(p => p.id = this.product.id) != undefined) {

         //   this.product.id += 1;
      //  }

        this.rep.saveProduct(this.product);
        this.router.navigateByUrl("/admin/main/products");
    }
}