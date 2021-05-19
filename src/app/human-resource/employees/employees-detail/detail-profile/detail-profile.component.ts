import { Component, OnInit } from '@angular/core';
import * as CanvasJS from './canvasjs.min';

@Component({
  selector: 'app-detail-profile',
  templateUrl: './detail-profile.component.html',
  styleUrls: ['./detail-profile.component.css']
})
export class DetailProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    let chart = new CanvasJS.Chart("chartContainer", {
      animationEnabled: true,
      exportEnabled: true,
      title: {
        text: "Basic Column Chart in Angular"
      },
      data: [{
        type: "column",
        dataPoints: [
          { y: 5 },
          { y: 3 },
          { y: 9 },
          { y: 6 },
          { y: 5 },
          { y: 9 },
          { y: 7 },
          { y: 3 },
          { y: 5 },
          { y: 2 },
        ]
      }]
    });

    chart.render();
  }
}
