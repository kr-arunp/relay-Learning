/** @format */

import React from "react";
import "../style/BookList.css";

const BookList = ( {data} ) => {
  return (
    <div className="book-list">
      {data.books.map((book) => (
        <div key={book.name} className="book-card">
          <h2 className="book-title"> Book Name:{book.name}</h2>
          <p className="book-author"> Author Id:{book.authorId}</p>
        </div>  
      ))}
    </div>
  );
};

export default BookList;
