/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppBoxDeleteAppMutationVariables = {
    input: string;
};
export type AppBoxDeleteAppMutationResponse = {
    readonly deleteAppointmentById: boolean;
};
export type AppBoxDeleteAppMutation = {
    readonly response: AppBoxDeleteAppMutationResponse;
    readonly variables: AppBoxDeleteAppMutationVariables;
};



/*
mutation AppBoxDeleteAppMutation(
  $input: ID!
) {
  deleteAppointmentById(id: $input)
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
        "name": "id",
        "variableName": "input"
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
    "name": "AppBoxDeleteAppMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppBoxDeleteAppMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "6f6e5fc78fc714763ae49b7c672b6944",
    "id": null,
    "metadata": {},
    "name": "AppBoxDeleteAppMutation",
    "operationKind": "mutation",
    "text": "mutation AppBoxDeleteAppMutation(\n  $input: ID!\n) {\n  deleteAppointmentById(id: $input)\n}\n"
  }
};
})();
(node as any).hash = 'fb4dc131c02cdee6d8e0e64254187a69';
export default node;
