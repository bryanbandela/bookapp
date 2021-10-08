import React from 'react';
import Header from './components/Header';
import BookForm from './components/BookForm';
import BookContextProvider from './context/BookContext';

function App() {
  return (
    <BookContextProvider>
      <div className="App">
        <Header />
        <BookForm />
      </div>
    </BookContextProvider>
  );
}

export default App;
