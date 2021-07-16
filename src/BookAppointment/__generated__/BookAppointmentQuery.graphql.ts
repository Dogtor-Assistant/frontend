/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type BookAppointmentQueryVariables = {
    doctorID: string;
};
export type BookAppointmentQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"Menu_doctor">;
    } | null;
};
export type BookAppointmentQuery = {
    readonly response: BookAppointmentQueryResponse;
    readonly variables: BookAppointmentQueryVariables;
};



/*
query BookAppointmentQuery(
  $doctorID: ID!
) {
  node(id: $doctorID) {
    __typename
    ... on Doctor {
      ...Menu_doctor
    }
    id
  }
}

fragment Menu_doctor on Doctor {
  firstname
  topServices {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "doctorID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "doctorID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "BookAppointmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "Menu_doctor"
              }
            ],
            "type": "Doctor",
            "abstractKey": null
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "BookAppointmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          },
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
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
                "concreteType": "Service",
                "kind": "LinkedField",
                "name": "topServices",
                "plural": true,
                "selections": [
                  (v2/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "type": "Doctor",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7ed64115cf78a00a499f268c23506157",
    "id": null,
    "metadata": {},
    "name": "BookAppointmentQuery",
    "operationKind": "query",
    "text": "query BookAppointmentQuery(\n  $doctorID: ID!\n) {\n  node(id: $doctorID) {\n    __typename\n    ... on Doctor {\n      ...Menu_doctor\n    }\n    id\n  }\n}\n\nfragment Menu_doctor on Doctor {\n  firstname\n  topServices {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ade561484f59878ec6c51a8f3fe1c3be';
export default node;
