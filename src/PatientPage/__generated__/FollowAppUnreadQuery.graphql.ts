/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FollowAppUnreadQueryVariables = {};
export type FollowAppUnreadQueryResponse = {
    readonly me: {
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly unreadFollowups: ReadonlyArray<{
                readonly id: string;
                readonly doctor: {
                    readonly firstname: string;
                    readonly lastname: string;
                };
                readonly services: ReadonlyArray<{
                    readonly serviceId: string;
                    readonly serviceName: string;
                }>;
            }>;
        } | null;
    } | null;
};
export type FollowAppUnreadQuery = {
    readonly response: FollowAppUnreadQueryResponse;
    readonly variables: FollowAppUnreadQueryVariables;
};



/*
query FollowAppUnreadQuery {
  me {
    firstname
    lastname
    patientProfile {
      unreadFollowups {
        id
        doctor {
          firstname
          lastname
          id
        }
        services {
          serviceId
          serviceName
        }
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
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "concreteType": "MiniService",
  "kind": "LinkedField",
  "name": "services",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "serviceId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "serviceName",
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
    "name": "FollowAppUnreadQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Followup",
                "kind": "LinkedField",
                "name": "unreadFollowups",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Doctor",
                    "kind": "LinkedField",
                    "name": "doctor",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
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
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FollowAppUnreadQuery",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Followup",
                "kind": "LinkedField",
                "name": "unreadFollowups",
                "plural": true,
                "selections": [
                  (v2/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Doctor",
                    "kind": "LinkedField",
                    "name": "doctor",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v3/*: any*/)
                ],
                "storageKey": null
              },
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "89c289ff2b499aff95e2a6a4fc315b13",
    "id": null,
    "metadata": {},
    "name": "FollowAppUnreadQuery",
    "operationKind": "query",
    "text": "query FollowAppUnreadQuery {\n  me {\n    firstname\n    lastname\n    patientProfile {\n      unreadFollowups {\n        id\n        doctor {\n          firstname\n          lastname\n          id\n        }\n        services {\n          serviceId\n          serviceName\n        }\n      }\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '8ea6e68854b0dbba4d7471f2b7fa98ec';
export default node;
