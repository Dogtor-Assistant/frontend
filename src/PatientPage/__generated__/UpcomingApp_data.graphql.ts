/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type UpcomingApp_data = {
    readonly patientUpcomingAppointments: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"AppBox_appointment">;
    }>;
    readonly " $refType": "UpcomingApp_data";
};
export type UpcomingApp_data$data = UpcomingApp_data;
export type UpcomingApp_data$key = {
    readonly " $data"?: UpcomingApp_data$data;
    readonly " $fragmentRefs": FragmentRefs<"UpcomingApp_data">;
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
  "name": "UpcomingApp_data",
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
      "name": "patientUpcomingAppointments",
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
(node as any).hash = '5ebb7ceeb2adcb651b1be1e8584433be';
export default node;
