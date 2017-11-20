import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { DataService } from "../services/dataService/data.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

   myform: FormGroup;
  constructor(private fb: FormBuilder,private _dataservice:DataService ,private router:Router) { }

  ngOnInit() {
      this.myform = this.fb.group({
      Email: ['', Validators.required],
      Password: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
    })
  }

//Validation error Messages.
 get Email() {
    return this.myform.get('Email');
  }
  get Password() {
    return this.myform.get('Password');
  }

  get ConfirmPassword() {
    return this.myform.get('ConfirmPassword');
  }


//Register Method.
itemData:any;
  onRegister() {
    let item = this.myform.value;
    //console.log(item);
    debugger;
    this._dataservice.register(item)
      .subscribe(data => {
        item=data;
       // this.itemData = data;
         this.router.navigate(['/login']);
          console.log(data);
        

      });
}


}
