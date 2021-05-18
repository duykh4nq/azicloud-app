import { WorkFormatMemberComponent } from './entry-working/entry-work-list/work-display-format/work-format-member/work-format-member.component';
import { WorkFormatListComponent } from './entry-working/entry-work-list/work-display-format/work-format-list/work-format-list.component';
import { WorkFormatKanbanComponent } from './entry-working/entry-work-list/work-display-format/work-format-kanban/work-format-kanban.component';
import { EntryWorkListComponent } from './entry-working/entry-work-list/entry-work-list.component';
import { ProfileInfoWorkComponent } from './entry-profile/entry-profile-info/profile-info-work/profile-info-work.component';
import { ProfileInfoResumeComponent } from './entry-profile/entry-profile-info/profile-info-resume/profile-info-resume.component';
import { ProfileInfoInfomationsComponent } from './entry-profile/entry-profile-info/profile-info-infomations/profile-info-infomations.component';
import { EntryOptionComponent } from './entry-option/entry-option.component';
import { EntryWorkingComponent } from './entry-working/entry-working.component';
import { EntryAttendancesComponent } from './entry-attendances/entry-attendances.component';
import { EntryRequestComponent } from './entry-request/entry-request.component';
import { EntryDocumentComponent } from './entry-document/entry-document.component';
import { EntryRewardComponent } from './entry-reward/entry-reward.component';
import { EntryProfileComponent } from './entry-profile/entry-profile.component';
import { EntryMainComponent } from './entry-main.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { EntryCalenderComponent } from './entry-calender/entry-calender.component';
import { ProfileInfoContactComponent } from './entry-profile/entry-profile-info/profile-info-contact/profile-info-contact.component';



const appRoutes: Routes = [
  {
    path: '',
    component: EntryMainComponent,
    children: [
      {
        path: '', component: EntryProfileComponent,
        children: [
          { path: '', component: ProfileInfoInfomationsComponent },
          { path: 'resume', component: ProfileInfoResumeComponent },
          { path: 'contact', component: ProfileInfoContactComponent },
          { path: 'work-records', component: ProfileInfoWorkComponent },
          { path: 'info', component: ProfileInfoInfomationsComponent },
        ],
      },
      {
        path: 'profile', component: EntryProfileComponent,
        children: [
          { path: '', component: ProfileInfoInfomationsComponent },
          { path: 'resume', component: ProfileInfoResumeComponent },
          { path: 'contact', component: ProfileInfoContactComponent },
          { path: 'work-records', component: ProfileInfoWorkComponent },
          { path: 'info', component: ProfileInfoInfomationsComponent },
        ],
      },
      {
        path: 'reward', component: EntryRewardComponent,
      },
      {
        path: 'document', component: EntryDocumentComponent,
      },
      {
        path: 'request', component: EntryRequestComponent,
      },
      {
        path: 'calender', component: EntryCalenderComponent,
      },
      {
        path: 'attendances', component: EntryAttendancesComponent,
      },
      {
        path: 'work', component: EntryWorkingComponent,
        children: [
          { path: '', component: WorkFormatListComponent },
          { path: 'workingkanban', component: WorkFormatKanbanComponent },
          { path: 'workingmember', component: WorkFormatMemberComponent },
          { path: 'workinglist', component: WorkFormatListComponent },
        ],
      },

      {
        path: 'option', component: EntryOptionComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class EntryMainRoutingModule { }
