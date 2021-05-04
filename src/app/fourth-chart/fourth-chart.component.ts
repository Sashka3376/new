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

  /*ngOnInit(): void {
    this.createGraph();
  }*/

  ngAfterViewInit(): void {
    if(this.lineCanvas) {
      this.lineChartMethod(this.lineCanvas);
    }
  }



    lineChartMethod(el: ElementRef): void {
      this.lineChart = new Chart(el.nativeElement, {
        
          type: 'line',
          data: {
            labels: ['','label','label','label','label',''],
            datasets: [{ 
                data: [35, 60, 50, 65, 20, 16],
                label: "Car A - Speed (mph)",
                borderColor: '#6a8ee3',
                fill: false,
                pointBackgroundColor:'#6a8ee3',
                pointRadius:5,
              }, { 
                data: [50, 35, 82, 75, 45, 70],
                label: "Car B - Speed (mph)",
                borderColor: '#21c393',
                fill: false,
                pointBackgroundColor:'#21c393',
                pointRadius:5

              }, { 
                data: [75, 15, 35, 33, 74, 30],
                label: "Car c - Speed (mph)",
                borderColor: '#fad567',
                fill: false,
                
                pointBackgroundColor:'#fad567',
                pointRadius:5
              }, 
            ]
          },
          options: {
            layout: {
              padding: {
                left: 15,
                right: 15,
                top: 60,
                bottom: 30
              }
          },
          }
        });
    }
  }      