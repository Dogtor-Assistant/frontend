/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Weekday = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday" | "%future added value";
export type UserDoctorInput = {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    address: AddressInput;
    phoneNumber: string;
    webpage?: unknown | null;
    specialities: Array<string>;
    offeredSlots: Array<OfferedSlotInput | null>;
};
export type AddressInput = {
    streetName: string;
    streetNumber: number;
    city: string;
    zipCode: number;
};
export type OfferedSlotInput = {
    day: Weekday;
    slotStart: string;
    slotStop: string;
};
export type DoctorUserCreateMutationVariables = {
    input: UserDoctorInput;
};
export type DoctorUserCreateMutationResponse = {
    readonly createUserDoctor: {
        readonly id: string;
    } | null;
};
export type DoctorUserCreateMutation = {
    readonly response: DoctorUserCreateMutationResponse;
    readonly variables: DoctorUserCreateMutationVariables;
};



/*
mutation DoctorUserCreateMutation(
  $input: UserDoctorInput!
) {
  createUserDoctor(input: $input) {
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
    "name": "createUserDoctor",
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
    "name": "DoctorUserCreateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DoctorUserCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "816590c7e7858d6b8e04a65a72e5ffbb",
    "id": null,
    "metadata": {},
    "name": "DoctorUserCreateMutation",
    "operationKind": "mutation",
    "text": "mutation DoctorUserCreateMutation(\n  $input: UserDoctorInput!\n) {\n  createUserDoctor(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'efc2ae7733468a7d6744d73a411da66c';
export default node;
