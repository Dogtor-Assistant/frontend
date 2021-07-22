/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type NearbyLocationInput = {
    label: string;
    coordinates: CoordinatesInput;
    maximumDistanceInMeters: number;
};
export type CoordinatesInput = {
    latitude: number;
    longitude: number;
};
export type SearchRendererQueryVariables = {
    query?: string | null;
    cities?: Array<string> | null;
    specialities?: Array<string> | null;
    minRating?: number | null;
    nearby?: NearbyLocationInput | null;
};
export type SearchRendererQueryResponse = {
    readonly search: {
        readonly id: string;
        readonly " $fragmentRefs": FragmentRefs<"useSearchArguments_search" | "SearchResultsContainer_search">;
    };
};
export type SearchRendererQuery = {
    readonly response: SearchRendererQueryResponse;
    readonly variables: SearchRendererQueryVariables;
};



/*
query SearchRendererQuery(
  $query: String
  $cities: [String!]
  $specialities: [String!]
  $minRating: Float
  $nearby: NearbyLocationInput
) {
  search(query: $query, cities: $cities, specialities: $specialities, minRating: $minRating, nearby: $nearby) {
    id
    ...useSearchArguments_search
    ...SearchResultsContainer_search
  }
}

fragment CitiesSuggestions_suggestions on SearchSuggestions {
  cities
}

fragment CitySuggestions_suggestions on SearchSuggestions {
  cities
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

fragment MinRatingSuggestion_suggestions on SearchSuggestions {
  minRating
}

fragment NearbySuggestion_suggestions on SearchSuggestions {
  nearby {
    label
    maximumDistanceInMeters
    coordinates {
      latitude
      longitude
    }
  }
}

fragment NearbySuggestions_suggestions on SearchSuggestions {
  nearby {
    label
    maximumDistanceInMeters
    coordinates {
      latitude
      longitude
    }
  }
}

fragment Results_search on Search {
  ...SearchResultsList_search
  suggestions {
    ...Suggestions_suggestions
  }
}

fragment SearchResultsContainer_search on Search {
  ...useResultMode_search
  ...Results_search
  ...Suggestions_search
}

fragment SearchResultsList_search on Search {
  results(first: 20) {
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

fragment SpecialitiesSuggestions_suggestions on SearchSuggestions {
  specialities
}

fragment SpecialitySuggestions_suggestions on SearchSuggestions {
  specialities
}

fragment Suggestions_search on Search {
  suggestions {
    ...SpecialitiesSuggestions_suggestions
    ...CitiesSuggestions_suggestions
    ...NearbySuggestions_suggestions
  }
}

fragment Suggestions_suggestions on SearchSuggestions {
  ...useHasAnySuggestions_suggestions
  ...CitySuggestions_suggestions
  ...SpecialitySuggestions_suggestions
  ...MinRatingSuggestion_suggestions
  ...NearbySuggestion_suggestions
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

fragment useHasAnySuggestions_suggestions on SearchSuggestions {
  cities
  specialities
  minRating
  nearby {
    __typename
  }
}

fragment useResultMode_search on Search {
  suggestions {
    specialities
    cities
  }
  firstResult: results(first: 1) {
    edges {
      __typename
    }
  }
}

fragment useRouteToBookAppointment_doctor on Doctor {
  id
}

fragment useSearchArguments_search on Search {
  scope {
    cities
    query
    specialities
    minRating
    nearby {
      label
      coordinates {
        latitude
        longitude
      }
      maximumDistanceInMeters
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "cities"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "minRating"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "nearby"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "query"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "specialities"
},
v5 = [
  {
    "kind": "Variable",
    "name": "cities",
    "variableName": "cities"
  },
  {
    "kind": "Variable",
    "name": "minRating",
    "variableName": "minRating"
  },
  {
    "kind": "Variable",
    "name": "nearby",
    "variableName": "nearby"
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Variable",
    "name": "specialities",
    "variableName": "specialities"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "cities",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "specialities",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "minRating",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "label",
  "storageKey": null
},
v11 = {
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
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "maximumDistanceInMeters",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v14 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 20
  }
],
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rating",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSearchArguments_search"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchResultsContainer_search"
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
    "argumentDefinitions": [
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "SearchRendererQuery",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Search",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchScope",
            "kind": "LinkedField",
            "name": "scope",
            "plural": false,
            "selections": [
              (v7/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "query",
                "storageKey": null
              },
              (v8/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NearbyLocation",
                "kind": "LinkedField",
                "name": "nearby",
                "plural": false,
                "selections": [
                  (v10/*: any*/),
                  (v11/*: any*/),
                  (v12/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchSuggestions",
            "kind": "LinkedField",
            "name": "suggestions",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              (v7/*: any*/),
              (v9/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "NearbyLocation",
                "kind": "LinkedField",
                "name": "nearby",
                "plural": false,
                "selections": [
                  (v13/*: any*/),
                  (v10/*: any*/),
                  (v12/*: any*/),
                  (v11/*: any*/)
                ],
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
                  (v13/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "results(first:1)"
          },
          {
            "alias": null,
            "args": (v14/*: any*/),
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
                      (v15/*: any*/),
                      (v16/*: any*/),
                      (v8/*: any*/),
                      (v17/*: any*/),
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
                          (v11/*: any*/)
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
                          (v6/*: any*/),
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
                                  (v6/*: any*/),
                                  (v17/*: any*/),
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
                                      (v15/*: any*/),
                                      (v16/*: any*/),
                                      (v6/*: any*/)
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
                      (v6/*: any*/),
                      (v13/*: any*/)
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
            "storageKey": "results(first:20)"
          },
          {
            "alias": null,
            "args": (v14/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "SearchResultsList_search_results",
            "kind": "LinkedHandle",
            "name": "results"
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "c8183b3552e4d3047c13729cc654b5cb",
    "id": null,
    "metadata": {},
    "name": "SearchRendererQuery",
    "operationKind": "query",
    "text": "query SearchRendererQuery(\n  $query: String\n  $cities: [String!]\n  $specialities: [String!]\n  $minRating: Float\n  $nearby: NearbyLocationInput\n) {\n  search(query: $query, cities: $cities, specialities: $specialities, minRating: $minRating, nearby: $nearby) {\n    id\n    ...useSearchArguments_search\n    ...SearchResultsContainer_search\n  }\n}\n\nfragment CitiesSuggestions_suggestions on SearchSuggestions {\n  cities\n}\n\nfragment CitySuggestions_suggestions on SearchSuggestions {\n  cities\n}\n\nfragment DoctorDetails_doctor on Doctor {\n  ...TopServicesCard_doctor\n  ...WorkingHoursCard_doctor\n  ...DoctorLocationCard_doctor\n  ...TopReviews_doctor\n}\n\nfragment DoctorLocationCard_doctor on Doctor {\n  lastname\n  address {\n    coordinates {\n      latitude\n      longitude\n    }\n  }\n}\n\nfragment DoctorResultRow_doctor on Doctor {\n  firstname\n  lastname\n  specialities\n  rating\n  address {\n    streetName\n    streetNumber\n    city\n  }\n  ...DoctorDetails_doctor\n  ...useRouteToBookAppointment_doctor\n}\n\nfragment DoctorReviewCard_review on Review {\n  rating\n  content\n  patient {\n    firstname\n    lastname\n    id\n  }\n}\n\nfragment MinRatingSuggestion_suggestions on SearchSuggestions {\n  minRating\n}\n\nfragment NearbySuggestion_suggestions on SearchSuggestions {\n  nearby {\n    label\n    maximumDistanceInMeters\n    coordinates {\n      latitude\n      longitude\n    }\n  }\n}\n\nfragment NearbySuggestions_suggestions on SearchSuggestions {\n  nearby {\n    label\n    maximumDistanceInMeters\n    coordinates {\n      latitude\n      longitude\n    }\n  }\n}\n\nfragment Results_search on Search {\n  ...SearchResultsList_search\n  suggestions {\n    ...Suggestions_suggestions\n  }\n}\n\nfragment SearchResultsContainer_search on Search {\n  ...useResultMode_search\n  ...Results_search\n  ...Suggestions_search\n}\n\nfragment SearchResultsList_search on Search {\n  results(first: 20) {\n    edges {\n      node {\n        ...DoctorResultRow_doctor\n        id\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n  id\n}\n\nfragment SpecialitiesSuggestions_suggestions on SearchSuggestions {\n  specialities\n}\n\nfragment SpecialitySuggestions_suggestions on SearchSuggestions {\n  specialities\n}\n\nfragment Suggestions_search on Search {\n  suggestions {\n    ...SpecialitiesSuggestions_suggestions\n    ...CitiesSuggestions_suggestions\n    ...NearbySuggestions_suggestions\n  }\n}\n\nfragment Suggestions_suggestions on SearchSuggestions {\n  ...useHasAnySuggestions_suggestions\n  ...CitySuggestions_suggestions\n  ...SpecialitySuggestions_suggestions\n  ...MinRatingSuggestion_suggestions\n  ...NearbySuggestion_suggestions\n}\n\nfragment TopReviews_doctor on Doctor {\n  reviews(last: 5) {\n    edges {\n      node {\n        id\n        ...DoctorReviewCard_review\n      }\n    }\n  }\n}\n\nfragment TopServicesCard_doctor on Doctor {\n  services {\n    id\n    name\n  }\n}\n\nfragment WorkingHoursCard_doctor on Doctor {\n  offeredSlots {\n    day\n    start\n    end\n  }\n}\n\nfragment useHasAnySuggestions_suggestions on SearchSuggestions {\n  cities\n  specialities\n  minRating\n  nearby {\n    __typename\n  }\n}\n\nfragment useResultMode_search on Search {\n  suggestions {\n    specialities\n    cities\n  }\n  firstResult: results(first: 1) {\n    edges {\n      __typename\n    }\n  }\n}\n\nfragment useRouteToBookAppointment_doctor on Doctor {\n  id\n}\n\nfragment useSearchArguments_search on Search {\n  scope {\n    cities\n    query\n    specialities\n    minRating\n    nearby {\n      label\n      coordinates {\n        latitude\n        longitude\n      }\n      maximumDistanceInMeters\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '1af14b7bb04364c94c68b138ae694d70';
export default node;
