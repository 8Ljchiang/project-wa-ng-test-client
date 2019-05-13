import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { NoPageComponent } from './components/pages/no-page/no-page.component';
import { LogoutComponent } from './components/pages/logout/logout.component';
import { NotAuthorizedComponent } from './components/pages/not-authorized/not-authorized.component';

export const rootAppRoutes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'notfound', component: NoPageComponent },
	{ path: 'notauthorized', component: NotAuthorizedComponent },
	{ path: 'index', loadChildren: './modules/index/index.module#IndexModule' },
	{ path: 'auth', loadChildren: './modules/auth-required/auth-required.module#AuthRequiredModule' },
	{ path: '**', redirectTo: '/notfound', pathMatch: 'full' },
];
