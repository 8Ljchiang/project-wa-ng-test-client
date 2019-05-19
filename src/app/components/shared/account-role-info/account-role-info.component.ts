import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-role-info',
  templateUrl: './account-role-info.component.html',
  styleUrls: ['./account-role-info.component.css']
})
export class AccountRoleInfoComponent implements OnInit {

  @Select(state => state.account.roles) roles$: Observable<string[]>;

  constructor() { }

  ngOnInit() {
  }

}
