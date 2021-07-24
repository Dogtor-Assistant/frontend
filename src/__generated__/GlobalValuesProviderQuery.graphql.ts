/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type GlobalValuesProviderQueryVariables = {};
export type GlobalValuesProviderQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"user_data" | "backendConstants_data">;
};
export type GlobalValuesProviderQuery = {
    readonly response: GlobalValuesProviderQueryResponse;
    readonly variables: GlobalValuesProviderQueryVariables;
};



/*
query GlobalValuesProviderQuery {
  ...user_data
  ...backendConstants_data
}

fragment backendConstants_data on Query {
  cities
  specialities
}

fragment user_data on Query {
  me {
    id
    firstname
    lastname
    patientProfile {
      __typename
      id
      insurance
    }
    doctorProfile {
      __typename
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "GlobalValuesProviderQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "user_data"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "backendConstants_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GlobalValuesProviderQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v0/*: any*/),
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
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patientProfile",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "insurance",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Doctor",
            "kind": "LinkedField",
            "name": "doctorProfile",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          }
        ],
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
    ]
  },
  "params": {
    "cacheID": "d2fd396fd69bcfa038210ea152b4c4a1",
    "id": null,
    "metadata": {},
    "name": "GlobalValuesProviderQuery",
    "operationKind": "query",
    "text": "query GlobalValuesProviderQuery {\n  ...user_data\n  ...backendConstants_data\n}\n\nfragment backendConstants_data on Query {\n  cities\n  specialities\n}\n\nfragment user_data on Query {\n  me {\n    id\n    firstname\n    lastname\n    patientProfile {\n      __typename\n      id\n      insurance\n    }\n    doctorProfile {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'abe5db6a9dfc711a72dc9a73bb73c5ed';
export default node;
