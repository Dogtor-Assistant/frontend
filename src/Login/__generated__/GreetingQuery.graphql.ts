/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type GreetingQueryVariables = {};
export type GreetingQueryResponse = {
    readonly greeting: string | null;
};
export type GreetingQuery = {
    readonly response: GreetingQueryResponse;
    readonly variables: GreetingQueryVariables;
};



/*
query GreetingQuery {
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
    "name": "GreetingQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "GreetingQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "1794a4fa416db71d0c42e4884499813a",
    "id": null,
    "metadata": {},
    "name": "GreetingQuery",
    "operationKind": "query",
    "text": "query GreetingQuery {\n  greeting\n}\n"
  }
};
})();
(node as any).hash = '5b1c6cca1d9710cf6262e1dd8953fc0d';
export default node;
