// /** @format */

import React from "react";
import { useQuery } from "relay-hooks";
import graphql from "babel-plugin-relay/macro";
import BookList from "./BookList";

const Books = () => {
  const { data, error } = useQuery(
    graphql`
      query BooksQuery {
        books {
          name
          authorId
          authors {
            name
          }
        }
      }
    `
  );
    console.log("🚀 ~ file: Books.js:9 ~ Books ~ data:", data);
    // console.log("🚀 ~ file: Books.js:9 ~ Books ~ error:", error);
    
  if (error) {
    return <div>Error</div>;
  }

  if (!data) {
    return <div>Loading</div>;
  }
  return (
    <div>
    
      <BookList data={data} />
    </div>
  );
};

export default Books;
