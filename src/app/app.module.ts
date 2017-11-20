import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DataInterceptor } from "./services/interceptors/dataInterceptor";
import { AuthGuard } from "./services/gaurd/auth.guard";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
   AuthGuard,
    {
    provide:HTTP_INTERCEPTORS,
    useClass:DataInterceptor,
    multi:true,
  }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
