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
    readonly " $fragmentRefs": FragmentRefs<"DoctorDetails_doctor" | "useRouteToBookAppointment_doctor">;
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
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "DoctorDetails_doctor"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useRouteToBookAppointment_doctor"
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '4143a24c4ee6fd3d7ea1b086241d9c9c';
export default node;
