import { Component, ElementRef, Input, OnInit, Renderer2, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tac-table-cell',
  host: {
    'class': 'table-item cell',
  },
  template: `
    {{ value }}
  `,
  encapsulation: ViewEncapsulation.None,
})
export class TachyTableCellComponent implements OnInit {

  @Input() header?: any;
  @Input() rowIndex: number = 0;
  @Input() isEven: boolean = false;
  @Input() value: any = null;

  constructor(
    private host: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit(): void {
    const host = this.host.nativeElement;
    const parityClass = this.isEven ? 'even' : 'odd';
    this.renderer.setAttribute(host, 'data-header', this.header?.label);
    this.renderer.addClass(host, parityClass);
  }
}
