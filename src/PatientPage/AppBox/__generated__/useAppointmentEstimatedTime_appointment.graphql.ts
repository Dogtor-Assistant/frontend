/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAppointmentEstimatedTime_appointment = {
    readonly id: string;
    readonly estimatedStart: string;
    readonly " $refType": "useAppointmentEstimatedTime_appointment";
};
export type useAppointmentEstimatedTime_appointment$data = useAppointmentEstimatedTime_appointment;
export type useAppointmentEstimatedTime_appointment$key = {
    readonly " $data"?: useAppointmentEstimatedTime_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"useAppointmentEstimatedTime_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useAppointmentEstimatedTime_appointment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "estimatedStart",
      "storageKey": null
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = 'db59a380807931bbf49ff3c76d7bd50f';
export default node;
