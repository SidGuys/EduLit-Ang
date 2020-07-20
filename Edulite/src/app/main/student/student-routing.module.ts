import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { GradesComponent } from './grades/grades.component';
import { HomeworkComponent } from './homework/homework.component';
import { NoticeboardComponent } from './noticeboard/noticeboard.component';
import { NotFoundComponent } from '../shared/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        component: ScheduleComponent,
        path: 'schedule',
      },
      {
        component: GradesComponent,
        path: 'grades',
      },
      {
        component: HomeworkComponent,
        path: 'homework',
      },
      {
        component: NoticeboardComponent,
        path: 'noticeboard',
      },
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: '**',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
