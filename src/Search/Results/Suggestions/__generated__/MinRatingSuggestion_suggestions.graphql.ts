/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MinRatingSuggestion_suggestions = {
    readonly minRating: number | null;
    readonly " $refType": "MinRatingSuggestion_suggestions";
};
export type MinRatingSuggestion_suggestions$data = MinRatingSuggestion_suggestions;
export type MinRatingSuggestion_suggestions$key = {
    readonly " $data"?: MinRatingSuggestion_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"MinRatingSuggestion_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MinRatingSuggestion_suggestions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "minRating",
      "storageKey": null
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = 'e7b0a9a977268f1b73035131cc56080a';
export default node;
