/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SearchFromIdQueryVariables = {
    searchId: string;
};
export type SearchFromIdQueryResponse = {
    readonly node: ({
        readonly __typename: "Search";
        readonly scope: {
            readonly query: string | null;
            readonly cities: ReadonlyArray<string> | null;
            readonly specialities: ReadonlyArray<string> | null;
        };
    } | {
        /*This will never be '%other', but we need some
        value in case none of the concrete values match.*/
        readonly __typename: "%other";
    }) | null;
};
export type SearchFromIdQuery = {
    readonly response: SearchFromIdQueryResponse;
    readonly variables: SearchFromIdQueryVariables;
};



/*
query SearchFromIdQuery(
  $searchId: ID!
) {
  node(id: $searchId) {
    __typename
    ... on Search {
      scope {
        query
        cities
        specialities
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "searchId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "searchId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchScope",
      "kind": "LinkedField",
      "name": "scope",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "query",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "specialities",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Search",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchFromIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchFromIdQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e1a20239223e8d8ee8fb85d0710eb453",
    "id": null,
    "metadata": {},
    "name": "SearchFromIdQuery",
    "operationKind": "query",
    "text": "query SearchFromIdQuery(\n  $searchId: ID!\n) {\n  node(id: $searchId) {\n    __typename\n    ... on Search {\n      scope {\n        query\n        cities\n        specialities\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '026b056916bb33214b244035215c6802';
export default node;
