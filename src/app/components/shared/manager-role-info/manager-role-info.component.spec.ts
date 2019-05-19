import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerRoleInfoComponent } from './manager-role-info.component';

describe('ManagerRoleInfoComponent', () => {
  let component: ManagerRoleInfoComponent;
  let fixture: ComponentFixture<ManagerRoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerRoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerRoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
