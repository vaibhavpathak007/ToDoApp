import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationInterceptorService implements HttpInterceptor {
  
  constructor(){}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
   let username = "abc";
   let password = "abc";
   let basicAuthenticationString = "Basic " + window.btoa(username + ':' + password);

   let request = req.clone({setHeaders:{
     Authorization : basicAuthenticationString
   }});

   console.log("Request intercepted !!");

   return next.handle(request);

  }

}
