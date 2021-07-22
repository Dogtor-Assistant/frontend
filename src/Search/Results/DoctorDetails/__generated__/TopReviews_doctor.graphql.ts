/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TopReviews_doctor = {
    readonly reviews: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly " $fragmentRefs": FragmentRefs<"DoctorReviewCard_review">;
            } | null;
        } | null> | null;
    };
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
      "args": [
        {
          "kind": "Literal",
          "name": "last",
          "value": 5
        }
      ],
      "concreteType": "ReviewsConnection",
      "kind": "LinkedField",
      "name": "reviews",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "ReviewEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Review",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
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
          "storageKey": null
        }
      ],
      "storageKey": "reviews(last:5)"
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '7f53880335776a2a9dd01fdaf52a0b47';
export default node;
