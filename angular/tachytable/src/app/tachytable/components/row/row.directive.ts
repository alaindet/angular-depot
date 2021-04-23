import { Directive, ContentChildren, Input, TemplateRef, QueryList, Output, EventEmitter, HostListener } from '@angular/core';

import { TachyTableActionComponent } from '../action/action.component';

@Directive({
  selector: '[tacTableRow]',
})
export class TachyTableRowComponent {

  @Input() withActions: TemplateRef<any> | null = null;

  // @ContentChildren(TachyTableActionComponent, { descendants: true })
  // set actionsSetter(actions: QueryList<TachyTableActionComponent>) {
  //   console.log('actionsSetter', actions.length);
  //   this.actions = actions;
  // }

  // private actions: QueryList<TachyTableActionComponent> | null = null;
  // private actionsQueried = false;

  // ngOnInit(): void {
  //   setTimeout(() => {
  //     console.log('this.actions?.length', this.actions?.length)
  //   }, 2000);
  // }

  ngAfterContentChecked(): void {

    // if (!this.withActions) {
    //   return;
    // }

    // if (this.actionsQueried) {
    //   return;
    // }

    // console.log('this.withActions', this.withActions);
    // console.log('actions', this.actions?.length);

    // if (this.actions?.length === 0) {
    //   return;
    // }

    // this.actionsQueried = true;
    // if (this.actions) {
    //   this.subToActions(this.actions);
    // }
  }

  @HostListener('click', ['$event'])
  onClick(event: any): void {
    const target = event.currentTarget;
    const isThatAnAction = event.currentTarget.classList.contains('tac-table-action')
    console.log('click isThatAnAction', isThatAnAction, target);
  }

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
