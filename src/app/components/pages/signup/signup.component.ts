import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupFormGroup: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authenticationFeatureService: AuthenticationFeatureService
  ) { }

  ngOnInit() {
    this.signupFormGroup = this.fb.group({
      username: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
      email: ['', [
        Validators.required,
        Validators.email
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(4),
        Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
      ]]
    });
  }

  get email() {
    return this.signupFormGroup.get('email');
  }

  get username() {
    return this.signupFormGroup.get('username');
  }

  get password() {
    return this.signupFormGroup.get('password');
  }

  onSignupAction() {
    if (!this.signupFormGroup.invalid) {
      const info = {
        username: this.username.value,
        email: this.email.value,
        password: this.password.value
      };
      this.authenticationFeatureService.signup(info);
    }
  }
}
