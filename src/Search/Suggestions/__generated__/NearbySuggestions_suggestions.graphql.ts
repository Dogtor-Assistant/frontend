/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NearbySuggestions_suggestions = {
    readonly nearby: {
        readonly label: string;
        readonly maximumDistanceInMeters: number;
        readonly coordinates: {
            readonly latitude: number;
            readonly longitude: number;
        };
    } | null;
    readonly " $refType": "NearbySuggestions_suggestions";
};
export type NearbySuggestions_suggestions$data = NearbySuggestions_suggestions;
export type NearbySuggestions_suggestions$key = {
    readonly " $data"?: NearbySuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"NearbySuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NearbySuggestions_suggestions",
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
(node as any).hash = '4091edbf4c170b15aa1486fd23fb9a4d';
export default node;
