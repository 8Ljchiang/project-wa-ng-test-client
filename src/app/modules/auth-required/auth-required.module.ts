import { ExecutiveRoleInfoComponent } from './../../components/shared/executive-role-info/executive-role-info.component';
import { ManagerRoleInfoComponent } from './../../components/shared/manager-role-info/manager-role-info.component';
import { AdminRoleInfoComponent } from './../../components/shared/admin-role-info/admin-role-info.component';
import { HasRoleV2Directive } from './../../directives/has-role-v2.directive';
import { AccountRoleInfoComponent } from './../../components/shared/account-role-info/account-role-info.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AuthenticationFeatureService } from './../../services/authentication-feature.service';
import { AddTodoComponent } from './../../components/shared/add-todo/add-todo.component';
import { NgModule, ViewContainerRef, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';
import { TasksComponent } from 'src/app/components/pages/tasks/tasks.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { AuthRequiredRoutingModule } from './auth-required-routing.module';
import { AuthRequiredComponent } from './auth-required.component';
import { LogoutComponent } from 'src/app/components/pages/logout/logout.component';
import { TodoListComponent } from 'src/app/components/shared/todo-list/todo-list.component';
import { TodoListItemComponent } from 'src/app/components/shared/todo-list-item/todo-list-item.component';
import { MatInputModule } from '@angular/material';
import { HasRoleDirective } from 'src/app/directives/has-role.directive';
import { BasicRoleInfoComponent } from 'src/app/components/shared/basic-role-info/basic-role-info.component';

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
    BasicRoleInfoComponent,
    AccountRoleInfoComponent,
    AdminRoleInfoComponent,
    ManagerRoleInfoComponent,
    ExecutiveRoleInfoComponent,

    // HasRoleDirective,
    // HasRoleV2Directive,
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRequiredRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatInputModule,
    // NgxsModule.forFeature([TaskState]),
  ],
  providers: [
    AuthenticationFeatureService,
    // HasRoleDirective,
    // HasRoleV2Directive,
  ]
})
export class AuthRequiredModule { }
