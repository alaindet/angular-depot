import { Component, ContentChildren, Input, QueryList, TemplateRef, ViewEncapsulation } from '@angular/core';

import { TachyTableActionComponent } from '../action/action.component';

@Component({
  selector: 'tac-table-actions',
  template: `
    <ng-container
      [ngTemplateOutlet]="actions ? actions : defaultRef"
    ></ng-container>
    <ng-template #defaultRef>
      No actions
    </ng-template>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableActionsComponent {

  @Input() actions?: TemplateRef<any>;
  @Input() rowIndex: number = 0;

  @ContentChildren(TachyTableActionComponent, { descendants: true })
  actionComponents?: QueryList<TachyTableActionComponent>;

  ngAfterContentInit(): void {
    console.log('actions count', this.actionComponents?.length);

    this.actionComponents?.changes.subscribe(() => {
      console.log('changed actions count', this.actionComponents?.length);
    });
  }
}
