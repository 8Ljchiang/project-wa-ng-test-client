import { Route } from '@angular/router';
import { IndexComponent } from './index.component';
import { LoginComponent } from 'src/app/components/pages/login/login.component';
import { SignupComponent } from 'src/app/components/pages/signup/signup.component';

export const indexRoutes: Route[] = [
	{
		path: '',
		component: IndexComponent,
		children: [
			{ path: 'login', component: LoginComponent },
			{ path: 'signup', component: SignupComponent },
		]
	}
];
