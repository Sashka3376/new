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
  selector: 'app-bar-horizontal-chart',
  templateUrl: './bar-horizontal-chart.component.html',
  styleUrls: ['./bar-horizontal-chart.component.css']
})
export class BarHorizontalChartComponent implements AfterViewInit {
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
          labels: ['BJP', 'INC', 'AAP'],
          datasets: [{
            label: '# of Votes',
            data: [400, 50, 30],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
   
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
       
            ],
            borderWidth: 1,
        
          }]
        },
       
        









        
       options:{

    
        indexAxis: 'y',
        elements: {
          bar: {
            borderWidth: 2,
          }
        },
        responsive: true,
        plugins: {
          legend: {
            position: 'right',
          },
          title: {
            display: true,
            text: 'Chart.js Horizontal Bar Chart'
          }
        },


        scales: {
         
          x:  {
          
            ticks: {
              display: false
              
            },
            grid: {
              display: false
            }
          } ,
          y:  {
           
             grid: {
              display: false
            }
          
          } 


      }



      },
      });
    }
  
  }
