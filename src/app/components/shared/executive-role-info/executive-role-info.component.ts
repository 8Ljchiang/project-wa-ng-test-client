import { Navigate } from './../../../ngxs/router.state';
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';

@Component({
  selector: 'app-executive-role-info',
  templateUrl: './executive-role-info.component.html',
  styleUrls: ['./executive-role-info.component.css']
})
export class ExecutiveRoleInfoComponent implements OnInit, OnDestroy {

  isPermitted = false;
  subscription: any;
  @Select(state => state.account.roles) roles$: Observable<string[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.subscription = this.roles$.subscribe(
      roles => {
        if (roles.includes('MANAGER')) {
          this.isPermitted = true;
        } else {
          this.isPermitted = false;
        }
      }
    );
  }

  onClick() {
    this.store.dispatch(new Navigate('/auth/dashboard/executive'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
