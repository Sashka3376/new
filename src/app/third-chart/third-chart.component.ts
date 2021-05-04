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
  selector: 'app-third-chart',
  templateUrl: './third-chart.component.html',
  styleUrls: ['./third-chart.component.css']
})
export class ThirdChartComponent implements AfterViewInit {
  @ViewChild('barCanvas') private barCanvas?: ElementRef;
  barChart: any;

  public canvas: any;
  public ctx: any;

  constructor() { }

  /*ngOnInit(): void {
    this.createGraph();
  }*/

  ngAfterViewInit(): void {
    if(this.barCanvas) {
      this.barChartMethod(this.barCanvas);
    }
  }



    barChartMethod(el: ElementRef): void {
      this.barChart = new Chart(el.nativeElement, {
        type: 'bar',
      
        data: {

          labels: ["Jan", "Feb", "Mar", "Apr"],
          datasets: [{
      
              data: [35,20,10,10],
              backgroundColor: [
                '#4879df',
                '#4879df',
                '#4879df',
                '#4879df',
      
              ],
      
            },
            {
              data: [20, 25, 25,14],
              backgroundColor: [
                '#21c393',
                '#21c393',
                '#21c393',
                '#21c393',
      
              ],
            },
            {
              data: [10, 10, 50, 7],
              backgroundColor: [
                '#fbe08d',
                '#fbe08d',
                '#fbe08d',
                '#fbe08d',
      
              ],
            }
          ]
        },

        options: {
       
      
             layout: {
                       padding: {
                         left: 15,
                         right: 15,
                         top: 60,
                         bottom: 40
                       }
                   },
      

      scales: {
        x: {
          stacked: true,
          
        },
        y: {
          stacked: true,
          
        }
      }
        }
      });
    }
  }      