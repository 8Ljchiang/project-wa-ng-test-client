import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountRoleInfoComponent } from './account-role-info.component';

describe('AccountRoleInfoComponent', () => {
  let component: AccountRoleInfoComponent;
  let fixture: ComponentFixture<AccountRoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountRoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountRoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
