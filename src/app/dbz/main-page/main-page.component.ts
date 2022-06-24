import { Component } from '@angular/core';

interface ICharacter {
  name: string;
  power: number;
}

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
    name: '',
    power: 0,
  };

  addSubmit() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    console.log(this.newCharacter);

    //TODO: add characters
    this.characters.push(this.newCharacter);
    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
