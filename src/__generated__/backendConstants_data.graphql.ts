/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type backendConstants_data = {
    readonly cities: ReadonlyArray<string>;
    readonly specialities: ReadonlyArray<string>;
    readonly " $refType": "backendConstants_data";
};
export type backendConstants_data$data = backendConstants_data;
export type backendConstants_data$key = {
    readonly " $data"?: backendConstants_data$data;
    readonly " $fragmentRefs": FragmentRefs<"backendConstants_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "backendConstants_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cities",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "specialities",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'fc2c6b6b742d4d87165d52909e30c239';
export default node;
