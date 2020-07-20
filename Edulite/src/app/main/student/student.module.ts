import { NgModule } from '@angular/core';

import { NbCardModule, NbIconModule, NbListModule, NbSelectModule } from '@nebular/theme';

import { StudentComponent } from './student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GradesComponent } from './grades/grades.component';
import { HomeworkComponent } from './homework/homework.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StudentRoutingModule } from './student-routing.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { NewsService } from './noticeboard/news.service';
import { GradesPieChartComponent } from './grades/charts/grades-chart.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { SubjectPercentChartComponent } from './grades/charts/subject-chart.components';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NbCardModule,
    NbIconModule,
    StudentRoutingModule,
    FullCalendarModule,
    NbListModule,
    NbSelectModule,
    NgxEchartsModule,
    SharedModule
  ],
  declarations: [
    StudentComponent,
    DashboardComponent,
    ScheduleComponent,
    GradesComponent,
    HomeworkComponent,
    NoticeboardComponent,
    GradesPieChartComponent,
    SubjectPercentChartComponent
  ],
  providers: [NewsService],
})
export class StudentModule { }
