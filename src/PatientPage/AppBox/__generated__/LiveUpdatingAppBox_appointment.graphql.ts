/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type LiveUpdatingAppBox_appointment = {
    readonly " $fragmentRefs": FragmentRefs<"AppBoxCommon_appointment" | "useAppointmentEstimatedTime_appointment">;
    readonly " $refType": "LiveUpdatingAppBox_appointment";
};
export type LiveUpdatingAppBox_appointment$data = LiveUpdatingAppBox_appointment;
export type LiveUpdatingAppBox_appointment$key = {
    readonly " $data"?: LiveUpdatingAppBox_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"LiveUpdatingAppBox_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "LiveUpdatingAppBox_appointment",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "AppBoxCommon_appointment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useAppointmentEstimatedTime_appointment"
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = '8736f574e9202bf570c0ff98e4f47ed4';
export default node;
