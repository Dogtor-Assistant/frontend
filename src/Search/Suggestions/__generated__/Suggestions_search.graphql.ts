/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Suggestions_search = {
    readonly suggestions: {
        readonly cities: ReadonlyArray<string> | null;
        readonly specialities: ReadonlyArray<string> | null;
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
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "specialities",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '82b1d72fb01d03aae7ee3daa22032347';
export default node;
