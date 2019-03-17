import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedauthenticationService {

  constructor() { }

   isAuthenticated(userName,password) : boolean{
    if(userName === 'abc' && password === 'abc'){
      return true;
    }
    else{
      return false;
    }
  }

}
