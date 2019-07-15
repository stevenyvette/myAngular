import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
	selector: 'app-my-hero',
	templateUrl: './my-hero.component.html',
	styleUrls: ['./my-hero.component.css']
})
export class MyHeroComponent implements OnInit {
	title: string;
	heroes: Array<Hero>;
	myHero: Hero;

	constructor() {
		this.title = 'Tour of Heros';
		this.heroes = [
			new Hero(1, 'Windstorm'),
			new Hero(13, 'Bombasto'),
			new Hero(15, 'Magneta'),
			new Hero(20, 'Tornado')
		];
		this.myHero = this.heroes[0]
	}

	ngOnInit() {
	}

}
