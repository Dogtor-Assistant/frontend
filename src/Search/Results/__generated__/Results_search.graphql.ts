/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Results_search = {
    readonly suggestions: {
        readonly " $fragmentRefs": FragmentRefs<"Suggestions_suggestions">;
    };
    readonly " $fragmentRefs": FragmentRefs<"SearchResultsList_search">;
    readonly " $refType": "Results_search";
};
export type Results_search$data = Results_search;
export type Results_search$key = {
    readonly " $data"?: Results_search$data;
    readonly " $fragmentRefs": FragmentRefs<"Results_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Results_search",
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
          "name": "Suggestions_suggestions"
        }
      ],
      "storageKey": null
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchResultsList_search"
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '9f4246db0d189e798622a6c264363d79';
export default node;
