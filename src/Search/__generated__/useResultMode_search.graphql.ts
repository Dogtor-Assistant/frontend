/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useResultMode_search = {
    readonly suggestions: {
        readonly specialities: ReadonlyArray<string> | null;
        readonly cities: ReadonlyArray<string> | null;
    };
    readonly firstResult: {
        readonly edges: ReadonlyArray<{
            readonly __typename: string;
        } | null> | null;
    };
    readonly " $refType": "useResultMode_search";
};
export type useResultMode_search$data = useResultMode_search;
export type useResultMode_search$key = {
    readonly " $data"?: useResultMode_search$data;
    readonly " $fragmentRefs": FragmentRefs<"useResultMode_search">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useResultMode_search",
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
          "name": "specialities",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "cities",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": "firstResult",
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 1
        }
      ],
      "concreteType": "DoctorsConnection",
      "kind": "LinkedField",
      "name": "results",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "DoctorEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__typename",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "results(first:1)"
    }
  ],
  "type": "Search",
  "abstractKey": null
};
(node as any).hash = '9cdbf1417b2411467340ad2d378d5723';
export default node;
