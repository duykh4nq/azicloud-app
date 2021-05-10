import { TimekeepingComponent } from './main/detail/detail-right/body-detail-right/timekeeping/timekeeping.component';
import { WorkComponent } from './main/detail/detail-right/body-detail-right/work/work.component';
import { FooterComponent } from './core/footer/footer.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { MainComponent } from './main/main.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { MainRoutingModule } from './main/main-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { DetailComponent } from './main/detail/detail.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeRoutingModule } from './main/home/home-routing.module';
import { DeatilRoutingModule } from './main/detail/deatil-routing.module';
import { HeaderComponent } from './core/header/header.component';
import { PaginationComponent } from './main/home/pagination/pagination.component';
import { BodyLeftComponent } from './main/home/body-left/body-left.component';
import { BodyRightComponent } from './main/home/body-right/body-right.component';
import { ProfileComponent } from './main/detail/profile/profile.component';
import { DetailRightComponent } from './main/detail/detail-right/detail-right.component';
import { DetailRightRoutingModule } from './main/detail/detail-right/detail-right-routing.module';
import { HeaderDetailRightComponent } from './main/detail/detail-right/header-detail-right/header-detail-right.component';
import { BodyDetailRightComponent } from './main/detail/detail-right/body-detail-right/body-detail-right.component';
import { BodyDetailRightRoutingModule } from './main/detail/detail-right/body-detail-right/body-detail-right-routing.module';
import { CustomizedComponent } from './main/detail/detail-right/body-detail-right/customized/customized.component';
import { RequestComponent } from './main/detail/detail-right/body-detail-right/request/request.component';
import { TimetableComponent } from './main/detail/detail-right/body-detail-right/timetable/timetable.component';
import { DocumentComponent } from './main/detail/detail-right/body-detail-right/document/document.component';
import { EmulationRewardComponent } from './main/detail/detail-right/body-detail-right/emulation-reward/emulation-reward.component';
import { RecordsComponent } from './main/detail/detail-right/body-detail-right/records/records.component';
import { RecordsLeftComponent } from './main/detail/detail-right/body-detail-right/records/records-left/records-left.component';
import { RecordsRightComponent } from './main/detail/detail-right/body-detail-right/records/records-right/records-right.component';
import { RecordsRoutingModule } from './main/detail/detail-right/body-detail-right/records/records-routing.module';
import { RecordsInfomationsComponent } from './main/detail/detail-right/body-detail-right/records/records-right/records-infomations/records-infomations.component';
import { RecordsContactComponent } from './main/detail/detail-right/body-detail-right/records/records-right/records-contact/records-contact.component';
import { RecordsResumeComponent } from './main/detail/detail-right/body-detail-right/records/records-right/records-resume/records-resume.component';
import { RecordsWorkComponent } from './main/detail/detail-right/body-detail-right/records/records-right/records-work/records-work.component';
import { EmployeeListComponent } from './main/home/body-right/employee-list/employee-list.component';
import { EmployeeComponent } from './main/home/body-right/employee/employee.component';
import { EmployeeRoutingModule } from './main/home/body-right/employee-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    MainComponent,
    LoginComponent,
    HomeComponent,
    DetailComponent,
    HeaderComponent,
    PaginationComponent,
    BodyLeftComponent,
    BodyRightComponent,
    FooterComponent,
    ProfileComponent,
    DetailRightComponent,
    HeaderDetailRightComponent,
    BodyDetailRightComponent,
    WorkComponent,
    TimekeepingComponent,
    CustomizedComponent,
    RequestComponent,
    TimetableComponent,
    DocumentComponent,
    EmulationRewardComponent,
    RecordsComponent,
    RecordsLeftComponent,
    RecordsRightComponent,
    RecordsInfomationsComponent,
    RecordsContactComponent,
    RecordsResumeComponent,
    RecordsWorkComponent,
    EmployeeListComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    AuthRoutingModule,
    MainRoutingModule,
    AppRoutingModule,
    HomeRoutingModule,
    DeatilRoutingModule,
    DetailRightRoutingModule,
    BodyDetailRightRoutingModule,
    RecordsRoutingModule,
    EmployeeRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
