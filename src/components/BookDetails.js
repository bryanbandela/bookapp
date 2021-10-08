import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';

function BookDetails({ author, book, id }) {
  const { dispatch } = useContext(BookContext);
  const clickHandle = (e) => {
    dispatch({ type: 'REMOVE_BOOK', id: id });
  };

  return (
    <li onClick={clickHandle}>
      <p>
        {book} by <br />
        {author}
      </p>
    </li>
  );
}

export default BookDetails;
