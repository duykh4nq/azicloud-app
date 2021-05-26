import { Component, OnInit, Injectable, ViewEncapsulation, OnDestroy } from '@angular/core';
import { Select2OptionData } from 'ng-select2';
import {
  NgbCalendar,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDateStruct
} from '@ng-bootstrap/ng-bootstrap';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import { AbstractControl, FormControl, FormGroup } from "@angular/forms";
import jsonDoc from "./doc";

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
  ],
  encapsulation: ViewEncapsulation.None
})
export class ProfileInfoInfomationsComponent implements OnInit, OnDestroy {
  model1: String;
  model2: String;
  model3: String;
  model4: String;
  model5: String;
  public marriage: Array<Select2OptionData>;
  public nationality: Array<Select2OptionData>;
  public sex: Array<Select2OptionData>;
  //editor
  editordoc = jsonDoc;
  editor: Editor;
  toolbar: Toolbar = [
    ["bold", "italic"],
    ["underline", "strike"],
    ["code", "blockquote"],
    ["ordered_list", "bullet_list"],
    [{ heading: ["h1", "h2", "h3", "h4", "h5", "h6"] }],
    // [{ fontName: ["Time New Roman"] }],
    ["link", "image"],
    ["text_color", "background_color"],
    ["align_left", "align_center", "align_right", "align_justify"]
  ];
  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    )
  });


  get doc(): AbstractControl {
    return this.form.get("editorContent");
  }
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
    this.editor = new Editor();//editor
    this.marriage = [
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
    this.nationality = [
      {
        id: '001',
        text: 'Việt Nam'
      },
      {
        id: '002',
        text: 'Cannada'
      },
      {
        id: '003',
        text: 'Khác'
      },

    ];
    this.sex = [
      {
        id: '001',
        text: 'Nam'
      },
      {
        id: '002',
        text: 'Nữ'
      },
      {
        id: '003',
        text: 'Khác'
      },
    ]
  }
  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
