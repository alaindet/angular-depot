import { Component, HostListener, Input } from '@angular/core';

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
  @Input() rowIndex: number = 0;

  @HostListener('click')
  onClick(): void {
    const { name, rowIndex } = this;
    const event = { name, rowIndex };
    this.tableService.triggerRowAction(event);
  }
}
