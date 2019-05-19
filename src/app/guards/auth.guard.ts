import { AuthenticationFeatureService } from './../services/authentication-feature.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  // }
  isAuthenticated = false;

  constructor(
    // private authService: AuthService,
    private authenticationFeatureService: AuthenticationFeatureService,
    private router: Router
  ) {
    this.checkAuth();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const isAuthorized = this.checkAuth();
    if (isAuthorized) {
      return true;
    } else {
      this.router.navigate(['/notauthorized']);
      return false;
    }
  }

  canActivateChild() {
    const isAuthorized = this.isAuthenticated;
    if (isAuthorized) {
      return true;
    } else {
      this.router.navigate(['/notauthorized']);
      return false;
    }
  }

  checkAuth() {
    return this.authenticationFeatureService.authState$.subscribe(
      (state) => {
        if (state.authToken && state.authToken.length > 0) {
          this.isAuthenticated = true;
        } else {
          this.isAuthenticated = false;
        }
      }
    );
  }
}
