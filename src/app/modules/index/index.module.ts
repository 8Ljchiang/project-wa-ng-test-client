import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { SignupComponent } from 'src/app/components/pages/signup/signup.component';
import { IndexComponent } from './index.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    FormsModule
  ],
  exports: [
    IndexRoutingModule,
  ]
})
export class IndexModule { }
