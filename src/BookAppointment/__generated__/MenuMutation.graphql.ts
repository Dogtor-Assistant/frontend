/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Insurance = "Private" | "Public" | "%future added value";
export type AppointmentInput = {
    doctorId: string;
    expectedDuration: number;
    expectedTime: string;
    insurance: Insurance;
    patientNotes?: string | null;
    selectedServices: Array<string>;
    shareData: boolean;
};
export type MenuMutationVariables = {
    input: AppointmentInput;
};
export type MenuMutationResponse = {
    readonly createAppointment: {
        readonly id: string;
    };
};
export type MenuMutation = {
    readonly response: MenuMutationResponse;
    readonly variables: MenuMutationVariables;
};



/*
mutation MenuMutation(
  $input: AppointmentInput!
) {
  createAppointment(input: $input) {
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
    "concreteType": "Appointment",
    "kind": "LinkedField",
    "name": "createAppointment",
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
    "name": "MenuMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MenuMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "c53adee2df81ce4ac27c4ebaaaf00a12",
    "id": null,
    "metadata": {},
    "name": "MenuMutation",
    "operationKind": "mutation",
    "text": "mutation MenuMutation(\n  $input: AppointmentInput!\n) {\n  createAppointment(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a164ce7017fd15e783e2fa7204862104';
export default node;
