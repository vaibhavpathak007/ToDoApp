import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { server } from '../properties/application.properties';

export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'authenticaterUser';

@Injectable({
  providedIn: 'root'
})
export class LoginAuthenticatorService {

  constructor(private http: HttpClient) { }

  authenticate(userName, password) {

    let basicAuthHeaderString = 'Basic ' + window.btoa(userName + ':' + password);

    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })

    return this.http.get<AuthenticationBean>(`${server}/doAuthenticate`, { headers }).pipe(
      map(data => {
        console.log(data);
        sessionStorage.setItem(AUTHENTICATED_USER, userName);
        sessionStorage.setItem(TOKEN, basicAuthHeaderString);
        return data;
      }),
      catchError(this.handleError)
    );  
  }

  getAuthenticatedUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER)
  }

  getAuthenticatedToken() {
    if (this.getAuthenticatedUser())
      return sessionStorage.getItem(TOKEN)
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER)
    return !(user === null)
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER)
    sessionStorage.removeItem(TOKEN)
  }

  handleError(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }

}

export class AuthenticationBean {
  constructor(public message: string) { }
}
