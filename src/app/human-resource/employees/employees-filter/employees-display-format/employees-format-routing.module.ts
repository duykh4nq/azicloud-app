import { Routes, RouterModule } from '@angular/router';
import { EmployeesFilterNormalComponent } from './employees-filter-normal/employees-filter-normal.component';
import { NgModule } from '@angular/core';
import { EmployeesDisplayFormatComponent } from './employees-display-format.component';
import { EmployeesFilterListComponent } from './employees-filter-list/employees-filter-list.component';



const appRoutes: Routes = [
  {
    path: '',
    component: EmployeesFilterNormalComponent
  },
  { path: 'employee-list', component: EmployeesFilterListComponent },


];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EmployeesFormatRoutingModule { }
