import { DetailRightRoutingModule } from './detail-right/detail-right-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailComponent } from './detail.component';


const routes: Routes = [
  { path: '', loadChildren: () => DetailRightRoutingModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeatilRoutingModule { }
