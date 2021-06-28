/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SpecialitiesSuggestions_suggestions = {
    readonly specialities: ReadonlyArray<string> | null;
    readonly " $refType": "SpecialitiesSuggestions_suggestions";
};
export type SpecialitiesSuggestions_suggestions$data = SpecialitiesSuggestions_suggestions;
export type SpecialitiesSuggestions_suggestions$key = {
    readonly " $data"?: SpecialitiesSuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"SpecialitiesSuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpecialitiesSuggestions_suggestions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "specialities",
      "storageKey": null
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = '83b3f3d9c639475879470b9d35417c23';
export default node;
