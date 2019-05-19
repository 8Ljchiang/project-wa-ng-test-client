import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { AuthStateModel } from '../../../ngxs/auth.state';
import { AccountStateModel } from './../../../ngxs/account.state';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // private accountState$: Observable<AccountStateModel>;
  // private authState$: Observable<AuthStateModel>;
  @Select(state => state.auth.authToken) authToken$: Observable<string>;
  @Select(state => state.auth.username) username$: Observable<string>;
  @Select(state => state.account.roles.join(',  ')) roles$: Observable<string>;
  @Select(state => state.account.status) accountStatus$: Observable<string>;

  userToken = '';
  username = '';
  // isLoading = false;
  roles = '';
  accountStatus = '';
  // errors: '';

  constructor(
    // private store: Store,
    // private authService: AuthService
    private authenticationFeatureService: AuthenticationFeatureService
  ) {
    // this.accountState$ = this.store.select(state => state.account);
    // this.authState$ = this.store.select(state => state.auth);
  }

  ngOnInit() {
    // this.authenticationFeatureService.accountState$.subscribe(
    //   state => {
    //     console.log('accountState', state);
    //     if (state.roles && state.roles.length > 0) {
    //       this.roles = state.roles.join(', ');
    //     }

    //     if (state.status && state.status.length > 0) {
    //       this.accountStatus = state.status;
    //     }
    //   }
    // );

    // this.authenticationFeatureService.authState$.subscribe(
    //   state => {
    //     console.log('authState', state);
    //     this.username = state.username;
    //     this.userToken = state.authToken;
    //   }
    // );
    // this.authService.getAuthTokenAsObservable().subscribe(
    //   token => this.userToken = token
    // );
    // this.store.dispatch(singleAction); // can include array of actions as well.
    // this.store.dispatch([]);
  }

}
