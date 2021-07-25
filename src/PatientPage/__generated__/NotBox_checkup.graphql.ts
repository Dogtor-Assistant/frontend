/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NotBox_checkup = {
    readonly id: string;
    readonly services: ReadonlyArray<string>;
    readonly " $refType": "NotBox_checkup";
};
export type NotBox_checkup$data = NotBox_checkup;
export type NotBox_checkup$key = {
    readonly " $data"?: NotBox_checkup$data;
    readonly " $fragmentRefs": FragmentRefs<"NotBox_checkup">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotBox_checkup",
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
      "name": "services",
      "storageKey": null
    }
  ],
  "type": "Checkup",
  "abstractKey": null
};
(node as any).hash = '10bcfb2f7af4cee6eafb70f987bd9554';
export default node;
