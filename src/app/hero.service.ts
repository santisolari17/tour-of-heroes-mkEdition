import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import { Hero } from './hero';


@Injectable()
export class HeroService {

    private heroesUrl = 'http://demo6340910.mockable.io/kombatantsSimple';
    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }

    constructor(private http: Http) { }

    getHeroes(): Promise<Hero[]> {
        return this.http.get(this.heroesUrl).toPromise()
              .then(response => Object.keys(response.json()).map( i => response.json()[i]) as Hero[])
              .catch(this.handleError);
        // return this.http.get(this.heroesUrl).map((res) => res.json());
      }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
          // Simulate server latency with 2 second delay
          setTimeout(() => resolve(this.getHeroes()), 2000);
        });
      }

    getHero(id: number): Promise<Hero> {
      return this.getHeroes()
                  .then(heroes => heroes.find(hero => hero.id === id));
    }
}
