import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { LoginAuthenticatorService } from './login-authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationInterceptorService implements HttpInterceptor {

  constructor(private auth: LoginAuthenticatorService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    let user = this.auth.getAuthenticatedUser();
    let basicAuthenticationString = this.auth.getAuthenticatedToken();

    if (user && basicAuthenticationString) {
      req = req.clone({
        setHeaders: {
          Authorization: basicAuthenticationString
        }
      });
    }
    return next.handle(req);
  }

}
