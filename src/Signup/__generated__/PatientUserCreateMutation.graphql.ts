/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ActivityLevel = "High" | "Low" | "Medium" | "VeryHigh" | "VeryLow" | "%future added value";
export type Gender = "Female" | "Male" | "NonBinary" | "TransgenderFemale" | "TransgenderMale" | "%future added value";
export type Insurance = "Private" | "Public" | "%future added value";
export type UserPatientInput = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    address: AddressInput;
    phoneNumber: string;
    insurance: Insurance;
    birthDate?: string | null;
    gender?: Gender | null;
    height?: number | null;
    weight?: number | null;
    activityLvl?: ActivityLevel | null;
    smoker?: boolean | null;
    allergies: Array<string | null>;
    medConditions: Array<string | null>;
    medications: Array<string | null>;
    surgeries: Array<string | null>;
};
export type AddressInput = {
    streetName: string;
    streetNumber: number;
    city: string;
    zipCode: number;
    lat: number;
    lon: number;
};
export type PatientUserCreateMutationVariables = {
    input: UserPatientInput;
};
export type PatientUserCreateMutationResponse = {
    readonly createUserPatient: {
        readonly id: string;
    } | null;
};
export type PatientUserCreateMutation = {
    readonly response: PatientUserCreateMutationResponse;
    readonly variables: PatientUserCreateMutationVariables;
};



/*
mutation PatientUserCreateMutation(
  $input: UserPatientInput!
) {
  createUserPatient(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "User",
    "kind": "LinkedField",
    "name": "createUserPatient",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientUserCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientUserCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "fce359a494dc1bbac9fbec9c7ad50b2d",
    "id": null,
    "metadata": {},
    "name": "PatientUserCreateMutation",
    "operationKind": "mutation",
    "text": "mutation PatientUserCreateMutation(\n  $input: UserPatientInput!\n) {\n  createUserPatient(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fc1e615f1031277a3b808ef253e4858f';
export default node;
