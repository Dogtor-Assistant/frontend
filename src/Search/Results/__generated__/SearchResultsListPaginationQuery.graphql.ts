/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type SearchResultsListPaginationQueryVariables = {
    count: number;
    cursor?: string | null;
    id: string;
};
export type SearchResultsListPaginationQueryResponse = {
    readonly node: {
        readonly " $fragmentRefs": FragmentRefs<"SearchResultsList_search">;
    } | null;
};
export type SearchResultsListPaginationQuery = {
    readonly response: SearchResultsListPaginationQueryResponse;
    readonly variables: SearchResultsListPaginationQueryVariables;
};



/*
query SearchResultsListPaginationQuery(
  $count: Int! = 20
  $cursor: String
  $id: ID!
) {
  node(id: $id) {
    __typename
    ...SearchResultsList_search_1G22uz
    id
  }
}

fragment DoctorDetails_doctor on Doctor {
  ...TopServicesCard_doctor
  ...WorkingHoursCard_doctor
  ...DoctorLocationCard_doctor
  ...TopReviews_doctor
}

fragment DoctorLocationCard_doctor on Doctor {
  lastname
  address {
    coordinates {
      latitude
      longitude
    }
  }
}

fragment DoctorResultRow_doctor on Doctor {
  firstname
  lastname
  specialities
  rating
  address {
    streetName
    streetNumber
    city
  }
  ...DoctorDetails_doctor
  ...useRouteToBookAppointment_doctor
}

fragment DoctorReviewCard_review on Review {
  rating
  content
  patient {
    firstname
    lastname
    id
  }
}

fragment SearchResultsList_search_1G22uz on Search {
  results(first: $count, after: $cursor) {
    edges {
      node {
        ...DoctorResultRow_doctor
        id
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
  id
}

fragment TopReviews_doctor on Doctor {
  reviews(last: 5) {
    edges {
      node {
        id
        ...DoctorReviewCard_review
      }
    }
  }
}

fragment TopServicesCard_doctor on Doctor {
  services {
    id
    name
  }
}

fragment WorkingHoursCard_doctor on Doctor {
  offeredSlots {
    day
    start
    end
  }
}

fragment useRouteToBookAppointment_doctor on Doctor {
  id
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": 20,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "id"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rating",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchResultsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          {
            "args": [
              {
                "kind": "Variable",
                "name": "count",
                "variableName": "count"
              },
              {
                "kind": "Variable",
                "name": "cursor",
                "variableName": "cursor"
              }
            ],
            "kind": "FragmentSpread",
            "name": "SearchResultsList_search"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchResultsListPaginationQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": (v4/*: any*/),
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
                        "concreteType": "Doctor",
                        "kind": "LinkedField",
                        "name": "node",
                        "plural": false,
                        "selections": [
                          (v5/*: any*/),
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "specialities",
                            "storageKey": null
                          },
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Address",
                            "kind": "LinkedField",
                            "name": "address",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "streetName",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "streetNumber",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "city",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Coordinates",
                                "kind": "LinkedField",
                                "name": "coordinates",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "latitude",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "longitude",
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Service",
                            "kind": "LinkedField",
                            "name": "services",
                            "plural": true,
                            "selections": [
                              (v3/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "name",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "OfferedSlot",
                            "kind": "LinkedField",
                            "name": "offeredSlots",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "day",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "start",
                                "storageKey": null
                              },
                              {
                                "alias": null,
                                "args": null,
                                "kind": "ScalarField",
                                "name": "end",
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          {
                            "alias": null,
                            "args": [
                              {
                                "kind": "Literal",
                                "name": "last",
                                "value": 5
                              }
                            ],
                            "concreteType": "ReviewsConnection",
                            "kind": "LinkedField",
                            "name": "reviews",
                            "plural": false,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ReviewEdge",
                                "kind": "LinkedField",
                                "name": "edges",
                                "plural": true,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Review",
                                    "kind": "LinkedField",
                                    "name": "node",
                                    "plural": false,
                                    "selections": [
                                      (v3/*: any*/),
                                      (v7/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "kind": "ScalarField",
                                        "name": "content",
                                        "storageKey": null
                                      },
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Patient",
                                        "kind": "LinkedField",
                                        "name": "patient",
                                        "plural": false,
                                        "selections": [
                                          (v5/*: any*/),
                                          (v6/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      }
                                    ],
                                    "storageKey": null
                                  }
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": "reviews(last:5)"
                          },
                          (v3/*: any*/),
                          (v2/*: any*/)
                        ],
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "cursor",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "PageInfo",
                    "kind": "LinkedField",
                    "name": "pageInfo",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "endCursor",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "hasNextPage",
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": (v4/*: any*/),
                "filters": null,
                "handle": "connection",
                "key": "SearchResultsList_search_results",
                "kind": "LinkedHandle",
                "name": "results"
              }
            ],
            "type": "Search",
            "abstractKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "5f31ae6106ea0f2a13f6a975fdc170f3",
    "id": null,
    "metadata": {},
    "name": "SearchResultsListPaginationQuery",
    "operationKind": "query",
    "text": "query SearchResultsListPaginationQuery(\n  $count: Int! = 20\n  $cursor: String\n  $id: ID!\n) {\n  node(id: $id) {\n    __typename\n    ...SearchResultsList_search_1G22uz\n    id\n  }\n}\n\nfragment DoctorDetails_doctor on Doctor {\n  ...TopServicesCard_doctor\n  ...WorkingHoursCard_doctor\n  ...DoctorLocationCard_doctor\n  ...TopReviews_doctor\n}\n\nfragment DoctorLocationCard_doctor on Doctor {\n  lastname\n  address {\n    coordinates {\n      latitude\n      longitude\n    }\n  }\n}\n\nfragment DoctorResultRow_doctor on Doctor {\n  firstname\n  lastname\n  specialities\n  rating\n  address {\n    streetName\n    streetNumber\n    city\n  }\n  ...DoctorDetails_doctor\n  ...useRouteToBookAppointment_doctor\n}\n\nfragment DoctorReviewCard_review on Review {\n  rating\n  content\n  patient {\n    firstname\n    lastname\n    id\n  }\n}\n\nfragment SearchResultsList_search_1G22uz on Search {\n  results(first: $count, after: $cursor) {\n    edges {\n      node {\n        ...DoctorResultRow_doctor\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment TopReviews_doctor on Doctor {\n  reviews(last: 5) {\n    edges {\n      node {\n        id\n        ...DoctorReviewCard_review\n      }\n    }\n  }\n}\n\nfragment TopServicesCard_doctor on Doctor {\n  services {\n    id\n    name\n  }\n}\n\nfragment WorkingHoursCard_doctor on Doctor {\n  offeredSlots {\n    day\n    start\n    end\n  }\n}\n\nfragment useRouteToBookAppointment_doctor on Doctor {\n  id\n}\n"
  }
};
})();
(node as any).hash = '3b70a4a18f0201effc1a52ae8f1d7c66';
export default node;
