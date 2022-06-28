import { Component, Input } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
})
export class AddComponent {
  // Recibimos newCharacter del componente Padre 'main-page.components.ts'
  @Input() newCharacter: ICharacter = {
    name: '',
    power: 0,
  };

  constructor(private dbzService: DbzService) {}

  addSubmit() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    // Service addCharacter
    this.dbzService.addCharacter(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
