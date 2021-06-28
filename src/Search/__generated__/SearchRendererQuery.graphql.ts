/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchRendererQueryVariables = {
    query?: string | null;
    cities?: Array<string> | null;
    specialities?: Array<string> | null;
};
export type SearchRendererQueryResponse = {
    readonly search: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"SearchResultsContainer_search">;
    };
};
export type SearchRendererQuery = {
    readonly response: SearchRendererQueryResponse;
    readonly variables: SearchRendererQueryVariables;
};



/*
query SearchRendererQuery(
  $query: String
  $cities: [String!]
  $specialities: [String!]
) {
  search(query: $query, cities: $cities, specialities: $specialities) {
    id
    ...SearchResultsContainer_search
  }
}

fragment DoctorResultRow_doctor on Doctor {
  firstname
  lastname
  rating
}

fragment SearchResultsContainer_search on Search {
  ...useResultMode_search
  ...SearchResultsList_search
}

fragment SearchResultsList_search on Search {
  results(first: 20) {
    edges {
      node {
        ...DoctorResultRow_doctor
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment useResultMode_search on Search {
  suggestions {
    specialities
    cities
  }
  firstResult: results(first: 1) {
    edges {
      __typename
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cities"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "specialities"
},
v3 = [
  {
    "kind": "Variable",
    "name": "cities",
    "variableName": "cities"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "specialities",
    "variableName": "specialities"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v6 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchResultsContainer_search"
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SearchRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchSuggestions",
            "kind": "LinkedField",
            "name": "suggestions",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "specialities",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cities",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": "firstResult",
            "args": [
              {
                "kind": "Literal",
                "name": "first",
                "value": 1
              }
            ],
            "concreteType": "DoctorsConnection",
            "kind": "LinkedField",
            "name": "results",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DoctorEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  (v5/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "results(first:1)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "concreteType": "DoctorsConnection",
            "kind": "LinkedField",
            "name": "results",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "DoctorEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Doctor",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "firstname",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "lastname",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rating",
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "cursor",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "PageInfo",
                "kind": "LinkedField",
                "name": "pageInfo",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "endCursor",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "hasNextPage",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "results(first:20)"
          },
          {
            "alias": null,
            "args": (v6/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "SearchResultsList_search_results",
            "kind": "LinkedHandle",
            "name": "results"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f77c48920233e1402e3e3f0804b8df5e",
    "id": null,
    "metadata": {},
    "name": "SearchRendererQuery",
    "operationKind": "query",
    "text": "query SearchRendererQuery(\n  $query: String\n  $cities: [String!]\n  $specialities: [String!]\n) {\n  search(query: $query, cities: $cities, specialities: $specialities) {\n    id\n    ...SearchResultsContainer_search\n  }\n}\n\nfragment DoctorResultRow_doctor on Doctor {\n  firstname\n  lastname\n  rating\n}\n\nfragment SearchResultsContainer_search on Search {\n  ...useResultMode_search\n  ...SearchResultsList_search\n}\n\nfragment SearchResultsList_search on Search {\n  results(first: 20) {\n    edges {\n      node {\n        ...DoctorResultRow_doctor\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment useResultMode_search on Search {\n  suggestions {\n    specialities\n    cities\n  }\n  firstResult: results(first: 1) {\n    edges {\n      __typename\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '25e0626549cac1093aef903e1c5c34cd';
export default node;
