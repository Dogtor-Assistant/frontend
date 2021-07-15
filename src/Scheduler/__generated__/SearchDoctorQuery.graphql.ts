/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type SearchDoctorQueryVariables = {
    query: string;
};
export type SearchDoctorQueryResponse = {
    readonly search: {
        readonly results: {
            readonly edges: ReadonlyArray<{
                readonly node: {
                    readonly id: string;
                    readonly services: ReadonlyArray<{
                        readonly id: string;
                        readonly name: string;
                    }>;
                } | null;
            } | null> | null;
        };
    };
};
export type SearchDoctorQuery = {
    readonly response: SearchDoctorQueryResponse;
    readonly variables: SearchDoctorQueryVariables;
};



/*
query SearchDoctorQuery(
  $query: String!
) {
  search(query: $query) {
    results {
      edges {
        node {
          id
          services {
            id
            name
          }
        }
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
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
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
            (v2/*: any*/),
            {
              "alias": null,
              "args": null,
              "concreteType": "Service",
              "kind": "LinkedField",
              "name": "services",
              "plural": true,
              "selections": [
                (v2/*: any*/),
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
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchDoctorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
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
    "name": "SearchDoctorQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "01f94c50e6298f33b0266c430d413ce7",
    "id": null,
    "metadata": {},
    "name": "SearchDoctorQuery",
    "operationKind": "query",
    "text": "query SearchDoctorQuery(\n  $query: String!\n) {\n  search(query: $query) {\n    results {\n      edges {\n        node {\n          id\n          services {\n            id\n            name\n          }\n        }\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '7943edd5227b00e311af050710794c70';
export default node;
