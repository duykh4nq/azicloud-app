import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-entry-navbar',
  templateUrl: './entry-navbar.component.html',
  styleUrls: ['./entry-navbar.component.css']
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
