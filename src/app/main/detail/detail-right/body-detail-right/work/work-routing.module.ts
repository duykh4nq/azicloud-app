import { WorkingMemberComponent } from './work-right/work-body/working-member/working-member.component';
import { WorkingListComponent } from './work-right/work-body/working-list/working-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { WorkingKanbanComponent } from './work-right/work-body/working-kanban/working-kanban.component';
import { WorkComponent } from './work.component';


const appRoutes: Routes = [
  { path: '', component: WorkComponent,
    children: [
      { path: '', component: WorkingListComponent},
     { path: 'workingkanban', component: WorkingKanbanComponent},
      { path:'workingmember', component: WorkingMemberComponent},
      { path: 'workinglist', component: WorkingListComponent},
    ],
  },
];

@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forChild(appRoutes)],
  ],
  exports: [ RouterModule]
})
export class WorkRoutingModule { }
