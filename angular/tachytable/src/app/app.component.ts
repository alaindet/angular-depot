import { Component } from '@angular/core';

import { TABLE } from './mocks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  TABLE = TABLE;
}
