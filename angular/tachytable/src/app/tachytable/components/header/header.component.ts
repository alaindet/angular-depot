import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tac-table-header',
  host: {
    'class': 'table-item header',
  },
  template: `
    {{ header.label }}
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableHeaderComponent {
  @Input() header: any;
}
