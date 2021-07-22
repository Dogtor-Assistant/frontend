/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NearbySuggestion_suggestions = {
    readonly nearby: {
        readonly label: string;
        readonly maximumDistanceInMeters: number;
        readonly coordinates: {
            readonly latitude: number;
            readonly longitude: number;
        };
    } | null;
    readonly " $refType": "NearbySuggestion_suggestions";
};
export type NearbySuggestion_suggestions$data = NearbySuggestion_suggestions;
export type NearbySuggestion_suggestions$key = {
    readonly " $data"?: NearbySuggestion_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"NearbySuggestion_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NearbySuggestion_suggestions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "NearbyLocation",
      "kind": "LinkedField",
      "name": "nearby",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "label",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "maximumDistanceInMeters",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "Coordinates",
          "kind": "LinkedField",
          "name": "coordinates",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "latitude",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "longitude",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = 'd420cfec446ed3cd909da9f344b8f7ab';
export default node;
