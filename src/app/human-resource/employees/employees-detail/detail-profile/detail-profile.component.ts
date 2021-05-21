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
      theme: "light2",
      data: [  //array of dataSeries     
        { //dataSeries - first quarter
          /*** Change type "column" to "bar", "area", "line" or "pie"***/
          type: "column",
          dataPoints: [
            { y: 5 },

            { y: 9 },

            { y: 5 },

            { y: 7 },

            { y: 5 },
          ]
        },
        { //dataSeries - second 

          type: "column",
          dataPoints: [
            { y: 3 },
            { y: 6 },
            { y: 9 },
            { y: 3 },
            { y: 2 }
          ]
        }
      ]
    });

    chart.render();

    let chart2 = new CanvasJS.Chart("chartContainer2", {
      theme: "light2", // "light2", "dark1", "dark2" 5,3,9,6,5,9,7,3,5,2
      data: [
        {
          type: "area", // Change type to "bar", "area", "spline", "pie",etc.
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
            { y: 2 }
          ]
        }
      ]
    });
    chart2.render();
  }
}
