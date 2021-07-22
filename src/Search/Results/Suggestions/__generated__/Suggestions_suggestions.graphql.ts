/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Suggestions_suggestions = {
    readonly " $fragmentRefs": FragmentRefs<"useHasAnySuggestions_suggestions" | "CitySuggestions_suggestions" | "SpecialitySuggestions_suggestions" | "MinRatingSuggestion_suggestions" | "NearbySuggestion_suggestions">;
    readonly " $refType": "Suggestions_suggestions";
};
export type Suggestions_suggestions$data = Suggestions_suggestions;
export type Suggestions_suggestions$key = {
    readonly " $data"?: Suggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"Suggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Suggestions_suggestions",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useHasAnySuggestions_suggestions"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "CitySuggestions_suggestions"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SpecialitySuggestions_suggestions"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "MinRatingSuggestion_suggestions"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "NearbySuggestion_suggestions"
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = 'c3342eaea6a8c1c4d45afb675b719a79';
export default node;
