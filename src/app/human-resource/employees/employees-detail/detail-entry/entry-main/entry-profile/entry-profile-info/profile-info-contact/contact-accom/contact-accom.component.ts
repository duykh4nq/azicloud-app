import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Select2OptionData } from 'ng-select2';


@Component({
  selector: 'app-contact-accom',
  templateUrl: './contact-accom.component.html',
  styleUrls: ['./contact-accom.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactAccomComponent implements OnInit {


  public nationality: Array<Select2OptionData>;
  public city: Array<Select2OptionData>;
  public district: Array<Select2OptionData>;
  public ward: Array<Select2OptionData>;
  constructor() { }

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
  }

}
