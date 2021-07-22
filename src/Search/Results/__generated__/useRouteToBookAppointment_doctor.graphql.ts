/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useRouteToBookAppointment_doctor = {
    readonly id: string;
    readonly " $refType": "useRouteToBookAppointment_doctor";
};
export type useRouteToBookAppointment_doctor$data = useRouteToBookAppointment_doctor;
export type useRouteToBookAppointment_doctor$key = {
    readonly " $data"?: useRouteToBookAppointment_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"useRouteToBookAppointment_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useRouteToBookAppointment_doctor",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = 'd2b1c489c614faccee3564352a32ce8c';
export default node;
