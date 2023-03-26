import React from 'react'
import { RelayEnvironment } from "../RelayEnvironment";
import graphql from "babel-plugin-relay/macro";
// import { graphql } from "relay-runtime";
const query = graphql`
  query {
    authors {
      id
      name
      books {
        id
        name
      }
    }
  }
`;
RelayEnvironment.fetchQuery().then((data) => {
  console.log(data);
});

const Books = () => {
  return (
	<div>Books</div>
  )
}

export default Books
