import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-profile-info-work',
  templateUrl: './profile-info-work.component.html',
  styleUrls: ['./profile-info-work.component.css']
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
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
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
    this.exampleData2 = [
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
    this.exampleData3 = [
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
    this.exampleData4 = [
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
    this.exampleData5 = [
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
    this.exampleData6 = [
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
    this.exampleData7 = [
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
    this.exampleData8 = [
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
