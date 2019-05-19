import { Route } from '@angular/router';
import { AuthRequiredComponent } from './auth-required.component';
import { ProfileComponent } from 'src/app/components/pages/profile/profile.component';
import { TasksComponent } from 'src/app/components/pages/tasks/tasks.component';
import { SettingsComponent } from 'src/app/components/pages/settings/settings.component';
import { LogoutComponent } from 'src/app/components/pages/logout/logout.component';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { AuthenticationFeatureService } from 'src/app/services/authentication-feature.service';

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
		]
	},
];
