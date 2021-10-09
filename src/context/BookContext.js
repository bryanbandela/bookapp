import { createContext, useEffect, useReducer } from 'react';
import { bookReducer } from '../reducer/bookReducer';

//We'll use this context (redux-like store) in a component that needs the data
export const BookContext = createContext();

//This provider will wrap our App component
const BookContextProvider = (props) => {
  //the third argument is a function that returns a value and it's used a
  // default value and the 2d argument will get ignored
  const [books, dispatch] = useReducer(bookReducer, [], () => {
    const localData = localStorage.getItem('bryansbook');
    return localData ? JSON.parse(localData) : [];
  });

  // , () => {
  //   const localData = localStorage.getItem('bryansbook');
  //   return localData ? JSON.parse(localData) : [];
  // }

  useEffect(() => {
    localStorage.setItem('bryansbook', JSON.stringify(books));
  }, [books]);
  return (
    <BookContext.Provider value={{ books, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};

export default BookContextProvider;
