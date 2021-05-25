import { Component, OnInit, Injectable } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Select2OptionData } from 'ng-select2';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
// import { type } from 'os';
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
  selector: 'app-profile-info-resume',
  templateUrl: './profile-info-resume.component.html',
  styleUrls: ['./profile-info-resume.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})
export class ProfileInfoResumeComponent implements OnInit {

  model1: String;
  model2: String;
  public group: Array<Select2OptionData>;
  public form: Array<Select2OptionData>;
  public skilltype:Array<Select2OptionData>;
  public level: Array<Select2OptionData>;
  public skill:Array<Select2OptionData>;
  closeModal: string;
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
    this.group = [
      {
        id: '001',
        text: 'Group 1'
      },
      {
        id: '002',
        text: 'Group 2'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.form = [
      {
        id: '001',
        text: 'part-time'
      },
      {
        id: '002',
        text: 'full time'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.skilltype = [
      {
        id: '001',
        text: 'Kỹ năng mềm'
      },
      {
        id: '002',
        text: 'Kỹ năng công việc'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.skill = [
      {
        id: '001',
        text: 'Hát'
      },
      {
        id: '002',
        text: 'đá bóng'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];
    this.level = [
      {
        id: '001',
        text: 'level 1'
      },
      {
        id: '002',
        text: 'level 2'
      },
      {
        id: '003',
        text: 'Chua xac dinh'
      }
    ];

  }

}
