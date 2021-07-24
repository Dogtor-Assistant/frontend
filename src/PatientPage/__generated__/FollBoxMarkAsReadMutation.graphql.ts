/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FollBoxMarkAsReadMutationVariables = {
    input: string;
};
export type FollBoxMarkAsReadMutationResponse = {
    readonly markFollowupAsRead: boolean;
};
export type FollBoxMarkAsReadMutation = {
    readonly response: FollBoxMarkAsReadMutationResponse;
    readonly variables: FollBoxMarkAsReadMutationVariables;
};



/*
mutation FollBoxMarkAsReadMutation(
  $input: ID!
) {
  markFollowupAsRead(id: $input)
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
    "name": "markFollowupAsRead",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "FollBoxMarkAsReadMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "FollBoxMarkAsReadMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f268df86c0cc7f7c0237b1b707c8f86f",
    "id": null,
    "metadata": {},
    "name": "FollBoxMarkAsReadMutation",
    "operationKind": "mutation",
    "text": "mutation FollBoxMarkAsReadMutation(\n  $input: ID!\n) {\n  markFollowupAsRead(id: $input)\n}\n"
  }
};
})();
(node as any).hash = '22321bb032a7f57d612797bc5095debb';
export default node;
