/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useHasAnySuggestions_suggestions = {
    readonly cities: ReadonlyArray<string> | null;
    readonly specialities: ReadonlyArray<string> | null;
    readonly minRating: number | null;
    readonly nearby: {
        readonly __typename: string;
    } | null;
    readonly " $refType": "useHasAnySuggestions_suggestions";
};
export type useHasAnySuggestions_suggestions$data = useHasAnySuggestions_suggestions;
export type useHasAnySuggestions_suggestions$key = {
    readonly " $data"?: useHasAnySuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"useHasAnySuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useHasAnySuggestions_suggestions",
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
          "name": "__typename",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = '31d8680bc081a39a7af60a690599342d';
export default node;
