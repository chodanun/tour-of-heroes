import { Component , OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-heroes',
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css'],
  styleUrls: [ './heroes.component.css' ],
  templateUrl: './heroes.component.html',
})

// <hero-detail [hero]="selectedHero"></hero-detail>

export class HeroesComponent implements OnInit {
	title = 'Tour Of Heroes';

	heroes: Hero[];
	selectedHero: Hero;

	constructor(
		private router: Router,
		private heroService: HeroService) { }
	
	getHeroes(): void {
		this.heroService.getHeroes().then(heroes => this.heroes = heroes);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	ngOnInit(): void {
		this.getHeroes();
	}
	gotoDetail(): void {
	  this.router.navigate(['/detail', this.selectedHero.id]);
	}

}





