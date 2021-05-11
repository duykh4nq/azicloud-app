import { RecordsRoutingModule } from './records/records-routing.module';
import { DetailRightComponent } from './../detail-right.component';
import { TimetableComponent } from './timetable/timetable.component';
import { RequestComponent } from './request/request.component';
import { RecordsComponent } from './records/records.component';
import { EmulationRewardComponent } from './emulation-reward/emulation-reward.component';
import { DocumentComponent } from './document/document.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TimekeepingComponent } from './timekeeping/timekeeping.component';
import { WorkComponent } from './work/work.component';
import { CustomizedComponent } from './customized/customized.component';
import { DetailComponent } from '../../detail.component';



const appRoutes: Routes = [
  {
    path: '',
    component: DetailComponent,
    children: [
      { path: 'records', loadChildren: () => RecordsRoutingModule },
      {
        path: 'emulation-reward', component: EmulationRewardComponent,
      },
      {
        path: 'document', component: DocumentComponent,
      },
      {
        path: 'request', component: RequestComponent,
      },
      {
        path: 'timetable', component: TimetableComponent,
      },
      {
        path: 'timekeeping', component: TimekeepingComponent,
      },
      {
        path: 'work', component: WorkComponent,
      },
      {
        path: 'customized', component: CustomizedComponent,
      },
      // {
      //   path: 'records', component: RecordsComponent,
      // },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class BodyDetailRightRoutingModule { }
