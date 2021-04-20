import { Component, OnInit } from '@angular/core';

import { StaticContextService } from 'src/app/shared/services/context';
import { Book } from '../../types';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {

  books: Book[] = [];

  constructor(
    private context: StaticContextService,
  ) {}

  ngOnInit(): void {
    this.books = this.context.getData('books');
  }
}
