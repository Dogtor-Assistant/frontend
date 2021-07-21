/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorDetails_doctor = {
    readonly " $fragmentRefs": FragmentRefs<"WorkingHoursCard_doctor" | "TopReviews_doctor">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "TopReviews_doctor"
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '95b65b4ff756ec03400090f9bb8824b4';
export default node;
