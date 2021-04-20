import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent } from './books.component';
import { BooksFormComponent } from './components/books-form/books-form.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  {
    path: '',
    component: BooksComponent,
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    BooksComponent,
    BooksFormComponent,
    BooksListComponent,
  ],
})
export class BooksFeatureModule {}
