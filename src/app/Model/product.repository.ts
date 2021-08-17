import { Injectable } from "@angular/core";
import { Product } from './product.model';
import { RestDataSource } from "./rest.datasource";
import { StaticDataSource } from './static.datasource'
@Injectable()
export class repository {

    private products: any[] = [];
    private categories: any[] = [];

    constructor(private datasource: StaticDataSource, private restsource: RestDataSource) {

        restsource.getProducts().subscribe(data => {


            this.products = data;
            this.categories = data.map(p => p.category)
                .filter((c, index, array) => array.indexOf(c) == index).sort();

        });
       // console.log(this.categories);





    }
    getProducts(category: string = ""): Product[] {
        if(category=="")
            return this.products;
            
        return this.products.filter(p => category == "" || category == p.category)
    }
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }
    getCategories(): string[] {

        return this.categories;

    }

    saveProduct(product: Product) {
        debugger
        if (product.id == null || product.id == 0) {
            this.restsource.saveProduct(product).subscribe(p => this.products.push(p));
        }
        else {
            this.restsource.updateProduct(product).subscribe(p => {
                this.products.splice(this.products.findIndex(p => p.id == product.id), 1, product)
            });
        }
    }


    deleteProduct(id: number) {
        this.restsource.deleteProduct(id).subscribe(p=>{
            this.products.splice(this.products.findIndex(p=>p.id==id),1);
        });
    }

}