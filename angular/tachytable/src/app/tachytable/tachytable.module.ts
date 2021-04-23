import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    components.TachyTableComponent,
    components.TachyTableActionComponent,
    components.TachyTableRowComponent,
  ],
  exports: [
    components.TachyTableComponent,
    components.TachyTableActionComponent,
    components.TachyTableRowComponent,
  ],
})
export class TachyTableModule {}
