import { HasRoleDirective } from 'src/app/directives/has-role.directive';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { TaskState } from 'src/app/ngxs/task.state';
import { AuthenticationFeatureService } from './services/authentication-feature.service';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccountState } from './ngxs/account.state';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NoPageComponent } from './components/pages/no-page/no-page.component';
import { AddTodoComponent } from './components/shared/add-todo/add-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { NotAuthorizedComponent } from './components/pages/not-authorized/not-authorized.component';

import { AuthState } from './ngxs/auth.state';
import { RouterState } from './ngxs/router.state';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { environment } from 'src/environments/environment.prod';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatInputModule} from '@angular/material';
import { AccountRoleInfoComponent } from './components/shared/account-role-info/account-role-info.component';
import { BasicRoleInfoComponent } from './components/shared/basic-role-info/basic-role-info.component';
import { HasRoleV2Directive } from './directives/has-role-v2.directive';
import { ManagerRoleInfoComponent } from './components/shared/manager-role-info/manager-role-info.component';
import { AdminRoleInfoComponent } from './components/shared/admin-role-info/admin-role-info.component';
import { ExecutiveRoleInfoComponent } from './components/shared/executive-role-info/executive-role-info.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NoPageComponent,
    NotAuthorizedComponent,
    // ExecutiveRoleInfoComponent,
    // ManagerRoleInfoComponent,
    // AdminRoleInfoComponent,

    // BasicRoleInfoComponent,
    // AccountRoleInfoComponent,
    // MatFormField,
    // MatSelectModule,
    // MatCheckboxModule,
    // HasRoleDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    NgxsModule.forRoot([
      RouterState,
      AuthState,
      AccountState,
      TaskState,
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [
    AuthenticationFeatureService,
  ],
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
