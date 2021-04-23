import { Component, EventEmitter, Input, Output, TemplateRef } from '@angular/core';

import { TachyTableService } from '../../services';
import { TachyTableRowActionEvent } from '../../types';

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
        <tr *ngFor="let row of rows; let rowIndex = index">
          <td *ngFor="let header of headers">
            {{ row[header.key] }}
          </td>
          <td *ngIf="withActions">
            <ng-container
              [ngTemplateOutlet]="withActions"
              [ngTemplateOutletContext]="{
                rowIndex: rowIndex,
                row: row
              }"
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

  @Output() actionClicked = new EventEmitter<TachyTableRowActionEvent>();

  constructor(
    private tableService: TachyTableService,
  ) {}

  ngOnInit(): void {
    this.tableService.rowAction.subscribe(event => {
      console.log('rowAction', event);
    });
  }
}
