import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
    if (this.barCanvas) {
      this.barChartMethod(this.barCanvas);
    }
  }



  barChartMethod(el: ElementRef): void {
    this.barChart = new Chart(el.nativeElement, {
      type: 'bar',

      data: {

        labels: ["May", "Jun", "Jul", "Aug", ''],
        datasets: [{

          data: [40, 23, 10, 10],
          label: 'Information 01',
          backgroundColor: [
            '#4879df',
            '#4879df',
            '#4879df',
            '#4879df',

          ],

        },
        {
          data: [25, 30, 30, 13],
          label: 'Information 02',
          backgroundColor: [
            '#21c393',
            '#21c393',
            '#21c393',
            '#21c393',

          ],
        },
        {
          data: [14, 15, 50, 10],
          label: 'Information 03',
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

        plugins: {
          tooltip: {
         
            displayColors: false,
            backgroundColor: '#6c757e',
            titleColor: "white",
            xAlign: 'center',
            yAlign: 'bottom',
            cornerRadius: 0,
            usePointStyle: true,
            callbacks: {

              label: function (context) {
                var label =  '';
                if (context.parsed.y !== null) {
                  label += context.parsed.y + ' %';
                }
                return label;
              },
              title: function () {
                return "";
              }
            }

          },
          legend: {
            display: true,
            position: 'top',
            align: 'start',


            labels: {
              boxWidth: 10,
              padding: 15,


            }

          },


        },

        layout: {
          padding: {

            top: -5,


          }
        },

        scales: {

          x: {
            stacked: true,
            ticks: {
              font: {
                size: 15,
              },
              color: '#6c757e',
            },
            grid: {
              display: false,
            }
          },
          y: {
            stacked: true,
            ticks: {
              
              font: {
                size: 15,
              },

              
              color: '#6c757e',
              stepSize: 25,
              callback: function (value) {
                return value + "%"
              }
            },
            grid: {
              display: true,
            },
            suggestedMin: 0,
            suggestedMax: 100,
          }
        }
      }






    });
  }
}