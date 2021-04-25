import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import * as components from './components';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    components.TachyTableComponent,
  ],
  exports: [
    components.TachyTableComponent,
  ],
})
export class TachyTableModule {}