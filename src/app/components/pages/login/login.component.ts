import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { AccountStateModel } from './../../../ngxs/account.state';
import { AuthStateModel } from '../../../ngxs/auth.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/ngxs/auth.actions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  username = '';
  password = '';

  constructor(
    // private store: Store,
    // private authService: AuthService,
    private authenticationFeatureService: AuthenticationFeatureService,
    private fb: FormBuilder
    // private router: Router,
  ) {

  }

  ngOnInit() {
    // this.store.dispatch(singleAction); // can include array of actions as well.
    // this.store.dispatch([]);
    this.loginForm = this.fb.group({
      username: ['', [
        Validators.required,
      ]],
      password: ['', [
        Validators.required,
      ]]
    });

    // this.loginForm.valueChanges.subscribe(
    //   state => console.log(state)
    // );
  }

  onLoginAction() {
    console.log('onLoginAction');
    // if (this.username && this.username.length > 0) {
    //   this.authenticationFeatureService.login({ username: this.username, password: this.password });
      // this.router.navigate(['/auth/profile']);
    // }

    if (!this.loginForm.invalid) {
      const username = this.loginForm.get('username').value;
      const password = this.loginForm.get('password').value;
      const info = {
        username,
        password
      };
      this.authenticationFeatureService.login(info);
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
