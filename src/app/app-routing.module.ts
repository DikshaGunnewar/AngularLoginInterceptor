import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./services/gaurd/auth.guard";


const routes:Routes=[
    {
        path: '',
        loadChildren: './layout/layout.module#LayoutModule',
        canActivate: [AuthGuard]
    },

    {
        path: 'login', loadChildren: './login/login.module#LoginModule'
    },

    {
        path: 'signup', loadChildren: './signup/signup.module#SignupModule'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true })],
    exports: [RouterModule]
})
export class AppRoutingModule{}