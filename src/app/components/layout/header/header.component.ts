import { Observable } from 'rxjs';
import { AuthState } from './../../../ngxs/auth.state';
import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';
import { Select } from '@ngxs/store';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userToken = '';
  @Select(state => state.auth.authToken) authToken$: Observable<string>;

  constructor(
    // private authService: AuthService
    private authenticationFeatureService: AuthenticationFeatureService
  ) { }

  ngOnInit() {
    // this.isAuthenticated();
    // this.authService.getAuthTokenAsObservable().subscribe(
    //   token => this.userToken = token
    // );
    this.isAuthenticatedSubscription();
  }

  isAuthenticatedSubscription() {
    this.authenticationFeatureService.authState$.subscribe(
      state => {
        if (state.authToken && state.authToken.length > 0) {
          this.isLoggedIn = true;
          this.userToken = state.authToken;
        } else {
          this.isLoggedIn = false;
        }
      }
    );
  }

  // isAuthenticated() {
    // this.authService.userToken.subscribe(token => {
    //   if (token && token.length > 0) {
    //     this.isLoggedIn = true;
    //   } else {
    //     this.isLoggedIn = false;
    //   }
    // });
  // }
}
