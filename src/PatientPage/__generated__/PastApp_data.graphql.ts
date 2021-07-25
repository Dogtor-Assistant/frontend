/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PastApp_data = {
    readonly patientPreviousAppointments: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"AppBox_appointment">;
    }>;
    readonly " $refType": "PastApp_data";
};
export type PastApp_data$data = PastApp_data;
export type PastApp_data$key = {
    readonly " $data"?: PastApp_data$data;
    readonly " $fragmentRefs": FragmentRefs<"PastApp_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "patientID"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "PastApp_data",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "id",
          "variableName": "patientID"
        }
      ],
      "concreteType": "Appointment",
      "kind": "LinkedField",
      "name": "patientPreviousAppointments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "AppBox_appointment"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '86da562c7755e54bce92a47f52301ad2';
export default node;
