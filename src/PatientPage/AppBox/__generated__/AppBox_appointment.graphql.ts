/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppBox_appointment = {
    readonly " $fragmentRefs": FragmentRefs<"useAppointmentExpectedTime_appointment" | "AppBoxCommon_appointment" | "LiveUpdatingAppBox_appointment">;
    readonly " $refType": "AppBox_appointment";
};
export type AppBox_appointment$data = AppBox_appointment;
export type AppBox_appointment$key = {
    readonly " $data"?: AppBox_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"AppBox_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBox_appointment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useAppointmentExpectedTime_appointment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBoxCommon_appointment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "LiveUpdatingAppBox_appointment"
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = '8a2d2b69166c248814eab859e2408343';
export default node;
