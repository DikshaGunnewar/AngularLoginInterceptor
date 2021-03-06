import { Injectable } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpResponse, HttpEvent } from "@angular/common/http";
import { environment } from "../../../environments/environment";

@Injectable()
export class DataInterceptor implements HttpInterceptor
{ 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    {
       
       debugger;
    //POST
    if (!req.headers.has('Content-Type'))
     {
         //    if(environment.baseurl+'/Token'){
                
        //         req = req.clone({headers: req.headers.set('Content-Type','application/x-www-form-urlencoded')});
        //         req = req.clone({ headers: req.headers.set('Accept', 'application/x-www-form-urlencoded')});
        //         console.log('Get hit urlencoded  ---->' + req.method);
        //    }
             req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });     
             console.log('Get hit for json check ---->' + req.method);
      }
      
      
  // for registration.
    if (req.method === 'POST') {
        debugger;
        req = req.clone({ headers: req.headers.set('Accept', 'application/x-www-form-urlencoded') });
        req = req.clone({ headers: req.headers.set('Access-Control-Allow-Credentials', 'true') });
        req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    }

      req = req.clone({ headers: req.headers.set('Accept', 'application/json')});   
      return next.handle(req);
    }




    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> 
    // {
       
    //    //Since requests are immutable, they cannot be modified directly. To mutate them, use clone():
    //    const dupreq = req.clone();// This is an example of duplicate request body. It is exactly the same as the original.
    //     // Clone the request to add the new header. Append content-type on header if it doesn't have One!//'
    //     console.log('XHR Intercepted...!!!');
        
    //     if(!req.headers.has('Content-Type'))
    //     {
    //         req = req.clone({headers : req.headers.set('Content-Type','application/json')});
    //         //Alternative Short-cut-> req = req.clone({setHeaders: {'Content-Type':'application/json'} });
    //     }

    //     req = req.clone({headers : req.headers.set('Accept','application/json')});        
        
    //      // add authorization header with jwt token
    //        // req = req.clone({ headers: req.headers.set('token', `${localStorage.getItem('currentUser')}`) });
         
    //       // Pass on the cloned request instead of the original request.
    //       console.log(JSON.stringify(req.headers));
    //       return next.handle(req);
    // }
   
}