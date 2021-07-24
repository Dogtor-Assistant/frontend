/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type NotBoxMarkAsReadMutationVariables = {
    input: string;
};
export type NotBoxMarkAsReadMutationResponse = {
    readonly markCheckupAsRead: boolean;
};
export type NotBoxMarkAsReadMutation = {
    readonly response: NotBoxMarkAsReadMutationResponse;
    readonly variables: NotBoxMarkAsReadMutationVariables;
};



/*
mutation NotBoxMarkAsReadMutation(
  $input: ID!
) {
  markCheckupAsRead(id: $input)
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
    "name": "markCheckupAsRead",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NotBoxMarkAsReadMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NotBoxMarkAsReadMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "9a06b3d3652fa9459e8b1825b2a59516",
    "id": null,
    "metadata": {},
    "name": "NotBoxMarkAsReadMutation",
    "operationKind": "mutation",
    "text": "mutation NotBoxMarkAsReadMutation(\n  $input: ID!\n) {\n  markCheckupAsRead(id: $input)\n}\n"
  }
};
})();
(node as any).hash = 'd89d1779e3adc806474eb72e5237a9a1';
export default node;
