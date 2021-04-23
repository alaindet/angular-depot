import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class TachyTableService {
  actionNameClicked$ = new Subject<string>();
  actionRowIndexClicked$ = new Subject<number>();
}
