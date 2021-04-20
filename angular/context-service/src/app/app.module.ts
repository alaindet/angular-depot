import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'books',
  },
  {
    path: 'books',
    loadChildren: () => import('./features/books/books.module')
      .then(m => m.BooksFeatureModule),
  },
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
