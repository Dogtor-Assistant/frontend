/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorResultRow_doctor = {
    readonly firstname: string;
    readonly lastname: string;
    readonly specialities: ReadonlyArray<string>;
    readonly rating: number;
    readonly address: {
        readonly streetName: string;
        readonly streetNumber: number;
        readonly city: string;
    };
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
      "name": "specialities",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "rating",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Address",
      "kind": "LinkedField",
      "name": "address",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "streetName",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "streetNumber",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "city",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '0d112bce12e19fcaeef328cb4f67c0df';
export default node;
