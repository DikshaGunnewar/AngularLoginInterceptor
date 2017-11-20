import { LayoutRoutingModule } from "./layout-routing.module";
import { LayoutComponent } from "./layout.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations:[
        LayoutComponent
    ],
    imports:[
        CommonModule,
        LayoutRoutingModule
    ]
})
export class LayoutModule{}