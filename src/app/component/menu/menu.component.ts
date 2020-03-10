import { Component, OnInit } from '@angular/core';
import { LoginAuthenticatorService } from 'src/app/security/login-authenticator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  constructor(private authService : LoginAuthenticatorService) { }

  ngOnInit() {
    
  }

}
