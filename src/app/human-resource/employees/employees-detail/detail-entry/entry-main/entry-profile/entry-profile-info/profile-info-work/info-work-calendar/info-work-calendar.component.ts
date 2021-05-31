import { Component, OnInit, Injectable, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { IMyOptions, MDBDatePickerComponent, ClockPickerComponent } from 'ng-uikit-pro-standard';
import { Select2OptionData } from 'ng-select2';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-info-work-calendar',
  templateUrl: './info-work-calendar.component.html',
  styleUrls: ['./info-work-calendar.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
  encapsulation: ViewEncapsulation.None
})
export class InfoWorkCalendarComponent implements OnInit {

  @ViewChild('input', { static: true }) input: ElementRef;
  @ViewChild('datePicker', { static: true }) datePicker: MDBDatePickerComponent;
  @ViewChild('timePicker', { static: true }) timePicker: ClockPickerComponent;
  public myDatePickerOptions: IMyOptions = {

  };
  onDateChange = (event: { actualDateFormatted: string; }) => {
    this.input.nativeElement.value = event.actualDateFormatted; // set value to input
    this.datePicker.closeBtnClicked(); // close date picker
    this.timePicker.openBtnClicked(); // open time picker
  };
  onTimeChange = (event: string) => {
    this.input.nativeElement.value = `${this.input.nativeElement.value}, ${event}`; // set value to input
  };
  public shift: Array<Select2OptionData>;
  model6: string;
  closeModal: string;
  constructor(
    private modalService: NgbModal,
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) { }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }
  //
  triggerModal(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((res) => {
      this.closeModal = `Closed with: ${res}`;
    }, (res) => {
      this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';

  time: Date = new Date();
  onChangeHour(event) {
    console.log('event', event);
  }
  ngOnInit(): void {
    this.shift = [
      {
        id: 'United States',
        text: 'Sang'
      },
      {
        id: 'United Kingdom',
        text: 'Toi'
      },
      {
        id: 'Afghanistan',
        text: 'Khuya'
      }
    ];
  }

}
