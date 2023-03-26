/** @format */
const express = require("express");
const expressGraphQL = require("express-graphql").graphqlHTTP;

const cors = require("cors")
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLNonNull,
} = require("graphql");
const port = 8080;
const app = express();
app.use(
cors()
)
const authors = [
  { id: 1, name: "J. K. Rowling" },
  { id: 2, name: "J. R. R. Tolkien" },
  { id: 3, name: "Brent Weeks" },
];

const books = [
  { id: 1, name: "Harry Potter and the Chamber of Secrets", authorId: 1 },
  { id: 2, name: "Arun Harry Potter and the Prisoner of Azkaban", authorId: 1 },
  { id: 3, name: "Harry Potter and the Goblet of Fire", authorId: 1 },
  { id: 4, name: "The Fellowship of the Ring", authorId: 2 },
  { id: 5, name: "The Two Towers", authorId: 2 },
  { id: 6, name: "The Return of the King", authorId: 2 },
  { id: 7, name: "The Way of Shadows", authorId: 3 },
  { id: 8, name: "Beyond the Shadows", authorId: 3 },
];

const AuthorType = new GraphQLObjectType({
  name: "Author",
  description: "This is the a Author List",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    books: {
      type: new GraphQLList(BookType),
      resolve: (author) => {
        return books.filter((book) => author.id === book.authorId);
      },
    },
  }),
});

const BookType = new GraphQLObjectType({
  name: "Book",
  description: "This is the book List",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    authorId: { type: new GraphQLNonNull(GraphQLInt) },
    authors: {
      type: AuthorType,
      resolve: (book) => {
        return authors.find((author) => author.id === book.authorId);
      },
    },
  }),
});

const RootQueryType = new GraphQLObjectType({
  name: "Query",
  description: "This is a Simple GraphQL Demo",
  fields: () => ({
    book: {
      type: BookType,
      description: "it returns single book",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) => books.find((book) => book.id === args.id),
    },
    author: {
      type: AuthorType,
      description: "it returns single Author",
      args: {
        id: { type: GraphQLInt },
      },
      resolve: (parent, args) =>
        authors.find((author) => author.id === args.id),
    },

    books: {
      type: new GraphQLList(BookType),
      description: "List of books",
      resolve: () => books,
    },
    authors: {
      type: new GraphQLList(AuthorType),
      description: "List of Authors",
      resolve: () => authors,
    },
  }),
});
const RootMutationType = new GraphQLObjectType({
  name: "Mutation",
  description: "This is do Mutation",
  fields: () => ({
    AddNewBook: {
      type: BookType,
      description: "Add new book",
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        authorId: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        const book = {
          id: books.id + 1,
          name: args.name,
          authorId: args.authorId,
        };
        books.push(book);
        return books;
      },
    },

    RemoveABook: {
      type: BookType,
      description: "Delete a book",
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        let id = args.id;
        console.log("🚀 ~ file: server.js:129 ~ id:", id);
        books.splice(id - 1, 1);
        return books;
      },
    },
    AddAuthor: {
      type: AuthorType,
      description: "ADD A author from the List",
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
        name: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve: (parent, args) => {
        let author = {
          id: args.id,
          name: args.name,
        };
        authors.push(author);
        return authors;
      },
    },
    DeleteAAuthor: {
      type: AuthorType,
      description: "Remove the author from the List",
      args: {
        id: { type: new GraphQLNonNull(GraphQLInt) },
      },
      resolve: (parent, args) => {
        authors.splice(args.id-1, 1);
        return authors;
      },
    },
  }),
});

const schema = new GraphQLSchema({
  query: RootQueryType,
  mutation:RootMutationType,
});
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: "Hello",
//     fields: () => ({
// 		message: {
// 			type: GraphQLString ,
//            resolve: () => "hello world",
// 		}
//     }),
//   }),
// });

app.use(
  "/graphql",
  expressGraphQL({
    graphiql: true,
    schema: schema,
  })
);
app.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
});
module.exports = app;
