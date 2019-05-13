import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public postData = {
    username: '',
    password: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onLoginAction() {
    console.log('onLoginAction');
    const credentials = {};
    this.authService.login(credentials);
    this.router.navigate(['/auth/profile']);
  }
}
