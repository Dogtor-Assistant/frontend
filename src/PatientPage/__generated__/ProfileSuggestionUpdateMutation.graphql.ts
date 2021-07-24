/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type Gender = "Female" | "Male" | "NonBinary" | "TransgenderFemale" | "TransgenderMale" | "%future added value";
export type Insurance = "Private" | "Public" | "%future added value";
export type UserPatientInputUpd = {
    id: string;
    birthDate: string;
    gender: Gender;
    insurance: Insurance;
};
export type ProfileSuggestionUpdateMutationVariables = {
    input: UserPatientInputUpd;
};
export type ProfileSuggestionUpdateMutationResponse = {
    readonly updateUserPatientProfile: {
        readonly id: string;
    } | null;
};
export type ProfileSuggestionUpdateMutation = {
    readonly response: ProfileSuggestionUpdateMutationResponse;
    readonly variables: ProfileSuggestionUpdateMutationVariables;
};



/*
mutation ProfileSuggestionUpdateMutation(
  $input: UserPatientInputUpd!
) {
  updateUserPatientProfile(input: $input) {
    id
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "Patient",
    "kind": "LinkedField",
    "name": "updateUserPatientProfile",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "ProfileSuggestionUpdateMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "ProfileSuggestionUpdateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4cd076069e9dedc83796a38fa861ee2e",
    "id": null,
    "metadata": {},
    "name": "ProfileSuggestionUpdateMutation",
    "operationKind": "mutation",
    "text": "mutation ProfileSuggestionUpdateMutation(\n  $input: UserPatientInputUpd!\n) {\n  updateUserPatientProfile(input: $input) {\n    id\n  }\n}\n"
  }
};
})();
(node as any).hash = '4b2a578db33ce1b0803d6bb51fa2cd25';
export default node;
