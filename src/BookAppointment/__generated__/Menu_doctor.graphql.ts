/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Menu_doctor = {
    readonly firstname: string;
    readonly topServices: ReadonlyArray<{
        readonly id: string;
    }>;
    readonly " $refType": "Menu_doctor";
};
export type Menu_doctor$data = Menu_doctor;
export type Menu_doctor$key = {
    readonly " $data"?: Menu_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"Menu_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Menu_doctor",
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
      "concreteType": "Service",
      "kind": "LinkedField",
      "name": "topServices",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "id",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '02932db7d7482deb52ad953c5ba3ab3a';
export default node;
