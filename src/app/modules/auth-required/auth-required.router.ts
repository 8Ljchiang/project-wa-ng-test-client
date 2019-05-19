import { AdminRoleInfoComponent } from './../../components/shared/admin-role-info/admin-role-info.component';
import { ExecutiveRoleInfoComponent } from './../../components/shared/executive-role-info/executive-role-info.component';
import { ManagerRoleInfoComponent } from './../../components/shared/manager-role-info/manager-role-info.component';
import { BasicRoleInfoComponent } from 'src/app/components/shared/basic-role-info/basic-role-info.component';
import { Route } from '@angular/router';
import { AuthRequiredComponent } from './auth-required.component';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';
import { TasksComponent } from 'src/app/components/pages/tasks/tasks.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { LogoutComponent } from 'src/app/components/pages/logout/logout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthenticationFeatureService } from 'src/app/services/authentication-feature.service';
import { RoleGuardGuard } from 'src/app/guards/role-guard.guard';

export const authRequiredRoutes: Route[] = [
	{
		path: '',
		component: AuthRequiredComponent,
    canActivateChild: [AuthGuard],
		children: [
			// {
			// 	path: '',
			// 	component: ProfileComponent,
      //   canActivate: [AuthGuard],
      //   pathMatch: 'full',
			// },
			{
				path: 'profile',
				component: ProfileComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
        // resolve: {
        //   username: AuthenticationFeatureService
        // }
			},
			// { path: 'tasks/:id', component: TaskItemComponent },
			{
				path: 'tasks',
				component: TasksComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
			},
			{
				path: 'settings',
				component: SettingsComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
			},
			{
				path: 'logout',
				component: LogoutComponent,
        canActivate: [AuthGuard],
        pathMatch: 'full',
      },
      {
        path: 'dashboard/basic',
        component: BasicRoleInfoComponent,
        canActivate: [AuthGuard, RoleGuardGuard],
        pathMatch: 'full',
        data: {
          allowedRoles: ['BASIC', 'ADMIN']
        }
      },
      {
        path: 'dashboard/manager',
        component: ManagerRoleInfoComponent,
        canActivate: [AuthGuard, RoleGuardGuard],
        pathMatch: 'full',
        data: {
          allowedRoles: ['MANAGER', 'ADMIN']
        }
      },
      {
        path: 'dashboard/admin',
        component: AdminRoleInfoComponent,
        canActivate: [AuthGuard, RoleGuardGuard],
        pathMatch: 'full',
        data: {
          allowedRoles: ['ADMIN']
        }
      },
      {
        path: 'dashboard/executive',
        component: ExecutiveRoleInfoComponent,
        canActivate: [AuthGuard, RoleGuardGuard],
        pathMatch: 'full',
        data: {
          allowedRoles: ['EXECUTIVE']
        }
      },
		]
	},
];
