import { Component, OnInit, Injectable } from '@angular/core';
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
  selector: 'app-profile-info-contact',
  templateUrl: './profile-info-contact.component.html',
  styleUrls: ['./profile-info-contact.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class ProfileInfoContactComponent implements OnInit {

  public exampleData: Array<Select2OptionData>;
  public exampleData8: Array<Select2OptionData>;
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
    this.exampleData = [
      {
        id: 'United States',
        text: 'Trưởng phòng kinh doanh'
      },
      {
        id: 'United Kingdom',
        text: 'Lập trình Mobile Apps'
      },
      {
        id: 'Afghanistan',
        text: 'Nghỉ'
      }
    ];
    this.exampleData8 = [
      {
        id: 'b008',
        text: 'Cha/me'
      },
      {
        id: 'b009',
        text: 'Anh/em'
      },
      {
        id: 'b0010',
        text: 'Ong/ba'
      },
      {
        id: 'b0010',
        text: 'Co/Chu'
      }


    ];
  }

}