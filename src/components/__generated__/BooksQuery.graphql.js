/**
 * @generated SignedSource<<feee8d500076265caf55fd2e0443cc78>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Book",
    "kind": "LinkedField",
    "name": "books",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "authorId",
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
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "BooksQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "0c7319f93fcf1f1cdeaf3002ded8cfee",
    "id": null,
    "metadata": {},
    "name": "BooksQuery",
    "operationKind": "query",
    "text": "query BooksQuery {\n  books {\n    name\n    authorId\n  }\n}\n"
  }
};
})();

node.hash = "75147addc21e04a8a50c6374d9109281";

module.exports = node;
