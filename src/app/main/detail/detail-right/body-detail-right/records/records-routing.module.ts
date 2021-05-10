import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecordsComponent } from './records.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    children: [
      { path: '', component: RecordsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
