/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Gender = "Female" | "Male" | "NonBinary" | "TransgenderFemale" | "TransgenderMale" | "%future added value";
export type Insurance = "Private" | "Public" | "%future added value";
export type ProfileSuggestionQueryVariables = {};
export type ProfileSuggestionQueryResponse = {
    readonly me: {
        readonly patientProfile: {
            readonly birthDate: string | null;
            readonly insurance: Insurance;
            readonly gender: Gender | null;
            readonly medications: ReadonlyArray<string>;
            readonly medicalConditions: ReadonlyArray<string>;
        } | null;
    } | null;
};
export type ProfileSuggestionQuery = {
    readonly response: ProfileSuggestionQueryResponse;
    readonly variables: ProfileSuggestionQueryVariables;
};



/*
query ProfileSuggestionQuery {
  me {
    patientProfile {
      birthDate
      insurance
      gender
      medications
      medicalConditions
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
  "name": "birthDate",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "insurance",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "gender",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medications",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "medicalConditions",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileSuggestionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patientProfile",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
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
    "name": "ProfileSuggestionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Patient",
            "kind": "LinkedField",
            "name": "patientProfile",
            "plural": false,
            "selections": [
              (v0/*: any*/),
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          },
          (v5/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0b387d72fea9417f8b1a64d13f774b6e",
    "id": null,
    "metadata": {},
    "name": "ProfileSuggestionQuery",
    "operationKind": "query",
    "text": "query ProfileSuggestionQuery {\n  me {\n    patientProfile {\n      birthDate\n      insurance\n      gender\n      medications\n      medicalConditions\n      id\n    }\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '2743e3c4d068a5da7643bbde0a2c5e69';
export default node;
