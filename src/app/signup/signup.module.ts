import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SignupComponent } from "./signup.component";
import { SignupRoutingModule } from "./signup-routing.module";
import { ReactiveFormsModule } from "@angular/forms";
import { DataService } from "../services/dataService/data.service";

@NgModule({
    declarations: [
        SignupComponent
    ],
    imports:
    [
        CommonModule,
        SignupRoutingModule,
        ReactiveFormsModule
    ],
    providers:[DataService]
})
export class SignupModule{}