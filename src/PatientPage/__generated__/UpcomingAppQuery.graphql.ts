/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type UpcomingAppQueryVariables = {
    patientID: string;
};
export type UpcomingAppQueryResponse = {
    readonly patientUpcomingAppointments: ReadonlyArray<{
        readonly id: string;
        readonly expectedTime: {
            readonly duration: number;
            readonly start: string;
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
export type UpcomingAppQuery = {
    readonly response: UpcomingAppQueryResponse;
    readonly variables: UpcomingAppQueryVariables;
};



/*
query UpcomingAppQuery(
  $patientID: ID!
) {
  patientUpcomingAppointments(id: $patientID) {
    id
    expectedTime {
      duration
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
      "name": "duration",
      "storageKey": null
    },
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
    "name": "UpcomingAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientUpcomingAppointments",
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
    "name": "UpcomingAppQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientUpcomingAppointments",
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
    "cacheID": "a0ca21a63cb1f990d10451e341ce6452",
    "id": null,
    "metadata": {},
    "name": "UpcomingAppQuery",
    "operationKind": "query",
    "text": "query UpcomingAppQuery(\n  $patientID: ID!\n) {\n  patientUpcomingAppointments(id: $patientID) {\n    id\n    expectedTime {\n      duration\n      start\n    }\n    doctor {\n      firstname\n      lastname\n      id\n    }\n    selectedServices {\n      name\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '9d59fd2c306630e0f199fd614a2630e0';
export default node;
