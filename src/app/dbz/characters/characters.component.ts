import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  // decorator properties, vienen desde el componente padre main-page
  @Input() characters: ICharacter[] = [];
}
