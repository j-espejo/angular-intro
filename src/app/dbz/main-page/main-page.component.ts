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
  newCharacter: ICharacter = {
    name: 'Trucks',
    power: 14000,
  };

  addSubmit() {
    console.log(this.newCharacter);
  }
}
