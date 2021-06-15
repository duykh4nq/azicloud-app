import { Component, OnInit, Injectable,OnDestroy } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
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
  selector: 'app-weekly-timekeeping',
  templateUrl: './weekly-timekeeping.component.html',
  styleUrls: ['./weekly-timekeeping.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
})
export class WeeklyTimekeepingComponent implements OnInit {

  closeModal: string;
  public species: Array<Select2OptionData>;
  public shift: Array<Select2OptionData>;
  public leave: Array<Select2OptionData>;
  public status: Array<Select2OptionData>;
  constructor(
    private modalService: NgbModal,
    ) { }

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
  name = 'slideToggle';
  id = 'materialSlideToggle';
  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';
  onChange(value: boolean) {
  }
  ngOnInit(): void {
    this.species = [
      {
        id: '001',
        text: '1/2 Ngày'
      },
      {
        id: '002',
        text: 'Trong Ngày'
      },
      {
        id: '003',
        text: 'Hai Ngày'
      },
      {
        id: '004',
        text: 'Ba Ngày'
      },
      {
        id: '005',
        text: 'Bốn ngày'
      },
    ];
    this.shift= [
      {
        id: '01',
        text: 'Ca hành chính'
      },
      {
        id: '02',
        text: 'Ca chủ nhật'
      },
    ];
    this.status= [
      {
        id: '01',
        text: 'Đang chờ phê duyệt'
      },
      {
        id: '02',
        text: 'Phê duyệt'
      },
      {
        id: '02',
        text: 'Không được phê duyệt'
      },
    ];
  }

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}
