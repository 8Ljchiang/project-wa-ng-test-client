import { Navigate } from './../../../ngxs/router.state';
import { HasRoleDirective } from 'src/app/directives/has-role.directive';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { HasRoleV2Directive } from 'src/app/directives/has-role-v2.directive';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-basic-role-info',
  templateUrl: './basic-role-info.component.html',
  styleUrls: ['./basic-role-info.component.css']
})
export class BasicRoleInfoComponent implements OnInit, OnDestroy {

  isPermitted = false;
  subscription: any;
  @Select(state => state.account.roles) roles$: Observable<string[]>;

  constructor(
    // public appHasRole: HasRoleV2Directive
    // public appHasRole: HasRoleV2Directive
    private store: Store
  ) { }

  ngOnInit() {
    this.subscription = this.roles$.subscribe(
      roles => {
        if (roles.includes('BASIC')) {
          this.isPermitted = true;
        } else {
          this.isPermitted = false;
        }
      }
    );
  }

  onClick() {
    this.store.dispatch(new Navigate('/auth/dashboard/basic'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
