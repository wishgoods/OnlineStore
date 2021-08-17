import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { CommonModule } from '@angular/common';
import { AuthGuard } from './auth.guard';
import { ProducEditorComponent } from './productEditor.component';
import { productTableComponent } from './productTable.component';
import { OrderTableComponent } from './OrderTable.component';

/*
let routing = RouterModule.forChild
    (
        [
            { path: "auth", component: AuthComponent },
            { path: "main", component: AdminComponent,canActivate:[AuthGuard] },
            { path: "**", redirectTo: "auth" },
        ]

    )*/


let routing = RouterModule.forChild(
    [
        { path: "auth", component: AuthComponent },
        {
            path: "main", component: AdminComponent, canActivate: [AuthGuard],

            children:
                [
                    { path: "products/:mode/:id", component: ProducEditorComponent },
                    { path: "products/:mode", component: ProducEditorComponent },
                    { path: "products", component: productTableComponent },
                    { path: "orders", component: OrderTableComponent },
                    { path: "**", redirectTo: "products" }
                ]
        },
        { path: "**", redirectTo: "auth" },
    ]
)

@NgModule({


    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [AuthComponent, AdminComponent,
        ProducEditorComponent, productTableComponent, OrderTableComponent]

})
export class AdminModule { }
