import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isLoginInvalid : boolean;
  errmsg = 'Invalid Login';

  constructor() { }

  ngOnInit() {
  }

  doLogin(){
    console.log("Welcome " + this.userName);
    if(this.userName === 'abc' && this.password === 'abc'){
        this.isLoginInvalid = false;
    }
    else{
      this.isLoginInvalid = true;
    }
  }

}
