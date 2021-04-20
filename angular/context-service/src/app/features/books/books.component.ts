import { Component, OnInit } from '@angular/core';

import { StaticContextService } from 'src/app/shared/services/context/static-context.service';
import { StaticContextData } from 'src/app/shared/services/context/types';
import { createBook, selectBook, deselectBook, updateBook, deleteBook } from './handlers';
import { BookAction } from './action';
import { Book } from './types';

@Component({
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [StaticContextService],
})
export class BooksComponent implements OnInit {

  initialData: StaticContextData = {
    notification: null,
    curentBook: null,
    books: [],
  };

  constructor(
    private context: StaticContextService,
  ) {}

  ngOnInit(): void {
    this.initContext();
  }

  onCreateBook(name: string): void {
    this.context.runReducer(BookAction.CreateBook, name);
  }

  onSelectBook(id: Book['id']): void {
    this.context.runReducer(BookAction.SelectBook, id);
  }

  onDeselectBook(): void {
    this.context.runReducer(BookAction.DeselectBook);
  }

  onUpdateBook(book: Book): void {
    this.context.runReducer(BookAction.UpdateBook, book);
  }

  onDeleteBook(id: Book['id']): void {
    this.context.runReducer(BookAction.DeleteBook, id);
  }

  initContext(): void {
    this.context.initData(this.initialData);
    this.context.setReducer(BookAction.CreateBook, createBook);
    this.context.setReducer(BookAction.SelectBook, selectBook);
    this.context.setReducer(BookAction.DeselectBook, deselectBook);
    this.context.setReducer(BookAction.UpdateBook, updateBook);
    this.context.setReducer(BookAction.DeleteBook, deleteBook);
  }
}
