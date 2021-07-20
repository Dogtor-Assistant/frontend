/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Insurance = "Private" | "Public" | "%future added value";
export type CheckupNotUnreadQueryVariables = {};
export type CheckupNotUnreadQueryResponse = {
    readonly me: {
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly insurance: Insurance;
            readonly address: {
                readonly streetName: string;
                readonly streetNumber: number;
                readonly city: string;
                readonly zipCode: number;
            };
            readonly unreadCheckups: ReadonlyArray<{
                readonly id: string;
                readonly services: ReadonlyArray<string>;
                readonly suggestedDate: string;
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
      insurance
      address {
        streetName
        streetNumber
        city
        zipCode
      }
      unreadCheckups {
        id
        services
        suggestedDate
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
  "kind": "ScalarField",
  "name": "insurance",
  "storageKey": null
},
v3 = {
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
      "name": "streetName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "streetNumber",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "city",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "zipCode",
      "storageKey": null
    }
  ],
  "storageKey": null
},
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
  "concreteType": "Checkup",
  "kind": "LinkedField",
  "name": "unreadCheckups",
  "plural": true,
  "selections": [
    (v4/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "services",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "suggestedDate",
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
              (v3/*: any*/),
              (v5/*: any*/)
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
              (v3/*: any*/),
              (v5/*: any*/),
              (v4/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "99f5960a8d1ae76596ea97efda198cd5",
    "id": null,
    "metadata": {},
    "name": "CheckupNotUnreadQuery",
    "operationKind": "query",
    "text": "query CheckupNotUnreadQuery {\n  me {\n    firstname\n    lastname\n    patientProfile {\n      insurance\n      address {\n        streetName\n        streetNumber\n        city\n        zipCode\n      }\n      unreadCheckups {\n        id\n        services\n        suggestedDate\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '73a5cdf91d53cf08066a26d04baa8470';
export default node;
