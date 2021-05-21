import { Component, OnInit, Injectable } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
// import {ThemePalette} from '@angular/material/core';

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
  selector: 'app-profile-info-infomations',
  templateUrl: './profile-info-infomations.component.html',
  styleUrls: ['./profile-info-infomations.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class ProfileInfoInfomationsComponent implements OnInit {

  model1: String;
    model2: String;
    model3: String;
    model4: String;
    model5: String;
  public exampleData: Array<Select2OptionData>;
  constructor(
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>) { }

    get today() {
      return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
    }

    name = 'slideToggle';
    id = 'materialSlideToggle';
    checked = false;
    disabled = false;
    label = 'Toggle On/Off';
    labelledby = 'Some Other Text';
    onChange(value: boolean) {
    }
    // name = 'slideToggle';
    // id = 'materialSlideToggle';
    // color: ThemePalette = 'accent';
    // checked = false;
    // disabled = false;
    // label = 'Toggle On/Off';
    // labelledby = 'Some Other Text';
    // onChange(value: boolean) {
    // }
  ngOnInit(): void {
    this.exampleData = [
      {
        id: '001',
        text: 'Độc thân'
      },
      {
        id: '002',
        text: 'Có gia đình'
      },
      {
        id: '003',
        text: 'Sống chung hợp pháp'
      },
      {
        id: '004',
        text: 'Đã ly hôn'
      },
      {
        id: '005',
        text: 'Góa phụ'
      },
      {
        id: '006',
        text: 'Khác'
      }
    ];
  }
}
