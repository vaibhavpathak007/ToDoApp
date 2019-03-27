import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }

   authenticate(userName,password) : boolean{
    console.log('before authentication user valid : '+this.isAuthenticated());
    if(userName === 'abc' && password === 'abc'){
      sessionStorage.setItem('authenticatedUser',userName);
      console.log('after authentication user valid : '+this.isAuthenticated());
      return true;
    }
    else{
      return false;
    }
  }

  isAuthenticated(){
    if(sessionStorage.getItem('authenticatedUser')) return true;
    else return false;
  }
  
  doLogout(){
    sessionStorage.clear();
  }



}
