/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type userQueryVariables = {};
export type userQueryResponse = {
    readonly me: {
        readonly id: string;
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly __typename: string;
            readonly id: string;
        } | null;
        readonly doctorProfile: {
            readonly __typename: string;
            readonly id: string;
        } | null;
    } | null;
    readonly cities: ReadonlyArray<string>;
    readonly specialities: ReadonlyArray<string>;
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
    }
    doctorProfile {
      __typename
      id
    }
  }
  cities
  specialities
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
v1 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "__typename",
    "storageKey": null
  },
  (v0/*: any*/)
],
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
        "selections": (v1/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Doctor",
        "kind": "LinkedField",
        "name": "doctorProfile",
        "plural": false,
        "selections": (v1/*: any*/),
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
    "cacheID": "e51a437f26595b848a0767757336b1e0",
    "id": null,
    "metadata": {},
    "name": "userQuery",
    "operationKind": "query",
    "text": "query userQuery {\n  me {\n    id\n    firstname\n    lastname\n    patientProfile {\n      __typename\n      id\n    }\n    doctorProfile {\n      __typename\n      id\n    }\n  }\n  cities\n  specialities\n}\n"
  }
};
})();
(node as any).hash = '6c9c85f9c5504fe7dd8dcc622df81a37';
export default node;
