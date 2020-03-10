import { Component, OnInit } from '@angular/core';
import { LoginAuthenticatorService } from 'src/app/security/login-authenticator.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html'
})
export class LogoutComponent implements OnInit {

  constructor(private authService : LoginAuthenticatorService) { }

  ngOnInit() {
    this.authService.logout();
  }


}
