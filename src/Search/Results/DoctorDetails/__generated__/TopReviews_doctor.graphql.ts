/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TopReviews_doctor = {
    readonly topReviews: ReadonlyArray<{
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"DoctorReviewCard_review">;
    }>;
    readonly " $refType": "TopReviews_doctor";
};
export type TopReviews_doctor$data = TopReviews_doctor;
export type TopReviews_doctor$key = {
    readonly " $data"?: TopReviews_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"TopReviews_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TopReviews_doctor",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Review",
      "kind": "LinkedField",
      "name": "topReviews",
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
          "name": "DoctorReviewCard_review"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = 'e601a0768019784bbc9de8f551ade0c8';
export default node;
