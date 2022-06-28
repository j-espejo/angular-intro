import { Component } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  // arrays of characters
  characters: ICharacter[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  newCharacter: ICharacter = {
    name: 'Krillin',
    power: 3000,
  };

  addNewCharacter(arg: ICharacter) {
    this.characters.push(arg);
  }

  // injection dependencies inicialization
  constructor(private dbzService: DbzService) {}
}
