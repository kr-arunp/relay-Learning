/** @format */

import React from "react";
/*
The ``useLazyLoadQuery`` hook fetches and returns the data. It takes two arguments:
The GraphQL query that we defined before.
Variables that are passed to the server with the query. This query doesn’t declare any variables, so it’s an empty object.
The object that useLazyLoadQuery returns has the same shape as the query.
*/
import graphql from "babel-plugin-relay/macro";
import { useLazyLoadQuery } from "react-relay";
const AuthorsDataQuery = graphql`
  query AuthorsDataQuery {
      authors {
        name
      }
  }
`;
const AuthorsData = () => {
  const data = useLazyLoadQuery(AuthorsDataQuery, {});
  console.log("🚀 ~ file: AuthorsData.js:20 ~ AuthorsData ~ data:", data);
  return <div>AuthorsData</div>;
};

export default AuthorsData;
