import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { authRequiredRoutes } from './auth-required.router';

@NgModule({
  imports: [RouterModule.forChild(authRequiredRoutes)],
  exports: [RouterModule]
})
export class AuthRequiredRoutingModule { }
