import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entry-navbar',
  templateUrl: './entry-navbar.component.html',
  styleUrls: ['./entry-navbar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EntryNavbarComponent implements OnInit {

  active_id='active';
  constructor() { }

  ngOnInit(): void {
  }
  onclick(){
    this.active_id='';
  }

}
