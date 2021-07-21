/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TopServicesCard_doctor = {
    readonly services: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
    }>;
    readonly " $refType": "TopServicesCard_doctor";
};
export type TopServicesCard_doctor$data = TopServicesCard_doctor;
export type TopServicesCard_doctor$key = {
    readonly " $data"?: TopServicesCard_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"TopServicesCard_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TopServicesCard_doctor",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Service",
      "kind": "LinkedField",
      "name": "services",
      "plural": true,
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
          "name": "name",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = 'bdf5938494971e27fcd4daa14d8f3c5e';
export default node;
