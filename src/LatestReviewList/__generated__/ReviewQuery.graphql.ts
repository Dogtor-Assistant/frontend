/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ReviewQueryVariables = {};
export type ReviewQueryResponse = {
    readonly latestReviews: ReadonlyArray<{
        readonly id: string;
        readonly rating: number;
        readonly content: string | null;
        readonly doctor: {
            readonly firstname: string;
            readonly lastname: string;
        };
        readonly patient: {
            readonly firstname: string;
            readonly lastname: string;
        };
    }>;
};
export type ReviewQuery = {
    readonly response: ReviewQueryResponse;
    readonly variables: ReviewQueryVariables;
};



/*
query ReviewQuery {
  latestReviews {
    id
    rating
    content
    doctor {
      firstname
      lastname
      id
    }
    patient {
      firstname
      lastname
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
  "name": "rating",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v5 = [
  (v3/*: any*/),
  (v4/*: any*/)
],
v6 = [
  (v3/*: any*/),
  (v4/*: any*/),
  (v0/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "latestReviews",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Doctor",
            "kind": "LinkedField",
            "name": "doctor",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patient",
            "plural": false,
            "selections": (v5/*: any*/),
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
    "name": "ReviewQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Review",
        "kind": "LinkedField",
        "name": "latestReviews",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Doctor",
            "kind": "LinkedField",
            "name": "doctor",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patient",
            "plural": false,
            "selections": (v6/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "cdb89ebf5c314649bc3b73e9604b8ba9",
    "id": null,
    "metadata": {},
    "name": "ReviewQuery",
    "operationKind": "query",
    "text": "query ReviewQuery {\n  latestReviews {\n    id\n    rating\n    content\n    doctor {\n      firstname\n      lastname\n      id\n    }\n    patient {\n      firstname\n      lastname\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ae3bba638f7742bd2afc0139362e5ec';
export default node;
