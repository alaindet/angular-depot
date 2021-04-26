import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    components.TachyTableComponent,
    components.TachyTableHeaderComponent,
    components.TachyTableCellComponent,
    components.TachyTableActionComponent,
    components.TachyTableActionsComponent,
  ],
  exports: [
    components.TachyTableComponent,
    components.TachyTableActionComponent,
  ],
})
export class TachyTableModule {}
