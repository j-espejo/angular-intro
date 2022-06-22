import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title: string = 'Contador App';
  num: number = 10;
  base: number = 5;

  acct(value: number) {
    this.num += value;
  }
}
