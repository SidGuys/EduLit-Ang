import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'grades',
	templateUrl: 'grades.component.html',
	styleUrls: ['./grades.component.scss']
})
export class GradesComponent implements OnInit, OnDestroy {

	exams = [
		{
			id: 'exam1',
			Title: 'Internal 1'
		},
		{
			id: 'exam2',
			Title: 'Internal 2'
		}
	];

	subjects = [
		{
			subjectId: 'sanskrit',
			subjectName: 'Sanskrit'
		},
		{
			subjectId: 'hindi',
			subjectName: 'Hindi'
		},
		{
			subjectId: 'english',
			subjectName: 'English'
		},
		{
			subjectId: 'maths',
			subjectName: 'Mathematics'
		},
		{
			subjectId: 'science',
			subjectName: 'Science'
		},
		{
			subjectId: 'social',
			subjectName: 'Social Studies'
		}
	];

	grades = [
		{
			examid: 'exam1',
			examgrades: [
				{
					subjectId: 'sanskrit',
					marks: 91,
					outof: 100
				},
				{
					subjectId: 'hindi',
					marks: 94,
					outof: 100
				},
				{
					subjectId: 'english',
					marks: 92,
					outof: 100
				},
				{
					subjectId: 'maths',
					marks: 98,
					outof: 100
				},
				{
					subjectId: 'science',
					marks: 95,
					outof: 100
				},
				{
					subjectId: 'social',
					marks: 90,
					outof: 100
				}
			]
		},
		{
			examid: 'exam2',
			examgrades: [
				{
					subjectId: 'sanskrit',
					marks: 88,
					outof: 100
				},
				{
					subjectId: 'hindi',
					marks: 89,
					outof: 100
				},
				{
					subjectId: 'english',
					marks: 85,
					outof: 100
				},
				{
					subjectId: 'maths',
					marks: 89,
					outof: 100
				},
				{
					subjectId: 'science',
					marks: 92,
					outof: 100
				},
				{
					subjectId: 'social',
					marks: 90,
					outof: 100
				}
			]
		}
	];

	private alive = true;

	selectedExamId: string = '';
	selectedExamName: string = '';
	selectedExamGrades: any[] = [];

	currentTheme: string;
	
	constructor(private themeService: NbThemeService) {
    this.themeService.getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe(theme => {
        this.currentTheme = theme.name;
      });
	}
	
	ngOnInit() {
		this.selectedExamId = this.exams[0].id;
		this.selectedExamName = this.exams[0].Title;
		this.showGrades(this.selectedExamId);
	}

	trackByDate(_, item) {
    return item.date;
  }
	
	showGrades(examId) {
		this.selectedExamGrades = [];
		this.selectedExamId = examId;
		this.selectedExamName = this.exams.find(x => x.id == examId).Title;
		this.grades.find(x => x.examid == examId).examgrades.forEach(y => {
			this.selectedExamGrades.push({
				subject: this.subjects.find(s => s.subjectId === y.subjectId).subjectName,
				marksAchieved: y.marks,
				marksOutof: y.outof,
				marksPercent: Math.round((y.marks / y.outof) * 100)
			})
		});
		this.selectedExamGrades = JSON.parse(JSON.stringify(this.selectedExamGrades));
	}

  ngOnDestroy() {
    this.alive = false;
  }
}
