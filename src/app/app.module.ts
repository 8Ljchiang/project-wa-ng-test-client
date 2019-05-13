import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NoPageComponent } from './components/pages/no-page/no-page.component';
import { IndexModule } from './modules/index/index.module';
import { AuthRequiredModule } from './modules/auth-required/auth-required.module';
import { TodoListComponent } from './components/shared/todo-list/todo-list.component';
import { TodoListItemComponent } from './components/shared/todo-list-item/todo-list-item.component';
import { AddTodoComponent } from './components/shared/add-todo/add-todo.component';
import { HttpClientModule } from '@angular/common/http';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { NotAuthorizedComponent } from './components/pages/not-authorized/not-authorized.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    NoPageComponent,
    AddTodoComponent,
    NotAuthorizedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
