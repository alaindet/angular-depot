import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tac-table-action',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableActionComponent {

  @Input() name: string = '';
}
