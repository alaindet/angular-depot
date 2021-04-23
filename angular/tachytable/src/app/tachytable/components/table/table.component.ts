import { Component, ContentChildren, Input, TemplateRef, QueryList, Output, EventEmitter } from '@angular/core';

import { TachyTableService } from '../../services';
import { TachyTableActionComponent } from '../action/action.component';

@Component({
  selector: 'tac-table',
  providers: [TachyTableService],
  styles: [`
    table, tr, th, td {
      border: 1px solid #ccc;
    }
  `],
  template: `
    <table>

      <thead>
        <tr>
          <th *ngFor="let header of headers">
            {{ header.label }}
          </th>
          <th *ngIf="withActions">
            Actions
          </th>
        </tr>
      </thead>

      <tbody>
        <tr *ngFor="let row of rows" tacTableRow [withActions]="withActions">
          <td *ngFor="let header of headers">
            {{ row[header.key] }}
          </td>
          <td *ngIf="withActions">
            <ng-container
              [ngTemplateOutlet]="withActions"
            ></ng-container>
          </td>
        </tr>
      </tbody>

      <tfoot>
        <tr>
          <td colspan="100%">
            Table footer
          </td>
        </tr>
      </tfoot>

    </table>
  `,
})
export class TachyTableComponent {

  @Input() headers: any = [];
  @Input() rows: any = [];
  @Input() withActions: TemplateRef<any> | null = null;

  @Output() actionClicked = new EventEmitter<{ name: string; rowIndex: number }>();

  @ContentChildren(TachyTableActionComponent, { descendants: true })
  private actions: QueryList<TachyTableActionComponent> | null = null;

  private actionsQueried = false;

  constructor(

  ) {}

  // ngAfterContentChecked(): void {

  //   if (!this.withActions) {
  //     return;
  //   }

  //   if (this.actionsQueried) {
  //     return;
  //   }

  //   if (this.actions?.length === 0) {
  //     return;
  //   }

  //   this.actionsQueried = true;
  //   if (this.actions) {
  //     this.subToActions(this.actions);
  //   }
  // }

  // private subToActions(actions: QueryList<TachyTableActionComponent>): void {
  //   actions.forEach(
  //     action => action.clicked.subscribe(
  //       name => {
  //         const rowIndex = 1;
  //         const event = { rowIndex, name };
  //         console.log('action clicked', event);
  //       }
  //     )
  //   );
  // }
}
