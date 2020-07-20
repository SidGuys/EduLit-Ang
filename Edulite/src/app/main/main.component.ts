import { Component, OnInit } from '@angular/core';

import { MENU_ITEMS } from './main-menus';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'ngx-main',
	templateUrl: 'main.component.html',
	styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
	menu = MENU_ITEMS;

	constructor(private activatedRoute: ActivatedRoute) {
		
	}

	ngOnInit() { 
		console.log('this.activatedRoute.params => ', this.activatedRoute.url);
		console.log('this.activatedRoute.params => ', this.activatedRoute.params);
		console.log('menu => ', this.menu);
	}
}