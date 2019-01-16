import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(private router : Router) { }

  ngOnInit() {
  }

  doLogin(){
    console.log("Welcome " + this.userName);
    if(this.userName === 'abc' && this.password === 'abc'){
        this.isLoginInvalid = false;
        this.router.navigate(['welcome', this.userName]);
    }
    else{
      this.isLoginInvalid = true;
    }
  }

}
