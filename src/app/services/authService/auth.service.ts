import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService {
token:string;
  constructor(private http:HttpClient) { 
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
  }

    public Login(LoginDetails: any): Observable<any> {
        debugger;
        var data = "grant_type=password&username=" + LoginDetails.Email + "&password=" + LoginDetails.Password;
        //return this.http.post(environment.baseurl + '/Token', JSON.stringify(data))
            return this.http.post(environment.baseurl + '/Token',data)
            .map((res: Response) => {
                debugger;
                let token = res.json() && res.json().access_token;
                if (token) {
                    this.token = token;
                    debugger;
                    // store username and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify({ username: LoginDetails.Email, token: token }));

                    // return true to indicate successful login
                    return true;

                } else {
                    return false;
                }

            })
    }

// //POST : Login
//       public Login(LoginDetails): Observable<any>
//       {
//           debugger;
//          var data = "grant_type=password&username=" +LoginDetails.Email +"&password="+LoginDetails.Password; 
//           return this.http.post(environment.baseurl+'/Token',data)
//                             .map((res : Response)=>
//                             {
//                                 debugger;    
//                                 let user = [];
//                                 user.push(res);
//                                 console.log(user);
//                                 // let token = res.json() && res.access_token;
//                                 console.log(user);
//                                 if (user) 
//                                 {    
//                                   localStorage.setItem('currentUser', JSON.stringify({userName:LoginDetails.Email,user:user[0].access_token}));  

//                                     //localStorage.setItem('currentUser', JSON.stringify(user[0].access_token));  
//                                    // localStorage.setItem('currentUser', user.access_token);  
//                                     return true;                                        
//                                 }
//                                 else
//                                 {   
//                                     return false;   
//                                 }           
//                             });
//       }
}
