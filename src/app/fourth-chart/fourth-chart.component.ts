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
  selector: 'app-fourth-chart',
  templateUrl: './fourth-chart.component.html',
  styleUrls: ['./fourth-chart.component.css']
})
export class FourthChartComponent implements AfterViewInit {
  @ViewChild('lineCanvas') private lineCanvas?: ElementRef;
  lineChart: any;

  public canvas: any;
  public ctx: any;

  constructor() { }



  ngAfterViewInit(): void {
    if (this.lineCanvas) {
      this.lineChartMethod(this.lineCanvas);
    }
  }




  lineChartMethod(el: ElementRef): void {
    this.lineChart = new Chart(el.nativeElement, {

      type: 'line',
      data: {

        labels: ['', 'label', 'label', 'label', 'label', ''],
        datasets: [{
          data: [35, 60, 40, 5, 10, 6],
          label: 'Information 01',
          borderColor: '#6a8ee3',
          fill: false,
          pointBackgroundColor: '#6a8ee3',
          pointRadius: 4,
        }, {
          data: [40, 25, 2, 5, 35, 6],
          label: 'Information 02',
          borderColor: '#21c393',
          fill: false,
          pointBackgroundColor: '#21c393',
          pointRadius: 4

        }, {
          data: [6, 5, 25, 23, 6, 20],
          label: 'Information 03',
          borderColor: '#fad567',
          fill: false,

          pointBackgroundColor: '#fad567',
          pointRadius: 4
        },
        ],

      },


      options: {

        elements: {
          point: {
         
            hoverBorderWidth:6,

          }
        },

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
                var label = '';
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


              padding: 15,
              boxWidth: 8,
              textAlign: 'left',
              usePointStyle: true

            }

          },


        },


        layout: {
          padding: {
            bottom: -5,
            top: -5,


          }
        },


        scales: {

          x: {
            stacked: true,
            ticks: {
              font: {
                size: 12,
              },
              color: '#6c757e',
            },
            grid: {
              display: true,
            },
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
      },

















    });
  }
}