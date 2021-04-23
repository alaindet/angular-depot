import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

import { TachyTableRowActionEvent } from '../types';

@Injectable()
export class TachyTableService {

  private rowAction$ = new Subject<TachyTableRowActionEvent>();

  get rowAction(): Observable<TachyTableRowActionEvent> {
    return this.rowAction$.asObservable();
  }

  triggerRowAction(event: TachyTableRowActionEvent): void {
    this.rowAction$.next(event);
  }
}
