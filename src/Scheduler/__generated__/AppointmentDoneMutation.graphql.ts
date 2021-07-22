/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppointmentDoneMutationVariables = {
    id: string;
};
export type AppointmentDoneMutationResponse = {
    readonly makeAppointmentAsDone: boolean;
};
export type AppointmentDoneMutation = {
    readonly response: AppointmentDoneMutationResponse;
    readonly variables: AppointmentDoneMutationVariables;
};



/*
mutation AppointmentDoneMutation(
  $id: ID!
) {
  makeAppointmentAsDone(id: $id)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ScalarField",
    "name": "makeAppointmentAsDone",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentDoneMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppointmentDoneMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bea3316fe575266e8de02cd62b9e028e",
    "id": null,
    "metadata": {},
    "name": "AppointmentDoneMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentDoneMutation(\n  $id: ID!\n) {\n  makeAppointmentAsDone(id: $id)\n}\n"
  }
};
})();
(node as any).hash = 'fe1982c8c01df57f35d9faae31a68ff7';
export default node;
