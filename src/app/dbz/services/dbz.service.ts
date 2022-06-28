import { Injectable } from '@angular/core';

//clase Abstract: singletons
@Injectable()
export class DbzService {
  constructor() {
    console.log('Service initialized');
  }
}
