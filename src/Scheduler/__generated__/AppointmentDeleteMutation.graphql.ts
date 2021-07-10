/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppointmentDeleteMutationVariables = {
    id: string;
};
export type AppointmentDeleteMutationResponse = {
    readonly deleteAppointmentById: boolean;
};
export type AppointmentDeleteMutation = {
    readonly response: AppointmentDeleteMutationResponse;
    readonly variables: AppointmentDeleteMutationVariables;
};



/*
mutation AppointmentDeleteMutation(
  $id: ID!
) {
  deleteAppointmentById(id: $id)
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
    "name": "deleteAppointmentById",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppointmentDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "dfb866184b094e3e78a824718723fecd",
    "id": null,
    "metadata": {},
    "name": "AppointmentDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentDeleteMutation(\n  $id: ID!\n) {\n  deleteAppointmentById(id: $id)\n}\n"
  }
};
})();
(node as any).hash = 'd0d54697b55cc4f4bc47fad97cdc5c0d';
export default node;
