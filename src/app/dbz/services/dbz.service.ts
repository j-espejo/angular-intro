import { Injectable } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';

//clase Abstract: singletons
@Injectable()
export class DbzService {
  // arrays of characters, private
  private _characters: ICharacter[] = [
    {
      name: 'Goku',
      power: 15000,
    },
    {
      name: 'Vegeta',
      power: 7500,
    },
  ];

  //Access Getter characters
  get getCharacters(): ICharacter[] {
    return [...this._characters];
  }

  constructor() {}

  //Add character service
  addCharacter(character: ICharacter) {
    this._characters.push(character);
  }
}
