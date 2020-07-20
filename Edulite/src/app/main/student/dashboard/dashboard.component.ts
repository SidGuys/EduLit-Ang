import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'dashboard',
	templateUrl: 'dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

	iconOptions = {
		width: '100%',
		height: '100%',
		fill: 'inherit',
		animation: {
			type: 'zoom',
			hover: true,
			infinite: false
		}
	}

	ngOnInit() { }
}