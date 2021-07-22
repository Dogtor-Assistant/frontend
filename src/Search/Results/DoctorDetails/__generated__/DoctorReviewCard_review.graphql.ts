/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DoctorReviewCard_review = {
    readonly rating: number;
    readonly content: string | null;
    readonly patient: {
        readonly firstname: string;
        readonly lastname: string;
    };
    readonly " $refType": "DoctorReviewCard_review";
};
export type DoctorReviewCard_review$data = DoctorReviewCard_review;
export type DoctorReviewCard_review$key = {
    readonly " $data"?: DoctorReviewCard_review$data;
    readonly " $fragmentRefs": FragmentRefs<"DoctorReviewCard_review">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "DoctorReviewCard_review",
  "selections": [
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
      "kind": "ScalarField",
      "name": "content",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Patient",
      "kind": "LinkedField",
      "name": "patient",
      "plural": false,
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Review",
  "abstractKey": null
};
(node as any).hash = '79dee1e6090ede1ef742d03bc10edc8e';
export default node;
