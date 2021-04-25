import { Component, Input } from '@angular/core';

@Component({
  selector: 'tac-table',
  styles: [`
    .table {
      display: grid;
      /* TODO: Dynamic number of columns */
      grid-template-columns: repeat(8, 1fr);
      border-top: 1px solid #888;
      border-right: 1px solid #888;
    }
    .table-item {
      padding: 0.5rem 0.25rem;
      border-left: 1px solid #888;
      border-bottom: 1px solid #888;
    }
    .header {
      font-weight: bold;
    }
  `],
  template: `
    <div class="table">
      <ng-container *ngFor="let header of headers">
        <div class="table-item header">{{ header.label }}</div>
      </ng-container>
      <ng-container *ngFor="let row of rows; let rowIndex = index">
        <ng-container *ngFor="let header of headers">
          <div
            class="table-item cell"
            attr.data-row="{{ rowIndex }}"
            attr.data-header="{{ header.label }}"
          >
            {{ row[header.key] }}
          </div>
        </ng-container>
      </ng-container>
    </div>
  `,
})
export class TachyTableComponent {

  @Input() headers: any = [];
  @Input() rows: any = [];
}
