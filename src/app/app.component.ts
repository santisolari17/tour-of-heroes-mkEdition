import { Hero } from './hero';
import { Component } from '@angular/core';

const HEROES: Hero[] = [
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
]; // The hero data is separated from the class implementation because ultimately the hero names will come from a data service.

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'There is no knowledge that is no power';
  selectedHero: Hero;
  heroes = HEROES;

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
