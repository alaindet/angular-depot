import { StaticContextData } from 'src/app/shared';
import { Book } from '../types';

export function createBook(
  data: StaticContextData,
  name: string,
): StaticContextData {
  const id = (new Date()).valueOf();
  const curentBook = { id, name } as Book;
  const books = [...data.books, curentBook]
  const notification = `Created book "${name}"`;
  return { ...data, books, notification };
}

export function selectBook(
  data: StaticContextData,
  id: Book['id'],
): StaticContextData {
  const bookResults = data.books.filter((aBook: Book) => aBook.id === id);
  const curentBook = bookResults.length ? bookResults[0] : null;
  const notification = `Selected book #${id}`;
  return { ...data, curentBook, notification };
}

export function deselectBook(data: StaticContextData): StaticContextData {
  const curentBook = null;
  const notification = 'Deselected book';
  return { ...data, curentBook, notification };
}

export function updateBook(
  data: StaticContextData,
  book: Book
): StaticContextData {
  const books = data.books
    .map((aBook: Book) => aBook.id === book.id ? book : aBook)
  const notification = `Updated book #${book.id}`;
  return { ...data, books, notification };
}

export function deleteBook(
  data: StaticContextData,
  id: Book['id'],
): StaticContextData {
  const books = data.books.filter((aBook: Book) => aBook.id !== id);
  const notification = `Deleted book #${id}`;
  return { ...data, books, notification };
}
