import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { indexRoutes } from './index.router';

@NgModule({
  imports: [RouterModule.forChild(indexRoutes)],
  exports: [RouterModule]
})
export class IndexRoutingModule { }
