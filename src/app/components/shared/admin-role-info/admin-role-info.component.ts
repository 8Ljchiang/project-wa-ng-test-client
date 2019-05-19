import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Navigate } from 'src/app/ngxs/router.state';

@Component({
  selector: 'app-admin-role-info',
  templateUrl: './admin-role-info.component.html',
  styleUrls: ['./admin-role-info.component.css']
})
export class AdminRoleInfoComponent implements OnInit, OnDestroy {

  isPermitted = false;
  subscription: any;
  @Select(state => state.account.roles) roles$: Observable<string[]>;

  constructor(
    private store: Store
  ) { }

  ngOnInit() {
    this.subscription = this.roles$.subscribe(
      roles => {
        if (roles.includes('ADMIN')) {
          this.isPermitted = true;
        } else {
          this.isPermitted = false;
        }
      }
    );
  }

  onClick() {
    this.store.dispatch(new Navigate('/auth/dashboard/admin'));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
