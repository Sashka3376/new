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
  selector: 'app-latest-activities',
  templateUrl: './latest-activities.component.html',
  styleUrls: ['./latest-activities.component.css']
})
export class LatestActivitiesComponent implements AfterViewInit {
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
          labels: ['JUL16', 'JUL17','JUL18', 'JUL19', 'JUL20','JUL21' ,'JUL22'],
    



         datasets: [ {
         
       
         fill: {
          target: 'origin',
          above:  'rgba(71, 229, 183, 0.8)',   // Area will be red above the origin
        },
     
       //  pointRadius:0,
   
           data: [2.2,1,2.8,1.8,4.1,1,3,1.4,2.3,1.5],
         
          tension: 0.3
          }]
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
                    label += (context.parsed.y)*1000 + ' Active users';;
                  }
                  return label;
                },
               
              }
  
            },
  
  
  
  
  
            legend: {
  
              display: false,
  
            },
  
  
          },
  
  
      
  
  
          scales: {
  
            x: {
              
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
              type: 'linear',
                   
              max: 5,
              min: 0,
             
              ticks: {
  
                font: {
                  size: 15,
                },
  
                stepSize: 1,
                color: '#6c757e',
           
                callback: function (value) {
                  
                  return value + "k"
                }
              },
        
              grid: {
                display: true,
              },
             
            }
          }
        },


        
     
        });
    }
  }