import { Component, Input, OnInit, TemplateRef } from '@angular/core';

export interface CssRules {
  [rule: string]: string;
}

@Component({
  selector: 'tac-table',
  styles: [`
    .table {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      border-top: 1px solid #aaa;
      border-right: 1px solid #aaa;
    }
    .table-item {
      padding: 0.5rem;
      border-left: 1px solid #aaa;
      border-bottom: 1px solid #aaa;
    }
    .even {
      background-color: #eee;
    }
    .header {
      font-weight: bold;
    }

    @media only screen and (max-width: 768px) {
      .table {
        grid-template-columns: 1fr !important;
        border: none;
      }
      .table-item {
        border: none;
        border-bottom: 1px solid #888;
      }
      .header {
        display: none;
      }
      .even + .odd {
        margin-top: 2rem;
      }
      .odd + .even {
        margin-top: 2rem;
      }
      .cell::before {
        content: attr(data-header);
        font-weight: bold;
      }
    }
  `],
  template: `
    <div class="table" [ngStyle]="tableCss">

      <tac-table-header
        *ngFor="let header of headers"
        [header]="header"
      ></tac-table-header>

      <div *ngIf="actions" class="table-item header">
        Actions
      </div>

      <ng-container *ngFor="
        let row of rows;
        let rowIndex = index;
        let even = even;
      ">
        <tac-table-cell
          *ngFor="let header of headers"
          [header]="header"
          [value]="row[header.key]"
          [rowIndex]="rowIndex"
          [isEven]="even"
        ></tac-table-cell>

        <div *ngIf="actions" class="table-item cell {{ even ? 'even' : 'odd'">
          <tac-table-actions
            [actions]="actions"
            [rowIndex]="rowIndex"
          ></tac-table-actions>
        </div>
      </ng-container>

    </div>
  `,
})
export class TachyTableComponent implements OnInit {

  @Input() headers: any = [];
  @Input() rows: any = [];
  @Input() actions?: TemplateRef<any>;

  tableCss: CssRules = {};

  ngOnInit(): void {
    this.tableCss = this.buildTableCss();
  }

  private buildTableCss(): CssRules {
    const headersCount = this.headers.length + (this.actions ? 1 : 0);
    return {
      'grid-template-columns': `repeat(${headersCount}, 1fr)`,
    };
  }
}
