/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type ReviewQueryVariables = {};
export type ReviewQueryResponse = {
    readonly greeting: string;
};
export type ReviewQuery = {
    readonly response: ReviewQueryResponse;
    readonly variables: ReviewQueryVariables;
};



/*
query ReviewQuery {
  greeting
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "greeting",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "ReviewQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "ReviewQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1f359a28a400942da6b8022f509a6167",
    "id": null,
    "metadata": {},
    "name": "ReviewQuery",
    "operationKind": "query",
    "text": "query ReviewQuery {\n  greeting\n}\n"
  }
};
})();
(node as any).hash = 'cc6c538e624ded4e2018f87a3ba1a346';
export default node;
