import { Component, OnInit, Injectable} from '@angular/core';
import { NgbDate, NgbDatepicker} from '@ng-bootstrap/ng-bootstrap';
import { Select2OptionData } from 'ng-select2';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { getLocaleFirstDayOfWeek } from '@angular/common';
import { NgbDateStructAdapter } from '@ng-bootstrap/ng-bootstrap/datepicker/adapters/ngb-date-adapter';
import { getValueInRange } from '@ng-bootstrap/ng-bootstrap/util/util';

@Injectable()
export class CustomDateParserFormatter extends NgbDateParserFormatter {
  readonly DELIMITER = '/';

  parse(value: string): NgbDateStruct | null {
    if (value) {
      let date = value.split(this.DELIMITER);
      return {
        day: parseInt(date[0], 10),
        month: parseInt(date[1], 10),
        year: parseInt(date[2], 10)
      };
    }
    return null;
  }
  format(date: NgbDateStruct | null): string {
    return date
      ? date.day + this.DELIMITER + date.month + this.DELIMITER + date.year
      : '';
  }

}

@Component({
  selector: 'app-atten-navbar',
  templateUrl: './atten-navbar.component.html',
  styleUrls: ['./atten-navbar.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
  ],
})
export class AttenNavbarComponent implements OnInit {

  // minDate: Date;
  // maxDate: Date;

  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>,
  ) { 
    // this.minDate = new Date();
    // this.maxDate = new Date();
    // this.minDate.setDate(this.minDate.getDate() - 4);
    // this.maxDate.setDate(this.maxDate.getDate() + 10);
  }

  //events: string;
  // values: string;

  model1: String;
  public data1: Array<Select2OptionData>;
  
  // lastWeekFilter() {
  //   let lastweek = new Date();
  //   // lastweek.setDate(lastweek.getDate() - 7);
  //   console.log(lastweek.getDate());
  //   // this.fromDate = this.datePipe.transform(lastweek, 'yyyy-MM-dd');
  //   // this.toDate = this.datePipe.transform(new Date(), 'yyyy-MM-dd');
  //   // console.log(this.fromDate);
  // }


  // onChange(event: any): void {
  //   // let lastweek = new Date();
  //   console.log(event.target.value);
  // }

  // public onChange(event: any, newDate: any): void {
  //   console.log(event.target.value);
  //   // this.getData(newDate);
  // }

  // get today() {
  //   return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  // }
  
  // selectedStartDate: string;
  // onChange(event) {
  //    this.selectedStartDate = event.target.value;
  //    console.log(this.selectedStartDate)
  //  }


  ngOnInit(): void {
    this.data1 = [
      {
        id: '001',
        text: 'Theo tháng'
      },
      {
        id: '002',
        text: 'Theo tuần'
      }
    ];
  }
  // addEvent(event: string | NgbDateStruct) {
  //   // this.events.push(event);
  //   // this.events.push(`${type}: ${event.value}`);
  //   // console.log(this.events.getDay());
  //   console.log(event);
  // }
}
