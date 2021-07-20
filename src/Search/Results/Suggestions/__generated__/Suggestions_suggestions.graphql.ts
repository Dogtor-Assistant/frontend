/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Suggestions_suggestions = {
    readonly " $fragmentRefs": FragmentRefs<"useHasAnySuggestions_suggestions" | "CitySuggestions_suggestions" | "SpecialitySuggestions_suggestions" | "MinRatingSuggestion_suggestions">;
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
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = '71ef3dd5ffea22a754fae704d24022a3';
export default node;
