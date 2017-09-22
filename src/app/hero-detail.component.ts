import { Component, Input } from '@angular/core';
import { Hero } from './hero';

@Component({
    selector: 'hero-detail',
    template: `
    <div *ngIf="hero">
        <h2>{{ hero.name }} Wins!</h2>
        <p>Kombatant #{{ hero.id }}</p>
        <h3>Change Kombatant name:</h3>
        <label>name: </label>
        <input [(ngModel)]="hero.name" placeholder="name">
    </div>`
})
export class HeroDetailComponent {
    @Input() hero: Hero;
}