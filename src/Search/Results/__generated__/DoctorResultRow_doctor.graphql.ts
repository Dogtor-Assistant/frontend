/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorResultRow_doctor = {
    readonly firstname: string;
    readonly lastname: string;
    readonly rating: number;
    readonly " $refType": "DoctorResultRow_doctor";
};
export type DoctorResultRow_doctor$data = DoctorResultRow_doctor;
export type DoctorResultRow_doctor$key = {
    readonly " $data"?: DoctorResultRow_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"DoctorResultRow_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DoctorResultRow_doctor",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstname",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "lastname",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '372d8e8e61fdfd5ee7a87e455befc41b';
export default node;
