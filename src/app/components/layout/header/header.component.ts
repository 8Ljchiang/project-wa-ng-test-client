import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  userToken = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isAuthenticated();
    this.authService.getUserTokenAsObservable().subscribe(
      token => this.userToken = token
    );
  }

  isAuthenticated() {
    this.authService.userToken.subscribe(token => {
      if (token && token.length > 0) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  }
}
