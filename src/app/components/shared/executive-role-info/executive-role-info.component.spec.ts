import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecutiveRoleInfoComponent } from './executive-role-info.component';

describe('ExecutiveRoleInfoComponent', () => {
  let component: ExecutiveRoleInfoComponent;
  let fixture: ComponentFixture<ExecutiveRoleInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExecutiveRoleInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecutiveRoleInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
