/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SpecialitySuggestions_suggestions = {
    readonly specialities: ReadonlyArray<string> | null;
    readonly " $refType": "SpecialitySuggestions_suggestions";
};
export type SpecialitySuggestions_suggestions$data = SpecialitySuggestions_suggestions;
export type SpecialitySuggestions_suggestions$key = {
    readonly " $data"?: SpecialitySuggestions_suggestions$data;
    readonly " $fragmentRefs": FragmentRefs<"SpecialitySuggestions_suggestions">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SpecialitySuggestions_suggestions",
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
(node as any).hash = '0107dc8e66e6b703f30e855613294ae6';
export default node;
