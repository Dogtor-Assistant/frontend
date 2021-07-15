/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ActivityLevel = "High" | "Low" | "Medium" | "VeryHigh" | "VeryLow" | "%future added value";
export type Gender = "Female" | "Male" | "NonBinary" | "TransgenderFemale" | "TransgenderMale" | "%future added value";
export type CalendarQueryVariables = {
    docId: string;
};
export type CalendarQueryResponse = {
    readonly node: {
        readonly appointments?: ReadonlyArray<{
            readonly id: string;
            readonly patient: {
                readonly id: string;
                readonly firstname: string;
                readonly lastname: string;
                readonly surgeries: ReadonlyArray<string>;
                readonly isSmoker: boolean | null;
                readonly address: {
                    readonly city: string;
                    readonly zipCode: number;
                    readonly streetName: string;
                    readonly streetNumber: number;
                };
                readonly gender: Gender | null;
                readonly height: unknown | null;
                readonly weight: unknown | null;
                readonly activityLevel: ActivityLevel | null;
            };
            readonly expectedTime: {
                readonly start: string | null;
                readonly duration: number | null;
            };
            readonly actualTime: {
                readonly start: string | null;
                readonly duration: number | null;
            } | null;
            readonly isDone: boolean;
        }>;
    } | null;
};
export type CalendarQuery = {
    readonly response: CalendarQueryResponse;
    readonly variables: CalendarQueryVariables;
};



/*
query CalendarQuery(
  $docId: ID!
) {
  node(id: $docId) {
    __typename
    ... on Doctor {
      appointments {
        id
        patient {
          id
          firstname
          lastname
          surgeries
          isSmoker
          address {
            city
            zipCode
            streetName
            streetNumber
          }
          gender
          height
          weight
          activityLevel
        }
        expectedTime {
          start
          duration
        }
        actualTime {
          start
          duration
        }
        isDone
      }
    }
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "docId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "docId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "start",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "duration",
    "storageKey": null
  }
],
v4 = {
  "kind": "InlineFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Appointment",
      "kind": "LinkedField",
      "name": "appointments",
      "plural": true,
      "selections": [
        (v2/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Patient",
          "kind": "LinkedField",
          "name": "patient",
          "plural": false,
          "selections": [
            (v2/*: any*/),
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
              "kind": "ScalarField",
              "name": "surgeries",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "isSmoker",
              "storageKey": null
            },
            {
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
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "zipCode",
                  "storageKey": null
                },
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
                }
              ],
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "gender",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "height",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "weight",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "activityLevel",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AppointmentTime",
          "kind": "LinkedField",
          "name": "expectedTime",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "AppointmentTime",
          "kind": "LinkedField",
          "name": "actualTime",
          "plural": false,
          "selections": (v3/*: any*/),
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDone",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CalendarQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v4/*: any*/)
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
    "name": "CalendarQuery",
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
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c1ba82955633a44760d762bc6791aac1",
    "id": null,
    "metadata": {},
    "name": "CalendarQuery",
    "operationKind": "query",
    "text": "query CalendarQuery(\n  $docId: ID!\n) {\n  node(id: $docId) {\n    __typename\n    ... on Doctor {\n      appointments {\n        id\n        patient {\n          id\n          firstname\n          lastname\n          surgeries\n          isSmoker\n          address {\n            city\n            zipCode\n            streetName\n            streetNumber\n          }\n          gender\n          height\n          weight\n          activityLevel\n        }\n        expectedTime {\n          start\n          duration\n        }\n        actualTime {\n          start\n          duration\n        }\n        isDone\n      }\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b7cb26eb12bc9b9e0ce71829d02f3bf0';
export default node;
