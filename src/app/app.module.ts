import { TaskState } from 'src/app/ngxs/task.state';
import { AuthenticationFeatureService } from './services/authentication-feature.service';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';
import { FormsModule } from '@angular/forms';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NoPageComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxsModule.forRoot([
      RouterState,
      AuthState,
      AccountState,
      TaskState,
    ], { developmentMode: !environment.production }),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot(),
    NgxsDispatchPluginModule.forRoot(),
  ],
  providers: [
    AuthenticationFeatureService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
