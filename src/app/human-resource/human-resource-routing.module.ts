import { EntryMainRoutingModule } from './employees/employees-detail/detail-entry/entry-main/entry-main-routing.module';
import { EmplyeesFilterRoutingModule } from './employees/employees-filter/emplyees-filter-routing.module';
import { EmployeesFilterComponent } from './employees/employees-filter/employees-filter.component';
import { EmployeesComponent } from './employees/employees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesDetailComponent } from './employees/employees-detail/employees-detail.component';

const routes: Routes = [
  {
    path: '', component: EmployeesFilterComponent,
    loadChildren: () => EmplyeesFilterRoutingModule,
  },
  {
    path: 'Employees-Detail', component: EmployeesDetailComponent,
    loadChildren: () => EntryMainRoutingModule,
  }
]




@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HumanResourceRoutingModule { }
