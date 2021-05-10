import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { RecordsComponent } from './records.component';
import { RecordsInfomationsComponent } from './records-right/records-infomations/records-infomations.component';
import { RecordsResumeComponent } from './records-right/records-resume/records-resume.component';
import { RecordsContactComponent } from './records-right/records-contact/records-contact.component';
import { RecordsWorkComponent } from './records-right/records-work/records-work.component';

const appRoutes: Routes = [
  {
    path: '',
    component: RecordsComponent,
    children: [
      { path: '', component: RecordsInfomationsComponent },
      { path: 'resume', component: RecordsResumeComponent },
      { path: 'contact', component: RecordsContactComponent },
      { path: 'work-records', component: RecordsWorkComponent },
      { path: 'info', component: RecordsInfomationsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class RecordsRoutingModule { }
