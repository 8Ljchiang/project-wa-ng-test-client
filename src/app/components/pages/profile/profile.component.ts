import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public userToken = '';

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.getUserTokenAsObservable().subscribe(
      token => this.userToken = token
    );
  }

}
