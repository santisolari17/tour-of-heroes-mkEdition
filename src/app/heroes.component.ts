import { Component, OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Hero } from './hero';
import { Router, RouterModule } from '@angular/router';

/* const HEROES: Hero[] = [
  {id: 1, name: 'Scorpion'},
  {id: 2, name: 'Sub-Zero'},
  {id: 3, name: 'Raiden'},
  {id: 4, name: 'Liu Kang'},
  {id: 5, name: 'Kano'},
  {id: 6, name: 'Jhonny Cage'},
  {id: 7, name: 'Sonya'},
  {id: 8, name: 'Jax'},
  {id: 9, name: 'Reptile'},
  {id: 10, name: 'Shang Tsung'}
]; // The hero data is separated from the class implementation because ultimately the hero names will come from a data service. */

/* Here's the essential outline for the OnInit interface
import { OnInit } from '@angular/core';

export class AppComponent implements OnInit {
  ngOnInit(): void {
  }
} */

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  providers: [HeroService]
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes: Hero[];

  constructor(
    private heroService: HeroService,
    private router: Router) { }
  /* The constructor itself does nothing.
  The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
  Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.*/

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

}
