import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";

@Injectable()

export class AuthService {

    constructor(private restsource:RestDataSource) {

    }
    authenticate(username: string, password: string): Observable<boolean> {
    
       
        return this.restsource.authenticate(username, password);
    }
    get authenticated():boolean
    {
        return this.restsource.auth_token!="";
    }
    clear()
    {
        this.restsource.auth_token="";
    }
}