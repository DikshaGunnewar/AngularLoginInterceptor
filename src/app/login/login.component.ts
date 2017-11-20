import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { AuthService } from "../services/authService/auth.service";
import { Router } from "@angular/router";
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

myform:FormGroup;
FormsData:any;
errorData;
errorStatus;
 constructor(private fb: FormBuilder,private _authservice:AuthService,public router: Router) { }
  
  ngOnInit() {
    this.refresh();
  }


refresh(){
    this.myform = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required]
      
    });
   }
 
 //Validation error Messages.
 get Email() {
    return this.myform.get('Email');
  }
  get Password() {
    return this.myform.get('Password');
  }


 OnSubmit() {
    debugger;
    this._authservice.Login(this.myform.value)
      .subscribe
      (
      (data) => {
        //this.FormsData = data;
        this.myform.value;
        this.refresh();

      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error)
          console.log('An error occurred:', err.error.message);
        else {
          console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
          this.errorStatus = err.status;
          this.errorData = err.statusText;
        }
      }
      );
  }
}
