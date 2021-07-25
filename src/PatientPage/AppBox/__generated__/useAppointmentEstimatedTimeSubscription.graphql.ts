/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type useAppointmentEstimatedTimeSubscriptionVariables = {
    appointmentId: string;
};
export type useAppointmentEstimatedTimeSubscriptionResponse = {
    readonly estimatedWaitingTime: {
        readonly estimatedStart: string;
    };
};
export type useAppointmentEstimatedTimeSubscription = {
    readonly response: useAppointmentEstimatedTimeSubscriptionResponse;
    readonly variables: useAppointmentEstimatedTimeSubscriptionVariables;
};



/*
subscription useAppointmentEstimatedTimeSubscription(
  $appointmentId: ID!
) {
  estimatedWaitingTime(id: $appointmentId) {
    estimatedStart
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "appointmentId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "appointmentId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "estimatedStart",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "useAppointmentEstimatedTimeSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "estimatedWaitingTime",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Subscription",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "useAppointmentEstimatedTimeSubscription",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "estimatedWaitingTime",
        "plural": false,
        "selections": [
          (v2/*: any*/),
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
    ]
  },
  "params": {
    "cacheID": "23f150e6b77f378e33942cb791033607",
    "id": null,
    "metadata": {},
    "name": "useAppointmentEstimatedTimeSubscription",
    "operationKind": "subscription",
    "text": "subscription useAppointmentEstimatedTimeSubscription(\n  $appointmentId: ID!\n) {\n  estimatedWaitingTime(id: $appointmentId) {\n    estimatedStart\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = 'fd7388ad7b78e04f480c3c87340c8996';
export default node;
