/**
 * @generated SignedSource<<9e97ebf9d1ab15affe84ebf40bfd85c5>>
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
    "concreteType": "Author",
    "kind": "LinkedField",
    "name": "authors",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
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
    "name": "AuthorsDataQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AuthorsDataQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "4276e47a3ad91aa32fc5bc87c3b19d83",
    "id": null,
    "metadata": {},
    "name": "AuthorsDataQuery",
    "operationKind": "query",
    "text": "query AuthorsDataQuery {\n  authors {\n    name\n  }\n}\n"
  }
};
})();

node.hash = "5ebd7e44e3625a7d1563958c6a563a84";

module.exports = node;
