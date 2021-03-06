import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { rootAppRoutes } from './app.router';

@NgModule({
  imports: [RouterModule.forRoot(rootAppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
