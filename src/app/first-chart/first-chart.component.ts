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
  selector: 'app-first-chart',
  templateUrl: './first-chart.component.html',
  styleUrls: ['./first-chart.component.css']
})

export class FirstChartComponent implements AfterViewInit {
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
        labels: ['item', 'item', 'item', 'item'],
        datasets: [{
          data: [40, 60, 50, 82],

          backgroundColor: [
            'rgba(174, 233, 215, 1)',
            'rgba(98, 220, 184, 1)',
            'rgba(33, 195, 147, 1)',
            'rgba(50, 153, 123, 1)',

          ],
          borderColor: [
            'rgba(174, 233, 215, 1)',
            'rgba(98, 220, 184, 1)',
            'rgba(33, 195, 147, 1)',
            'rgba(50, 153, 123, 1)',

          ],
          borderWidth: 1
        }]
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
            display: false,

          }
        },
        scales: {

          x: {
            ticks: {
              font: {
                size: 15,
              },
              color: '#6c757e',
            },
            grid: {
              display: false,
            },
          },
          y: {
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
            suggestedMin: 10,
            suggestedMax: 100,
          }
        }
      }


    });
  }

}

