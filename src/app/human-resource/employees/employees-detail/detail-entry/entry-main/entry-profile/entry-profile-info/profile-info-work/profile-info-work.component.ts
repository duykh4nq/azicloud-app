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
  selector: 'app-profile-info-work',
  templateUrl: './profile-info-work.component.html',
  styleUrls: ['./profile-info-work.component.css'],
  providers: [
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter }
  ]
})

export class ProfileInfoWorkComponent implements OnInit {


  public exampleData: Array<Select2OptionData>;
  public exampleData2: Array<Select2OptionData>;
  public exampleData3: Array<Select2OptionData>;
  public exampleData4: Array<Select2OptionData>;
  public exampleData5: Array<Select2OptionData>;
  public exampleData6: Array<Select2OptionData>;
  public exampleData7: Array<Select2OptionData>;
  public exampleData8: Array<Select2OptionData>;
  public exampleData9: Array<Select2OptionData>;
  model1: String;
  model2: String;
  model3: String;
  model4: String;
  model5: String;
  model6: string;
  model7: String;
  model8: string;
  closeModal: string;
  constructor(
    private modalService: NgbModal,
    private ngbCalendar: NgbCalendar,
    private dateAdapter: NgbDateAdapter<string>
  ) { }
  //
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

  // name = 'slideToggle';
  // id = 'materialSlideToggle';
  //color: ThemePalette = 'primary';
  checked = false;
  disabled = false;
  label = 'Toggle On/Off';
  labelledby = 'Some Other Text';
  onChange(value: boolean) {
  }

  // private exportTime = { hour: 7, minute: 15, meriden: 'PM', format: 24 };

  // onChangeHour(event) {
  //   console.log('event', event);
  // }

  ngOnInit(): void {
    this.exampleData = [
      {


        id: 'United States',
        text: 'Tr?????ng ph??ng kinh doanh'
      },
      {
        id: 'United Kingdom',
        text: 'L???p tr??nh Mobile Apps'
      },
      {
        id: 'Afghanistan',
        text: 'Ngh???'
      }
    ];
    this.exampleData2 = [
      {
        id: 'United States',
        text: 'To??n th???i gian'
      },
      {
        id: 'United Kingdom',
        text: 'B??n th???i gian'
      },
      {
        id: 'Afghanistan',
        text: 'Th???c t???p'
      }
    ];
    this.exampleData3 = [
      {
        id: 'United States',
        text: 'Vi???t Nam'
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
    this.exampleData4 = [
      {
        id: 'United States',
        text: 'Vi???t Nam'
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
    this.exampleData5 = [
      {
        id: 'United States',
        text: 'Th???c t???p'
      },
      {
        id: 'United Kingdom',
        text: 'Th??? vi???c'
      },
      {
        id: 'Afghanistan',
        text: 'Ngh??'
      }
    ];
    this.exampleData6 = [
      {
        id: 'United States',
        text: 'Nh??n vi??n'
      },
      {
        id: 'United Kingdom',
        text: 'Qu???n l??'
      },
      {
        id: 'Afghanistan',
        text: '????o t???o'
      }
    ];
    this.exampleData7 = [
      {
        id: 'United States',
        text: 'Nh??n vi??n'
      },
      {
        id: 'United Kingdom',
        text: 'Qu???n l??'
      },
      {
        id: 'Afghanistan',
        text: '????o t???o'
      }
    ];
    this.exampleData8 = [
      {
        id: 'United States',
        text: 'Vi???t Nam'
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
    this.exampleData9 = [
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