import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { AuthenticationFeatureService } from './../../services/authentication-feature.service';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from './../../ngxs/auth.state';
import { AccountState } from './../../ngxs/account.state';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexRoutingModule } from './index-routing.module';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { SignupComponent } from 'src/app/components/pages/signup/signup.component';
import { IndexComponent } from './index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';


@NgModule({
  declarations: [
    IndexComponent,
    LoginComponent,
    SignupComponent,
    // MatFormField,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    // NgxsModule.forFeature([AccountState, AuthState]),
  ],
  exports: [
    IndexRoutingModule,
  ],
  providers: [
    AuthenticationFeatureService,
  ]
})
export class IndexModule { }
