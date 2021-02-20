import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './Admin/admin.component';
import { AdminModule } from './Admin/admin.module';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { StoreComponent } from './store/store.component';
import { StoreModule } from './store/store.module';
import {StoreFirstGuard} from './storefirst.guard'
const routes: Routes = [];

@NgModule({
  imports: [BrowserModule,StoreModule, RouterModule.forRoot(
    [
      {path:"store",component:StoreComponent,canActivate:[StoreFirstGuard]}
      ,{path:"cart",component:CartDetailsComponent,canActivate:[StoreFirstGuard]}
      ,{path:"checkout",component:CheckOutComponent,canActivate:[StoreFirstGuard]}
      ,{path:"admin",loadChildren:"./Admin/admin.module#AdminModule",canActivate:[StoreFirstGuard]}
       ,{path:"**",redirectTo:"/store"}
    ]
  )],
  providers:[StoreFirstGuard],
  exports: [RouterModule]

})
export class AppRoutingModule { }
