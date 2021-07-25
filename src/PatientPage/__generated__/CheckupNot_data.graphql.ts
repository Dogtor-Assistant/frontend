/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CheckupNot_data = {
    readonly me: {
        readonly patientProfile: {
            readonly unreadCheckups: ReadonlyArray<{
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"NotBox_checkup">;
            }>;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"NotBox_user">;
    } | null;
    readonly " $refType": "CheckupNot_data";
};
export type CheckupNot_data$data = CheckupNot_data;
export type CheckupNot_data$key = {
    readonly " $data"?: CheckupNot_data$data;
    readonly " $fragmentRefs": FragmentRefs<"CheckupNot_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CheckupNot_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
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
              "concreteType": "Checkup",
              "kind": "LinkedField",
              "name": "unreadCheckups",
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
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "NotBox_checkup"
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "NotBox_user"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'a8db10099fd0c5200cb4ceba8e2794cb';
export default node;
