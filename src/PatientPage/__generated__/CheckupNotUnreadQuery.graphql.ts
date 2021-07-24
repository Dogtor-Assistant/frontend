/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type CheckupNotUnreadQueryVariables = {};
export type CheckupNotUnreadQueryResponse = {
    readonly me: {
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly address: {
                readonly city: string;
            };
            readonly unreadCheckups: ReadonlyArray<{
                readonly id: string;
                readonly services: ReadonlyArray<string>;
            }>;
        } | null;
    } | null;
};
export type CheckupNotUnreadQuery = {
    readonly response: CheckupNotUnreadQueryResponse;
    readonly variables: CheckupNotUnreadQueryVariables;
};



/*
query CheckupNotUnreadQuery {
  me {
    firstname
    lastname
    patientProfile {
      address {
        city
      }
      unreadCheckups {
        id
        services
      }
      id
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "concreteType": "Address",
  "kind": "LinkedField",
  "name": "address",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "Checkup",
  "kind": "LinkedField",
  "name": "unreadCheckups",
  "plural": true,
  "selections": [
    (v3/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "services",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "CheckupNotUnreadQuery",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patientProfile",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "CheckupNotUnreadQuery",
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
          (v1/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patientProfile",
            "plural": false,
            "selections": [
              (v2/*: any*/),
              (v4/*: any*/),
              (v3/*: any*/)
            ],
            "storageKey": null
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "8e2846abb4a7b73f3ec27ced9e1ac77d",
    "id": null,
    "metadata": {},
    "name": "CheckupNotUnreadQuery",
    "operationKind": "query",
    "text": "query CheckupNotUnreadQuery {\n  me {\n    firstname\n    lastname\n    patientProfile {\n      address {\n        city\n      }\n      unreadCheckups {\n        id\n        services\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'c45c0172c09643877c1a2fbae30f59aa';
export default node;
