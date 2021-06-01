import { FooterComponent } from './../_core/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeesFilterComponent } from './employees/employees-filter/employees-filter.component';
import { EmployeesDetailComponent } from './employees/employees-detail/employees-detail.component';
import { HumanResourceRoutingModule } from './human-resource-routing.module';
import { EmployeesPaginationComponent } from './employees/employees-filter/employees-pagination/employees-pagination.component';
import { EmployeesFilemanagerComponent } from './employees/employees-filter/employees-filemanager/employees-filemanager.component';
import { EmployeesDisplayFormatComponent } from './employees/employees-filter/employees-display-format/employees-display-format.component';
import { HeaderComponent } from '../_core/header/header.component';
import { EmployeesFilterListComponent } from './employees/employees-filter/employees-display-format/employees-filter-list/employees-filter-list.component';
import { EmployeesFilterNormalComponent } from './employees/employees-filter/employees-display-format/employees-filter-normal/employees-filter-normal.component';
import { DetailProfileComponent } from './employees/employees-detail/detail-profile/detail-profile.component';
import { DetailEntryComponent } from './employees/employees-detail/detail-entry/detail-entry.component';
import { EntryNavbarComponent } from './employees/employees-detail/detail-entry/entry-navbar/entry-navbar.component';
import { EntryMainComponent } from './employees/employees-detail/detail-entry/entry-main/entry-main.component';
import { EntryWorkingComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-working.component';
import { EntryAttendancesComponent } from './employees/employees-detail/detail-entry/entry-main/entry-attendances/entry-attendances.component';
import { EntryRequestComponent } from './employees/employees-detail/detail-entry/entry-main/entry-request/entry-request.component';
import { EntryRewardComponent } from './employees/employees-detail/detail-entry/entry-main/entry-reward/entry-reward.component';
import { EntryCalenderComponent } from './employees/employees-detail/detail-entry/entry-main/entry-calender/entry-calender.component';
import { EntryDocumentComponent } from './employees/employees-detail/detail-entry/entry-main/entry-document/entry-document.component';
import { EntryOptionComponent } from './employees/employees-detail/detail-entry/entry-main/entry-option/entry-option.component';
import { EntryProfileComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile.component';
import { EntryProfileDrawerComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-drawer/entry-profile-drawer.component';
import { EntryProfileInfoComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/entry-profile-info.component';
import { ProfileInfoContactComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-contact/profile-info-contact.component';
import { ProfileInfoResumeComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-resume/profile-info-resume.component';
import { ProfileInfoWorkComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/profile-info-work.component';
import { ProfileInfoInfomationsComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-infomations/profile-info-infomations.component';
import { NgSelect2Module } from 'ng-select2';
import { EntryWorkDrawerComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-work-drawer/entry-work-drawer.component';
import { EntryWorkListComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-work-list/entry-work-list.component';
import { WorkFormatKanbanComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-work-list/work-display-format/work-format-kanban/work-format-kanban.component';
import { WorkFormatMemberComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-work-list/work-display-format/work-format-member/work-format-member.component';
import { WorkFormatListComponent } from './employees/employees-detail/detail-entry/entry-main/entry-working/entry-work-list/work-display-format/work-format-list/work-format-list.component';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { SlideToggleModule } from 'ngx-slide-toggle';
// import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { DatepickerModule, TimePickerModule } from 'ng-uikit-pro-standard';
import { NgxEditorModule } from 'ngx-editor';
import { InfoContactAccommodationComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-contact/info-contact-accommodation/info-contact-accommodation.component';
import { InfoContactEmergencyComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-contact/info-contact-emergency/info-contact-emergency.component';
import { InfoContactAddressComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-contact/info-contact-address/info-contact-address.component';
import { InfoContactRelativesComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-contact/info-contact-relatives/info-contact-relatives.component';
import { InfoResumeExperienceComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-resume/info-resume-experience/info-resume-experience.component';
import { InfoResumeSkillComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-resume/info-resume-skill/info-resume-skill.component';
import { InfoWorkJobComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/info-work-job/info-work-job.component';
import { InfoWorkCalendarComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/info-work-calendar/info-work-calendar.component';
import { InfoWorkHistoryComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/info-work-history/info-work-history.component';
import { InfoWorkContractComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/info-work-contract/info-work-contract.component';
import { InfoWorkAssetComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-work/info-work-asset/info-work-asset.component';
import { InfoInfomationsBasicComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-infomations/info-infomations-basic/info-infomations-basic.component';
import { InfoInfomationsHealthComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-infomations/info-infomations-health/info-infomations-health.component';
import { InfoInfomationsBankComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-infomations/info-infomations-bank/info-infomations-bank.component';
import { InfoInfomationsIntroduceComponent } from './employees/employees-detail/detail-entry/entry-main/entry-profile/entry-profile-info/profile-info-infomations/info-infomations-introduce/info-infomations-introduce.component';

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin
]);
@NgModule({
  declarations: [
    EmployeesComponent,
    EmployeesFilterComponent,
    EmployeesDetailComponent,
    EmployeesPaginationComponent,
    EmployeesFilemanagerComponent,
    EmployeesDisplayFormatComponent,
    HeaderComponent,
    FooterComponent,
    EmployeesFilterListComponent,
    EmployeesFilterNormalComponent,
    DetailProfileComponent,
    DetailEntryComponent,
    EntryNavbarComponent,
    EntryMainComponent,
    EntryWorkingComponent,
    EntryAttendancesComponent,
    EntryRequestComponent,
    EntryRewardComponent,
    EntryCalenderComponent,
    EntryDocumentComponent,
    EntryOptionComponent,
    EntryProfileComponent,
    EntryProfileDrawerComponent,
    EntryProfileInfoComponent,
    ProfileInfoContactComponent,
    ProfileInfoResumeComponent,
    ProfileInfoWorkComponent,
    ProfileInfoInfomationsComponent,
    EntryWorkDrawerComponent,
    EntryWorkListComponent,
    WorkFormatKanbanComponent,
    WorkFormatMemberComponent,
    WorkFormatListComponent,
    InfoContactAccommodationComponent,
    InfoContactEmergencyComponent,
    InfoContactAddressComponent,
    InfoContactRelativesComponent,
    InfoResumeExperienceComponent,
    InfoResumeSkillComponent,
    InfoWorkJobComponent,
    InfoWorkCalendarComponent,
    InfoWorkHistoryComponent,
    InfoWorkContractComponent,
    InfoWorkAssetComponent,
    InfoInfomationsBasicComponent,
    InfoInfomationsHealthComponent,
    InfoInfomationsBankComponent,
    InfoInfomationsIntroduceComponent,
  ],
  imports: [
    CommonModule,
    HumanResourceRoutingModule,
    NgbModule,
    NgSelect2Module,
    NgbPaginationModule, NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaterialTimepickerModule,
    SlideToggleModule,
    FullCalendarModule,
    DatepickerModule,
    TimePickerModule,

    FullCalendarModule,
    NgxEditorModule

  ]
})
export class HumanResourceModule { }
