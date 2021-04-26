import { Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'tac-table-actions',
  template: `
    <ng-container
      [ngTemplateOutlet]="actions ? actions : defaultActionsRef"
      [ngTemplateOutletContext]="{
        row: row,
        rowIndex: rowIndex
      }"
    ></ng-container>
    <ng-template #defaultActionsRef>No actions</ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableActionsComponent {

  @Input() actions?: TemplateRef<any>;
  @Input() rowIndex: number = 0;
  @Input() row?: any;
}
