import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';
import { TasksComponent } from 'src/app/components/pages/tasks/tasks.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { AuthRequiredRoutingModule } from './auth-required-routing.module';
import { AuthRequiredComponent } from './auth-required.component';
import { LogoutComponent } from 'src/app/components/pages/logout/logout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { TodoListComponent } from 'src/app/components/shared/todo-list/todo-list.component';
import { TodoListItemComponent } from 'src/app/components/shared/todo-list-item/todo-list-item.component';

@NgModule({
  declarations: [
    AuthRequiredComponent,
    ProfileComponent,
    TasksComponent,
    SettingsComponent,
    LogoutComponent,
    TodoListComponent,
    TodoListItemComponent
    // AuthGuard
  ],
  imports: [
    CommonModule,
    AuthRequiredRoutingModule,
    // AuthGuard
  ]
})
export class AuthRequiredModule { }
