/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorLocationCard_doctor = {
    readonly lastname: string;
    readonly address: {
        readonly coordinates: {
            readonly latitude: number;
            readonly longitude: number;
        };
    };
    readonly " $refType": "DoctorLocationCard_doctor";
};
export type DoctorLocationCard_doctor$data = DoctorLocationCard_doctor;
export type DoctorLocationCard_doctor$key = {
    readonly " $data"?: DoctorLocationCard_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"DoctorLocationCard_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DoctorLocationCard_doctor",
  "selections": [
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
      "concreteType": "Address",
      "kind": "LinkedField",
      "name": "address",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Coordinates",
          "kind": "LinkedField",
          "name": "coordinates",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "latitude",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "longitude",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = 'ccb968f7d3f2501dfeb017957900ca0e';
export default node;
