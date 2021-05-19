import { Component, OnInit } from '@angular/core';
import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'app-profile-info-contact',
  templateUrl: './profile-info-contact.component.html',
  styleUrls: ['./profile-info-contact.component.css']
})
export class ProfileInfoContactComponent implements OnInit {

  public exampleData: Array<Select2OptionData>;
  constructor() { }

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
  }

}
