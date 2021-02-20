import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from './product.model';
import { Cart } from './../store/cart.model';
import { Order } from './order.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { $ } from "protractor";


const PROTOCOL = "http";
const PORT = 4210;//4210 ?

@Injectable()
export class RestDataSource {

    baseUrl: string = "";
    auth_token: string = "";

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getProducts(): Observable<Product[]> {

        let prods = this.http.get<Product[]>(this.baseUrl + "products/");
        //console.log(this.baseUrl + "products");
        return prods;

    }
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }




    authenticate(user: string, pass: string): Observable<boolean> {
       
        
        return this.http.post<any>(this.baseUrl + "login", {
            name: user,
            password: pass
        }).pipe(map(response => {
            this.auth_token = response.success ?
                response.token : null;
            return response.success;
        }));
    }
    saveProduct(product: Product): Observable<Product> {
        return this.http.post<Product>(this.baseUrl + "products", product, this.getOptions());
    }
    updateProduct(product: Product): Observable<Product> {
        return this.http.put<Product>(`${this.baseUrl}products/${product.id}`, product, this.getOptions());
    }

    deleteProduct(id: number): Observable<Product> {
        return this.http.delete<Product>(`${this.baseUrl}products/${id}`, this.getOptions());
    }

    private getOptions() {
        return {
            headers: new HttpHeaders
                ({
                    "Authorization": `Bearer<${this.auth_token}>`
                })
        };
    }
    getOrder(): Observable<Order[]> {
        return this.http.get<Order[]>(this.baseUrl + "orders", this.getOptions());
    }
    updateOrder(order :Order): Observable<Order> {
        return this.http.put<Order>(`${this.baseUrl} orders/${order.id}`, this.getOptions());
    }
    
    deleteOrder(id: number): Observable<Order> {
        return this.http.delete<Order>(`${this.baseUrl}orders/${id}`, this.getOptions());
    }

}