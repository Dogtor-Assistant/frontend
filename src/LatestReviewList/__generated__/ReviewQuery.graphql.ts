/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ReviewQueryVariables = {};
export type ReviewQueryResponse = {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
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
<<<<<<< HEAD
=======
    readonly greeting: string;
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> impl of review box
};
export type ReviewQuery = {
    readonly response: ReviewQueryResponse;
    readonly variables: ReviewQueryVariables;
};



/*
query ReviewQuery {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
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
<<<<<<< HEAD
=======
  greeting
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> impl of review box
}
*/

const node: ConcreteRequest = (function(){
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
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
<<<<<<< HEAD
=======
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "greeting",
    "storageKey": null
  }
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> impl of review box
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewQuery",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
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
<<<<<<< HEAD
=======
    "selections": (v0/*: any*/),
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
>>>>>>> impl of review box
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReviewQuery",
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> impl of review box
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
<<<<<<< HEAD
  },
  "params": {
    "cacheID": "cdb89ebf5c314649bc3b73e9604b8ba9",
=======
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1f359a28a400942da6b8022f509a6167",
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
  },
  "params": {
    "cacheID": "cdb89ebf5c314649bc3b73e9604b8ba9",
>>>>>>> impl of review box
    "id": null,
    "metadata": {},
    "name": "ReviewQuery",
    "operationKind": "query",
<<<<<<< HEAD
<<<<<<< HEAD
    "text": "query ReviewQuery {\n  latestReviews {\n    id\n    rating\n    content\n    doctor {\n      firstname\n      lastname\n      id\n    }\n    patient {\n      firstname\n      lastname\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ae3bba638f7742bd2afc0139362e5ec';
=======
    "text": "query ReviewQuery {\n  greeting\n}\n"
  }
};
})();
(node as any).hash = 'cc6c538e624ded4e2018f87a3ba1a346';
>>>>>>> adding reviews (not finished) && adding Rating for stars
=======
    "text": "query ReviewQuery {\n  latestReviews {\n    id\n    rating\n    content\n    doctor {\n      firstname\n      lastname\n      id\n    }\n    patient {\n      firstname\n      lastname\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3ae3bba638f7742bd2afc0139362e5ec';
>>>>>>> impl of review box
export default node;
