import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginAuthenticatorService } from 'src/app/security/login-authenticator.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isLoginInvalid : boolean;
  errmsg = 'Invalid Login';

  constructor(private router : Router,
    private authenticator : LoginAuthenticatorService) { }

  ngOnInit() {
  }

  doLogin(){
    this.authenticator.authenticate(this.userName,this.password).subscribe(element=>{
      console.log(element);
      this.router.navigate(['welcome', this.userName]);
      this.isLoginInvalid = false;
    },error=>{
      this.isLoginInvalid = true;
    } );
  }

}
