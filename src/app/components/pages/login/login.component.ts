import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { AccountStateModel } from './../../../ngxs/account.state';
import { AuthStateModel } from '../../../ngxs/auth.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/ngxs/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';

  constructor(
    // private store: Store,
    // private authService: AuthService,
    private authenticationFeatureService: AuthenticationFeatureService,
    // private router: Router,
  ) {

  }

  ngOnInit() {
    // this.store.dispatch(singleAction); // can include array of actions as well.
    // this.store.dispatch([]);
  }

  onLoginAction() {
    console.log('onLoginAction');
    if (this.username && this.username.length > 0) {
      this.authenticationFeatureService.login({ username: this.username, password: this.password });
      // this.router.navigate(['/auth/profile']);
    }
  }

  // onLoginAction() {
  //   console.log('onLoginAction');
  //   const credentials = {};
  //   this.authService.login(credentials);
  //   this.store.dispatch([
  //     new Login(this.postData)
  //   ]);
  //   this.router.navigate(['/auth/profile']);
  // }
}
