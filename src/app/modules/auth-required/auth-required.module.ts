import { AuthenticationFeatureService } from './../../services/authentication-feature.service';
import { FormsModule } from '@angular/forms';
import { AddTodoComponent } from './../../components/shared/add-todo/add-todo.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';
import { TasksComponent } from 'src/app/components/pages/tasks/tasks.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { AuthRequiredRoutingModule } from './auth-required-routing.module';
import { AuthRequiredComponent } from './auth-required.component';
import { LogoutComponent } from 'src/app/components/pages/logout/logout.component';
import { TodoListComponent } from 'src/app/components/shared/todo-list/todo-list.component';
import { TodoListItemComponent } from 'src/app/components/shared/todo-list-item/todo-list-item.component';
import { NgxsModule } from '@ngxs/store';
import { TaskState } from 'src/app/ngxs/task.state';
import { NgxsDispatchPluginModule } from '@ngxs-labs/dispatch-decorator';

@NgModule({
  declarations: [
    AuthRequiredComponent,
    ProfileComponent,
    TasksComponent,
    SettingsComponent,
    LogoutComponent,
    TodoListComponent,
    TodoListItemComponent,
    AddTodoComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRequiredRoutingModule,
    // NgxsModule.forFeature([TaskState]),
  ],
  providers: [
    AuthenticationFeatureService,
  ]
})
export class AuthRequiredModule { }
