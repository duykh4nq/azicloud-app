import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-detail-right',
  templateUrl: './detail-right.component.html',
  styleUrls: ['./detail-right.component.css']
})
export class DetailRightComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getAnimationData(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}
