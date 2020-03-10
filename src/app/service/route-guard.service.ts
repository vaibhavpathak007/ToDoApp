import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginAuthenticatorService } from '../security/login-authenticator.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private authService: LoginAuthenticatorService,
    private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.getAuthenticatedUser() && this.authService.getAuthenticatedToken()) return true;
    this.router.navigate(['login']);
    return false;
  }

}
