import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from '../home.component';



const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: EmployeeComponent },
      { path: 'employee-list', component: EmployeeListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
