import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ICharacter } from '../interfaces/dbz.interface';

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

  //EventEmitter al componente Padre 'main-page.components.ts'
  @Output() onNewCharacter: EventEmitter<ICharacter> = new EventEmitter();

  addSubmit() {
    if (this.newCharacter.name.trim().length === 0) {
      return;
    }
    // Emitimos evento
    this.onNewCharacter.emit(this.newCharacter);

    this.newCharacter = {
      name: '',
      power: 0,
    };
  }
}
