import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesFormatRoutingModule } from './employees-display-format/employees-format-routing.module';



const routes: Routes = [
  { path: '', loadChildren: () => EmployeesFormatRoutingModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmplyeesFilterRoutingModule { }
