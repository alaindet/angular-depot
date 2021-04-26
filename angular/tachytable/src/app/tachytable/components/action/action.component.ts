import { Component, HostListener, Input, Output, ViewEncapsulation, EventEmitter } from '@angular/core';

import { TachyTableActionEvent } from '../../types';

@Component({
  selector: 'tac-table-action',
  template: `<ng-content></ng-content>`,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableActionComponent {

  @Input() name: string = '';
  @Input() rowIndex: number = -1;

  @Output()
  clicked = new EventEmitter<TachyTableActionEvent>();

  @HostListener('click')
  onClick(): void {
    const { name, rowIndex } = this;
    const event = { name, rowIndex };
    this.clicked.emit(event);
  }
}
