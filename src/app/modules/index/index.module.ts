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
    FormsModule,
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
