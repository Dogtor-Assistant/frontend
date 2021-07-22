/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchFromId_SearchRootFromFragment_search = {
    readonly " $fragmentRefs": FragmentRefs<"useSearchArguments_search">;
    readonly " $refType": "SearchFromId_SearchRootFromFragment_search";
};
export type SearchFromId_SearchRootFromFragment_search$data = SearchFromId_SearchRootFromFragment_search;
export type SearchFromId_SearchRootFromFragment_search$key = {
    readonly " $data"?: SearchFromId_SearchRootFromFragment_search$data;
    readonly " $fragmentRefs": FragmentRefs<"SearchFromId_SearchRootFromFragment_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFromId_SearchRootFromFragment_search",
  "selections": [
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useSearchArguments_search"
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '86f4985b518ae780de402d1166eaf251';
export default node;
