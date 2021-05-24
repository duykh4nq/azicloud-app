
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HumanResourceRoutingModule } from './human-resource/human-resource-routing.module';
import { HumanResourceModule } from './human-resource/human-resource.module';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './auth/auth.component';
import { EmployeesFormatRoutingModule } from './human-resource/employees/employees-filter/employees-display-format/employees-format-routing.module';
import { EmplyeesFilterRoutingModule } from './human-resource/employees/employees-filter/emplyees-filter-routing.module';
import { DetailEntryRoutingModule } from './human-resource/employees/employees-detail/detail-entry/detail-entry-routing.module';
import { EntryMainRoutingModule } from './human-resource/employees/employees-detail/detail-entry/entry-main/entry-main-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    HumanResourceRoutingModule,
    HumanResourceModule,
    AppRoutingModule,
    EmployeesFormatRoutingModule,
    EmplyeesFilterRoutingModule,
    DetailEntryRoutingModule,
    EntryMainRoutingModule,
    NgbModule,
    NgxMaterialTimepickerModule. setLocale ( ' ar-AE ' ),
    BrowserAnimationsModule,
    FullCalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
