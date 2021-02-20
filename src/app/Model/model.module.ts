import {repository} from './product.repository' 
import {StaticDataSource} from './static.datasource'
import{NgModule} from "@angular/core"
import { Cart } from '../store/cart.model'
import { Order } from './order.model'
import { OrderRepository } from './order.repository'
import { AuthService } from './auth.service'
import { HttpClientModule } from '@angular/common/http'
import { RestDataSource } from './rest.datasource'


@NgModule
({
        imports :[HttpClientModule],
        providers:[]=[repository,Cart,Order,OrderRepository,
        {provide:StaticDataSource,useClass:RestDataSource},   //remove to use static 
        RestDataSource,AuthService
        ] 
})

export class modelModule{


}