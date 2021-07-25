/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NotBox_user = {
    readonly firstname: string;
    readonly lastname: string;
    readonly patientProfile: {
        readonly address: {
            readonly city: string;
        };
    } | null;
    readonly " $refType": "NotBox_user";
};
export type NotBox_user$data = NotBox_user;
export type NotBox_user$key = {
    readonly " $data"?: NotBox_user$data;
    readonly " $fragmentRefs": FragmentRefs<"NotBox_user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NotBox_user",
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
      "concreteType": "Patient",
      "kind": "LinkedField",
      "name": "patientProfile",
      "plural": false,
      "selections": [
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
              "name": "city",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "User",
  "abstractKey": null
};
(node as any).hash = '3093c7b5f6aac25ffb321f754273026a';
export default node;
