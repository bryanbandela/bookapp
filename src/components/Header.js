import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

export default function Header() {
  const { books } = useContext(BookContext);
  console.log(books);
  return (
    <div className="header">
      <h2>Bryan's favourite books</h2>
      <p>
        Currently you have {books.length} {books.length <= 1 ? 'book' : 'books'}{' '}
        to display
      </p>
    </div>
  );
}
