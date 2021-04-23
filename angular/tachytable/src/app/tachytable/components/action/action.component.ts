import { Component, HostListener, Output, EventEmitter, Input, HostBinding } from '@angular/core';

import { TachyTableService } from '../../services';

@Component({
  selector: 'tac-table-action',
  template: `<ng-content></ng-content>`,
})
export class TachyTableActionComponent {

  constructor(
    private tableService: TachyTableService,
  ) {}

  @Input() name: string = '';

  @Output() clicked = new EventEmitter<string>();

  @HostBinding('class.tac-table-action')
  targetViaCss = true;

  @HostListener('click')
  onClick(): void {
    this.clicked.emit(this.name);
    this.tableService.actionClicked$.next(this.name);
  }
}
