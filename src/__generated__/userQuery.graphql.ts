/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Insurance = "Private" | "Public" | "%future added value";
export type userQueryVariables = {};
export type userQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly __typename: string;
            readonly id: string;
            readonly insurance: Insurance;
        } | null;
        readonly doctorProfile: {
            readonly __typename: string;
            readonly id: string;
        } | null;
    } | null;
};
export type userQuery = {
    readonly response: userQueryResponse;
    readonly variables: userQueryVariables;
};



/*
query userQuery {
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
},
v2 = [
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
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "userQuery",
    "selections": (v2/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "userQuery",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "5eaaa5cd7f7dce124ece0700e55a1d05",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery {\n  me {\n    id\n    firstname\n    lastname\n    patientProfile {\n      __typename\n      id\n      insurance\n    }\n    doctorProfile {\n      __typename\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f56c38901edb38b3007d26ef37eef440';
export default node;
