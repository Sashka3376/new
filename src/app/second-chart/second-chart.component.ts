import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
} from 'chart.js';

Chart.register(
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Filler,
  Legend,
  Title,
  Tooltip
);
@Component({
  selector: 'app-second-chart',
  templateUrl: './second-chart.component.html',
  styleUrls: ['./second-chart.component.css']
})
export class SecondChartComponent implements AfterViewInit {
  @ViewChild('doughnutCanvas') private doughnutCanvas?: ElementRef;
  doughnutChart: any;
  public canvas: any;
  public ctx: any;

  constructor() { }

  ngAfterViewInit(): void {
    if(this.doughnutCanvas) {
      this.doughnutChartMethod(this.doughnutCanvas);
    }
  }

  doughnutChartMethod(el: ElementRef): void {
    this.doughnutChart = new Chart(el.nativeElement, {
      type: 'doughnut',

      data : {

        labels: [
            'Red',
            'Yellow',
            'Blue',
        ],
          datasets: [{
              data: [40,30,30],
              backgroundColor: [
                  'rgba(210,212,216,1)',
                  'rgba(174, 233, 215, 1)',
                  'rgba(50, 153, 123, 1)',
  
              ],
              borderColor: [
                'rgba(210,212,216,1)',
                'rgba(174, 233, 215, 1)',
                'rgba(50, 153, 123, 1)',
              ],
              borderWidth: 1
  
          }],
  
          // These labels appear in the legend and in the tooltips when hovering different arcs
  
      },

    options: {

    layout: {
      padding: {

          top: 55,
          bottom: 10
      }
  },

rotation:2.2,
      
    }
     
    });
  }

}
