/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type CitySuggestions_suggestions = {
    readonly cities: ReadonlyArray<string> | null;
    readonly " $refType": "CitySuggestions_suggestions";
};
export type CitySuggestions_suggestions$data = CitySuggestions_suggestions;
export type CitySuggestions_suggestions$key = {
    readonly " $data"?: CitySuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"CitySuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CitySuggestions_suggestions",
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
(node as any).hash = '3ef62ff443a2dd4b9d10da9a8404fc23';
export default node;
