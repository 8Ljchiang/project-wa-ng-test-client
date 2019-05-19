import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRoleInfoComponent } from './basic-role-info.component';

describe('BasicRoleInfoComponent', () => {
  let component: BasicRoleInfoComponent;
  let fixture: ComponentFixture<BasicRoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
