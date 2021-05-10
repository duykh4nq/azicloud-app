import { EmployeeRoutingModule } from './body-right/employee-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  { path: '', loadChildren: () => EmployeeRoutingModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
