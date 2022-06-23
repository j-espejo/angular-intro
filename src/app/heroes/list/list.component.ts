import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {
  heroes: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'Captain America',
  ];

  heroDeleted: string = '';

  deleteHero() {
    this.heroDeleted = this.heroes.shift() || '';
  }
}
