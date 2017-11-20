import { Injectable, Injector } from "@angular/core";
import { HttpInterceptor, HttpRequest, HttpHandler } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { HttpResponse, HttpEvent } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { AuthService } from "../authService/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{ 
    constructor(private injector: Injector) {}
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

             req = req.clone({ headers: req.headers.set('Accept', 'application/x-www-form-urlencoded')});    
             console.log('Get hitfor urlencoded check ---->' + req.method);
      }

     req = req.clone({ headers: req.headers.set('Accept', 'application/jsonapplication/x-www-form-urlencoded')}); 
     return next.handle(req);


    }


// private addToken(req: HttpRequest<any>): Observable<HttpRequest<any>> {
//     const authService: AuthService =
//       this.injector.get<AuthService>(AUTH_SERVICE);

//     return first(map(
//       authService.getAccessToken(),
//       (token: string) => {
//         if (token) {
//           let headers : { [name: string]: string | string[] };
//           if(typeof authService.getHeaders === 'function') {
//             headers = authService.getHeaders(token);
//           } else {
//             headers = { Authorization: `Bearer ${token}` };
//           }

//           return req.clone({
//             setHeaders: headers
//           });
//         }


       




   // for registration.
    // if (req.method === 'POST') {
    //     debugger;
    //     req = req.clone({ headers: req.headers.set('Accept', 'application/x-www-form-urlencoded') });
    //     req = req.clone({ headers: req.headers.set('Access-Control-Allow-Credentials', 'true') });
    //     req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*') });
    // }

 // for login application/x-www.form-urlencoded is nee to set to be content type/
    // if(req.method === 'POST')
    // {
    //     req = req.clone({headers: req.headers.set('Content-Type','application/x-www-form-urlencoded')});
    //     req = req.clone({headers: req.headers.set('Access-Control-Allow-Credentials', 'true')});
    //     req = req.clone({headers: req.headers.set('Access-Control-Allow-Origin', '*')});
    // }
         //Default
    // req = req.clone({ headers: req.headers.set('Accept', 'application/json')});
    // req = req.clone({ headers: req.headers.set('Accept', 'application/json').append('Access-Control-Allow-Credentials', 'true') });
  
   
    












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