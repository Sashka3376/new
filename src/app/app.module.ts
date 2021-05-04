import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FirstChartComponent } from './first-chart/first-chart.component';
import { SecondChartComponent } from './second-chart/second-chart.component';
import { ThirdChartComponent } from './third-chart/third-chart.component';
import { FourthChartComponent } from './fourth-chart/fourth-chart.component';
import { LatestActivitiesComponent } from './latest-activities/latest-activities.component';
import { BarHorizontalChartComponent } from './bar-horizontal-chart/bar-horizontal-chart.component';
import { GridComponent } from './grid/grid.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserStudyComponent } from './user-study/user-study.component';
import { LaunchComponent } from './launch/launch.component';
import { ViewArchiveComponent } from './view-archive/view-archive.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

const routes: Routes = [
  {path: '', component:Page1Component },
  {path:'dashboard', component:Page1Component },
  {path:'userStudy', component:Page2Component},
  {path:'launch', component:Page3Component},
  {path:'viewArchive', component:Page4Component},
  {path:'my', component:Page5Component},

];


@NgModule({
  declarations: [
    AppComponent,
    FirstChartComponent,
    SecondChartComponent,
    ThirdChartComponent,
    FourthChartComponent,
    LatestActivitiesComponent,
    BarHorizontalChartComponent,
    GridComponent,
    DashboardComponent,
    UserStudyComponent,
    LaunchComponent,
    ViewArchiveComponent,
    MyAccountComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    Page4Component,
    Page5Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
