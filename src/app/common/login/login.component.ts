import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HardcodedauthenticationService } from '../../service/hardcodedauthentication.service';

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

  constructor(private router : Router,
    private authenticator : HardcodedauthenticationService) { }

  ngOnInit() {
  }

  doLogin(){
    console.log("Welcome " + this.userName);
    if(this.authenticator.authenticate(this.userName,this.password)){
        this.isLoginInvalid = false;
        this.router.navigate(['welcome', this.userName]);
    }
    else{
      this.isLoginInvalid = true;
    }
  }

}
