/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchFromIdQueryVariables = {
    searchId: string;
};
export type SearchFromIdQueryResponse = {
    readonly node: ({
        readonly __typename: "Search";
        readonly " $fragmentRefs": FragmentRefs<"SearchFromId_SearchRootFromFragment_search">;
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
      ...SearchFromId_SearchRootFromFragment_search
    }
    id
  }
}

fragment SearchFromId_SearchRootFromFragment_search on Search {
  ...useSearchArguments_search
}

fragment useSearchArguments_search on Search {
  scope {
    cities
    query
    specialities
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
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "SearchFromId_SearchRootFromFragment_search"
              }
            ],
            "type": "Search",
            "abstractKey": null
          }
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
          {
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
                    "name": "cities",
                    "storageKey": null
                  },
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
                    "name": "specialities",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "type": "Search",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e5081a23653b676325ea254a802c2490",
    "id": null,
    "metadata": {},
    "name": "SearchFromIdQuery",
    "operationKind": "query",
    "text": "query SearchFromIdQuery(\n  $searchId: ID!\n) {\n  node(id: $searchId) {\n    __typename\n    ... on Search {\n      ...SearchFromId_SearchRootFromFragment_search\n    }\n    id\n  }\n}\n\nfragment SearchFromId_SearchRootFromFragment_search on Search {\n  ...useSearchArguments_search\n}\n\nfragment useSearchArguments_search on Search {\n  scope {\n    cities\n    query\n    specialities\n  }\n}\n"
  }
};
})();
(node as any).hash = '7b3d0413d9d6e781f5166e75f7b6d2df';
export default node;
