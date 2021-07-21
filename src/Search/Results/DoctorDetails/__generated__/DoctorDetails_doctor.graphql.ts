/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorDetails_doctor = {
    readonly " $fragmentRefs": FragmentRefs<"WorkingHoursCard_doctor">;
    readonly " $refType": "DoctorDetails_doctor";
};
export type DoctorDetails_doctor$data = DoctorDetails_doctor;
export type DoctorDetails_doctor$key = {
    readonly " $data"?: DoctorDetails_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"DoctorDetails_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DoctorDetails_doctor",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "WorkingHoursCard_doctor"
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '5f5686cfc5659c9e5c0aaf5f3f52b06e';
export default node;
