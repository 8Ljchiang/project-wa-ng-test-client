import { AuthenticationFeatureService } from './../../../services/authentication-feature.service';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(
    // private authService: AuthService,
    private authenticationFeatureService: AuthenticationFeatureService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onLogoutAction() {
    // this.authService.logout();
    this.authenticationFeatureService.logout();
    this.router.navigate(['/']);
  }
}
