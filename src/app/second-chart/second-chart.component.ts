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
    if (this.doughnutCanvas) {
      this.doughnutChartMethod(this.doughnutCanvas);
    }
  }

  doughnutChartMethod(el: ElementRef): void {
    this.doughnutChart = new Chart(el.nativeElement, {
      type: 'doughnut',

      data: {

        labels: [
          'Information 01',
          'Information 02',
          'Information 03',
        ],


        datasets: [{
          data: [26, 32, 42],


          backgroundColor: [
            'rgba(174, 233, 215, 1)',
            'rgba(50, 153, 123, 1)',
            'rgba(210,212,216,1)',
          ],
          borderColor: [
            'rgba(174, 233, 215, 1)',
            'rgba(50, 153, 123, 1)',
            'rgba(210,212,216,1)',
          ],

          borderWidth: 1,


        }],

        // These labels appear in the legend and in the tooltips when hovering different arcs

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
                var label = context.dataset.label || '';
                if (context.parsed !== null) {
                  label += context.parsed + ' %';
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
        cutout: 95,
        layout: {
          padding: {
        

          }
        },
        radius: 85,


      }

    });
  }

}
