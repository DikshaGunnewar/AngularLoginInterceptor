import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";


@Injectable()
export class DataService {

  constructor(private http:HttpClient) { }


//SignUp
  public register(itemName): Observable<any> {
    debugger;
    console.log(itemName);
     //  return this.http.post("http://localhost:55160/api/Account/Register/",itemName);
     return this.http.post(environment.baseurl+'/api/Account/Register/',itemName);
  }
}
