import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {
  //Access DbzService getCharacters
  get characters(): ICharacter[] {
    return this.dbzService.getCharacters;
  }

  constructor(private dbzService: DbzService) {}
}
