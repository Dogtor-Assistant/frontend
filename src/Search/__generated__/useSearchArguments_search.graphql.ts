/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useSearchArguments_search = {
    readonly scope: {
        readonly cities: ReadonlyArray<string> | null;
        readonly query: string | null;
        readonly specialities: ReadonlyArray<string> | null;
    };
    readonly " $refType": "useSearchArguments_search";
};
export type useSearchArguments_search$data = useSearchArguments_search;
export type useSearchArguments_search$key = {
    readonly " $data"?: useSearchArguments_search$data;
    readonly " $fragmentRefs": FragmentRefs<"useSearchArguments_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSearchArguments_search",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "SearchScope",
      "kind": "LinkedField",
      "name": "scope",
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
          "name": "query",
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
(node as any).hash = '96e64ca29c6fd5961b9656cc6726f473';
export default node;
