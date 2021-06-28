/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Results_search = {
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "SearchResultsList_search"
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = 'b3f5d3c108a44a162a75809137c19464';
export default node;
