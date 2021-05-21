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
  selector: 'app-speedometr',
  templateUrl: './speedometr.component.html',
  styleUrls: ['./speedometr.component.css']
})
export class SpeedometrComponent implements AfterViewInit {
  
  ngAfterViewInit() {
    // window.onload = function() {
    //   var newVal = 110;
    //   var pVal = newVal ;
    //   document.getElementById('gauge-c').setAttribute(
    //     "style", "transform: rotate(" + newVal + "deg);");
    //   document.getElementById("percent").innerHTML = pVal+"%";
    // };
  }
}