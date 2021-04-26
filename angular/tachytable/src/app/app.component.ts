import { Component } from '@angular/core';

import { TABLE } from './mocks';
import { TachyTableActionEvent } from './tachytable/types/action-event';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  TABLE = TABLE;

  onActionClicked(event: TachyTableActionEvent): void {
    console.log('onActionClicked', event);
  }
}
