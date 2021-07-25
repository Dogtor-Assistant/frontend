/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Gender = "Female" | "Male" | "NonBinary" | "TransgenderFemale" | "TransgenderMale" | "%future added value";
export type Insurance = "Private" | "Public" | "%future added value";
export type ProfileSuggestion_data = {
    readonly me: {
        readonly patientProfile: {
            readonly birthDate: string | null;
            readonly insurance: Insurance;
            readonly gender: Gender | null;
            readonly medications: ReadonlyArray<string>;
            readonly medicalConditions: ReadonlyArray<string>;
        } | null;
    } | null;
    readonly " $refType": "ProfileSuggestion_data";
};
export type ProfileSuggestion_data$data = ProfileSuggestion_data;
export type ProfileSuggestion_data$key = {
    readonly " $data"?: ProfileSuggestion_data$data;
    readonly " $fragmentRefs": FragmentRefs<"ProfileSuggestion_data">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "ProfileSuggestion_data",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "User",
      "kind": "LinkedField",
      "name": "me",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Patient",
          "kind": "LinkedField",
          "name": "patientProfile",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "birthDate",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "insurance",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "gender",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "medications",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "medicalConditions",
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'a9491e6f28a4dd26c901ca14f2fcb1dd';
export default node;
