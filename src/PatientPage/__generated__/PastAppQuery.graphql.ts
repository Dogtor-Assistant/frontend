/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type PastAppQueryVariables = {
    patientID: string;
};
export type PastAppQueryResponse = {
    readonly patientPreviousAppointments: ReadonlyArray<{
        readonly id: string;
        readonly expectedTime: {
            readonly start: string | null;
        };
        readonly doctor: {
            readonly firstname: string;
            readonly lastname: string;
        };
        readonly selectedServices: ReadonlyArray<{
            readonly name: string;
        }>;
    }>;
};
export type PastAppQuery = {
    readonly response: PastAppQueryResponse;
    readonly variables: PastAppQueryVariables;
};



/*
query PastAppQuery(
  $patientID: ID!
) {
  patientPreviousAppointments(id: $patientID) {
    id
    expectedTime {
      start
    }
    doctor {
      firstname
      lastname
      id
    }
    selectedServices {
      name
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "patientID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "patientID"
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
  "concreteType": "AppointmentTime",
  "kind": "LinkedField",
  "name": "expectedTime",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "start",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PastAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientPreviousAppointments",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Doctor",
            "kind": "LinkedField",
            "name": "doctor",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Service",
            "kind": "LinkedField",
            "name": "selectedServices",
            "plural": true,
            "selections": [
              (v6/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PastAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientPreviousAppointments",
        "plural": true,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "Doctor",
            "kind": "LinkedField",
            "name": "doctor",
            "plural": false,
            "selections": [
              (v4/*: any*/),
              (v5/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Service",
            "kind": "LinkedField",
            "name": "selectedServices",
            "plural": true,
            "selections": [
              (v6/*: any*/),
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "fc5bae9c79ffc070cd00265d5cbc6572",
    "id": null,
    "metadata": {},
    "name": "PastAppQuery",
    "operationKind": "query",
    "text": "query PastAppQuery(\n  $patientID: ID!\n) {\n  patientPreviousAppointments(id: $patientID) {\n    id\n    expectedTime {\n      start\n    }\n    doctor {\n      firstname\n      lastname\n      id\n    }\n    selectedServices {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '74460d3d872d4efb0c1228f5e7454365';
export default node;
