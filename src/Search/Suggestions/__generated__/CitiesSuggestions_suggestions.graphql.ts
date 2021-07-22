/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CitiesSuggestions_suggestions = {
    readonly cities: ReadonlyArray<string> | null;
    readonly " $refType": "CitiesSuggestions_suggestions";
};
export type CitiesSuggestions_suggestions$data = CitiesSuggestions_suggestions;
export type CitiesSuggestions_suggestions$key = {
    readonly " $data"?: CitiesSuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"CitiesSuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CitiesSuggestions_suggestions",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "cities",
      "storageKey": null
    }
  ],
  "type": "SearchSuggestions",
  "abstractKey": null
};
(node as any).hash = '8f834f7259d3b3da943a5cc4dca21691';
export default node;
