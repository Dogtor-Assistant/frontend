/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type FollowupInput = {
    doctorRef: string;
    patientRef: string;
    services: Array<ServiceInput>;
    suggestedDate: string;
    doctorNotes?: string | null;
};
export type ServiceInput = {
    serviceId: string;
    serviceName: string;
};
export type AppointmentFollowupMutationVariables = {
    followupInput: FollowupInput;
};
export type AppointmentFollowupMutationResponse = {
    readonly assignFollowup: boolean;
};
export type AppointmentFollowupMutation = {
    readonly response: AppointmentFollowupMutationResponse;
    readonly variables: AppointmentFollowupMutationVariables;
};



/*
mutation AppointmentFollowupMutation(
  $followupInput: FollowupInput!
) {
  assignFollowup(followupInput: $followupInput)
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "followupInput"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "followupInput",
        "variableName": "followupInput"
      }
    ],
    "kind": "ScalarField",
    "name": "assignFollowup",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppointmentFollowupMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppointmentFollowupMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "775c0aa6f5b213a8c281e26a7c6c60eb",
    "id": null,
    "metadata": {},
    "name": "AppointmentFollowupMutation",
    "operationKind": "mutation",
    "text": "mutation AppointmentFollowupMutation(\n  $followupInput: FollowupInput!\n) {\n  assignFollowup(followupInput: $followupInput)\n}\n"
  }
};
})();
(node as any).hash = '06f99d970665b3349ce18127dbd14229';
export default node;
