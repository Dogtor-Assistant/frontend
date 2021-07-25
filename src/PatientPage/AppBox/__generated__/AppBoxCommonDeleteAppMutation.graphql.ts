/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type AppBoxCommonDeleteAppMutationVariables = {
    input: string;
};
export type AppBoxCommonDeleteAppMutationResponse = {
    readonly deleteAppointmentById: boolean;
};
export type AppBoxCommonDeleteAppMutation = {
    readonly response: AppBoxCommonDeleteAppMutationResponse;
    readonly variables: AppBoxCommonDeleteAppMutationVariables;
};



/*
mutation AppBoxCommonDeleteAppMutation(
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
    "name": "AppBoxCommonDeleteAppMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppBoxCommonDeleteAppMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "bd4f786a23d1231472cf3060acb9765b",
    "id": null,
    "metadata": {},
    "name": "AppBoxCommonDeleteAppMutation",
    "operationKind": "mutation",
    "text": "mutation AppBoxCommonDeleteAppMutation(\n  $input: ID!\n) {\n  deleteAppointmentById(id: $input)\n}\n"
  }
};
})();
(node as any).hash = '39d9e597e9ae3f09b95f61aa081f17c4';
export default node;
