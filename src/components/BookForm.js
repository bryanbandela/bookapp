import React, { useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import { v4 as uuid } from 'uuid';
import BookDetails from './BookDetails';

function BookForm() {
  const { books, dispatch } = useContext(BookContext);
  const [author, setAuthor] = useState('');
  const [book, setBook] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_BOOK', author: author, book: book, id: uuid() });
    setAuthor('');
    setBook('');
  };

  return (
    <div className="form">
      <ul>
        {books.map((book) => {
          return (
            <BookDetails
              key={book.id}
              author={book.author}
              book={book.book}
              id={book.id}
            />
          );
        })}
      </ul>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author's name"
        ></input>
        <input
          name="book"
          value={book}
          onChange={(e) => setBook(e.target.value)}
          placeholder="Book"
        ></input>
        <button>Add book</button>
      </form>
    </div>
  );
}

export default BookForm;
