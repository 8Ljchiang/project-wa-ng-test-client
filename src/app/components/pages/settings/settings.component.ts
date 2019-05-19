import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, FormArray, AbstractControl, FormControl } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { userAccountRoles } from 'src/app/config/seedData';
import { Store, Select } from '@ngxs/store';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit, OnDestroy {

  @Select(state => state.account.roles) roles$: Observable<string[]>;
  accountSettingsFormGroup: FormGroup;
  defaultRoles = userAccountRoles;
  accountRolesSubscription: any;
  accountStatusSubcription: any;

  constructor(
    private fb: FormBuilder,
    private authenticationFeatureService: AuthenticationFeatureService
  ) { }

  ngOnInit() {
    const phoneFormGroup = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });

    this.accountSettingsFormGroup = this.fb.group({
      accountStatus: '',
      accountRoles: this.createRolesFormGroup(),
      phones: this.fb.array([])
    });

    const subscription = this.roles$.subscribe(
      roles => {
        roles.forEach((role) => {
          this.patchRoleFormControlValueBasedOnAccountState(role);
        });
      }
    );

    subscription.unsubscribe();

    this.accountRolesSubscription = this.accountSettingsFormGroup.get('accountRoles')
      .valueChanges.subscribe((roleControllerValues: boolean[]) => {
        console.log('*** accountRoleValueChanges', roleControllerValues)
        this.onRoleChange(roleControllerValues);
      });

    this.accountStatusSubcription = this.accountSettingsFormGroup.get('accountStatus')
      .valueChanges.subscribe((statusControllerValue: string) => {
        console.log('*** accountStatusValueChange', statusControllerValue);
        this.onStatusChange(statusControllerValue);
      });
  }

  onRoleChange(values: boolean[]) {
    this.authenticationFeatureService.updateAccountRoles(values);
  }

  onStatusChange(status: string) {
    this.authenticationFeatureService.UpdateAccountStatus(status);
  }

  createRolesFormGroup() {
    const arr = this.defaultRoles.map(role => {
      return new FormControl(false);
    });
    return new FormArray(arr);
  }

  patchRoleFormControlValueBasedOnAccountState(roleValue: string, ) {
    const roleControlIndex = this.defaultRoles
      .map(role => role.value)
      .indexOf(roleValue);
    if (roleControlIndex >= 0) {
      this.accountRoles.controls[roleControlIndex].patchValue(true);
    }
  }

  get phoneForms() {
    return this.accountSettingsFormGroup.get('phones') as FormArray;
  }

  get accountRoles() {
    const stuff = this.accountSettingsFormGroup.get('accountRoles') as FormArray;
    // return stuff;
    // stuff.controls.map((control: AbstractControl) => {
    //   console.log(control.value);
    // });
    return stuff;
  }

  addPhone() {
    const phoneFormGroup = this.fb.group({
      area: [],
      prefix: [],
      line: [],
    });
    this.phoneForms.push(phoneFormGroup);
  }

  removePhone(i: number) {
    this.phoneForms.removeAt(i);
  }

  // addRole(roleName: string) {
  //   const rolesFormGroup = this.fb.group({
  //     [roleName]: false,
  //   });
  //   this.accountRoles.push(rolesFormGroup);
  // }
  ngOnDestroy(): void {
    this.accountStatusSubcription.unsubscribe();
    this.accountRolesSubscription.unsubscribe();
  }
}
