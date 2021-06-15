import { Component, OnInit, Injectable, ViewEncapsulation } from '@angular/core';
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
  selector: 'app-contact-relatives',
  templateUrl: './contact-relatives.component.html',
  styleUrls: ['./contact-relatives.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
  encapsulation: ViewEncapsulation.None
})
export class ContactRelativesComponent implements OnInit {

  public nationality: Array<Select2OptionData>;
  public city: Array<Select2OptionData>;
  public district: Array<Select2OptionData>;
  public ward: Array<Select2OptionData>;
  public relationship: Array<Select2OptionData>;
  public sex: Array<Select2OptionData>;
  closeModal: string;
  model1: String;
  model2: String;
  model3: String;
  constructor(
    private modalService: NgbModal,
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) { }

  get today() {
    return this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
  }

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
  ngOnInit(): void {
    this.nationality = [
      {
        id: '001',
        text: 'Việt Nam'
      },
      {
        id: '002',
        text: 'Canada'
      },
      {
        id: '003',
        text: 'Khác'
      }
    ];
    this.district = [
      {
        id: '001',
        text: 'Quận 1'
      },
      {
        id: '002',
        text: 'Quận 2'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ];
    this.city = [
      {
        id: '001',
        text: 'TP HCM'
      },
      {
        id: '002',
        text: 'Đà Nẵng'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ];
    this.ward = [
      {
        id: '001',
        text: 'Phường 1'
      },
      {
        id: '002',
        text: 'Phường 2'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ]
    this.relationship = [
      {
        id: '001',
        text: 'Vợ/Chồng'
      },
      {
        id: '002',
        text: 'Con trai/Con gái'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ]
    this.sex = [
      {
        id: '001',
        text: 'Nam'
      },
      {
        id: '002',
        text: 'Nu'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ]
  }

}
