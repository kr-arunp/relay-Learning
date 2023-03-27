/**
 * @generated SignedSource<<54fd029d053ae6819e7a06880d3dc9c6>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "books",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "authorId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Author",
        "kind": "LinkedField",
        "name": "authors",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "BooksQuery",
    "selections": (v1/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BooksQuery",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "46c844080d14fa3527bf589dd49cb3ac",
    "id": null,
    "metadata": {},
    "name": "BooksQuery",
    "operationKind": "query",
    "text": "query BooksQuery {\n  books {\n    name\n    authorId\n    authors {\n      name\n    }\n  }\n}\n"
  }
};
})();

node.hash = "395565fe36f9d50ef08a7c276bf73de8";

module.exports = node;
