/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultsContainer_search = {
    readonly " $fragmentRefs": FragmentRefs<"useResultMode_search" | "Results_search" | "Suggestions_search">;
    readonly " $refType": "SearchResultsContainer_search";
};
export type SearchResultsContainer_search$data = SearchResultsContainer_search;
export type SearchResultsContainer_search$key = {
    readonly " $data"?: SearchResultsContainer_search$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchResultsContainer_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultsContainer_search",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useResultMode_search"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Results_search"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "Suggestions_search"
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '1aa924562782ba353d9f846f639db2bb';
export default node;
