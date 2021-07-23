/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Insurance = "Private" | "Public" | "%future added value";
export type user_data = {
    readonly me: {
        readonly id: string;
        readonly firstname: string;
        readonly lastname: string;
        readonly patientProfile: {
            readonly __typename: string;
            readonly id: string;
            readonly insurance: Insurance;
        } | null;
        readonly doctorProfile: {
            readonly __typename: string;
            readonly id: string;
        } | null;
    } | null;
    readonly " $refType": "user_data";
};
export type user_data$data = user_data;
export type user_data$key = {
    readonly " $data"?: user_data$data;
    readonly " $fragmentRefs": FragmentRefs<"user_data">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "user_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        (v0/*: any*/),
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
            (v1/*: any*/),
            (v0/*: any*/),
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "insurance",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Doctor",
          "kind": "LinkedField",
          "name": "doctorProfile",
          "plural": false,
          "selections": [
            (v1/*: any*/),
            (v0/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '28041c6799c854d971d3bc406c411642';
export default node;
