import { BodyDetailRightRoutingModule } from './body-detail-right/body-detail-right-routing.module';

import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  { path: '', loadChildren: () => BodyDetailRightRoutingModule },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class DetailRightRoutingModule { }
