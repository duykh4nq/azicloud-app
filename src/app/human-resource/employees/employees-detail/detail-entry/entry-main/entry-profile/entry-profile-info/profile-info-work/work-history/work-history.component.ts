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
  selector: 'app-work-history',
  templateUrl: './work-history.component.html',
  styleUrls: ['./work-history.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ],
  encapsulation: ViewEncapsulation.None
})
export class WorkHistoryComponent implements OnInit {

  public position: Array<Select2OptionData>;
  public form: Array<Select2OptionData>;
  public branch: Array<Select2OptionData>;
  public manager: Array<Select2OptionData>;
  public status: Array<Select2OptionData>;
  public workgroup: Array<Select2OptionData>;
  public company: Array<Select2OptionData>;
  public department: Array<Select2OptionData>;
  model7: String;
  model8: string;
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
  ngOnInit(): void {
    this.position = [
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
    this.form = [
      {
        id: 'United States',
        text: 'Toàn thời gian'
      },
      {
        id: 'United Kingdom',
        text: 'Bán thời gian'
      },
      {
        id: 'Afghanistan',
        text: 'Thực tập'
      }
    ];
    this.branch = [
      {
        id: 'United States',
        text: 'Việt Nam'
      },
      {
        id: 'United Kingdom',
        text: 'United Kingdom'
      },
      {
        id: 'Afghanistan',
        text: 'Afghanistan'
      }
    ];
    this.manager = [
      {
        id: 'United States',
        text: 'Việt Nam'
      },
      {
        id: 'United Kingdom',
        text: 'United Kingdom'
      },
      {
        id: 'Afghanistan',
        text: 'Afghanistan'
      }
    ];
    this.status = [
      {
        id: 'United States',
        text: 'Thực tập'
      },
      {
        id: 'United Kingdom',
        text: 'Thử việc'
      },
      {
        id: 'Afghanistan',
        text: 'Nghĩ'
      }
    ];
    this.workgroup = [
      {
        id: 'United States',
        text: 'Nhân viên'
      },
      {
        id: 'United Kingdom',
        text: 'Quản lý'
      },
      {
        id: 'Afghanistan',
        text: 'Đào tạo'
      }
    ];
    this.company = [
      {
        id: 'United States',
        text: 'Nhân viên'
      },
      {
        id: 'United Kingdom',
        text: 'Quản lý'
      },
      {
        id: 'Afghanistan',
        text: 'Đào tạo'
      }
    ];
    this.department = [
      {
        id: 'United States',
        text: 'Việt Nam'
      },
      {
        id: 'United Kingdom',
        text: 'United Kingdom'
      },
      {
        id: 'Afghanistan',
        text: 'Afghanistan'
      }
    ];
  }

}
