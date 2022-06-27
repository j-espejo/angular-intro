import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  @Input() characters: ICharacter[] = [];

  @Input() newCharacter: ICharacter = {
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
    console.log(this.characters);
  }
}
