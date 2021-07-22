/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSearchArguments_search = {
    readonly scope: {
        readonly cities: ReadonlyArray<string> | null;
        readonly query: string | null;
        readonly specialities: ReadonlyArray<string> | null;
        readonly minRating: number | null;
        readonly nearby: {
            readonly label: string;
            readonly coordinates: {
                readonly latitude: number;
                readonly longitude: number;
            };
            readonly maximumDistanceInMeters: number;
        } | null;
    };
    readonly " $refType": "useSearchArguments_search";
};
export type useSearchArguments_search$data = useSearchArguments_search;
export type useSearchArguments_search$key = {
    readonly " $data"?: useSearchArguments_search$data;
    readonly " $fragmentRefs": FragmentRefs<"useSearchArguments_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchArguments_search",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchScope",
      "kind": "LinkedField",
      "name": "scope",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "query",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "specialities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "minRating",
          "storageKey": null
        },
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "maximumDistanceInMeters",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '78bf7aac6e6c6470e71e2d79bd59298b';
export default node;
