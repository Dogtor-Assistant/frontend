/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Suggestions_search = {
    readonly suggestions: {
        readonly " $fragmentRefs": FragmentRefs<"SpecialitiesSuggestions_suggestions" | "CitiesSuggestions_suggestions">;
    };
    readonly " $refType": "Suggestions_search";
};
export type Suggestions_search$data = Suggestions_search;
export type Suggestions_search$key = {
    readonly " $data"?: Suggestions_search$data;
    readonly " $fragmentRefs": FragmentRefs<"Suggestions_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Suggestions_search",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchSuggestions",
      "kind": "LinkedField",
      "name": "suggestions",
      "plural": false,
      "selections": [
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "SpecialitiesSuggestions_suggestions"
        },
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "CitiesSuggestions_suggestions"
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = 'f224a85fdc77d8908c7bedb88b9fa93f';
export default node;
