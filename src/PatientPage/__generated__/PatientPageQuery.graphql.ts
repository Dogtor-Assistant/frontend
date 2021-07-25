/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type PatientPageQueryVariables = {
    patientID: string;
};
export type PatientPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"CheckupNot_data" | "UpcomingApp_data" | "PastApp_data">;
};
export type PatientPageQuery = {
    readonly response: PatientPageQueryResponse;
    readonly variables: PatientPageQueryVariables;
};



/*
query PatientPageQuery(
  $patientID: ID!
) {
  ...CheckupNot_data
  ...UpcomingApp_data_UJS9J
  ...PastApp_data_UJS9J
}

fragment AppBox_appointment on Appointment {
  id
  ...useAppointmentExpectedTime_appointment
  ...useAppointmentEstimatedTime_appointment
  expectedTime {
    duration
  }
  doctor {
    firstname
    lastname
    id
  }
  selectedServices {
    name
    id
  }
}

fragment CheckupNot_data on Query {
  me {
    ...NotBox_user
    patientProfile {
      unreadCheckups {
        id
        ...NotBox_checkup
      }
      id
    }
    id
  }
}

fragment NotBox_checkup on Checkup {
  id
  services
}

fragment NotBox_user on User {
  firstname
  lastname
  patientProfile {
    address {
      city
    }
    id
  }
}

fragment PastApp_data_UJS9J on Query {
  patientPreviousAppointments(id: $patientID) {
    id
    ...AppBox_appointment
  }
}

fragment UpcomingApp_data_UJS9J on Query {
  patientUpcomingAppointments(id: $patientID) {
    id
    ...AppBox_appointment
  }
}

fragment useAppointmentEstimatedTime_appointment on Appointment {
  id
  estimatedStart
}

fragment useAppointmentExpectedTime_appointment on Appointment {
  expectedTime {
    start
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "patientID"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "patientID",
    "variableName": "patientID"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstname",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastname",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "kind": "Variable",
    "name": "id",
    "variableName": "patientID"
  }
],
v6 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "concreteType": "AppointmentTime",
    "kind": "LinkedField",
    "name": "expectedTime",
    "plural": false,
    "selections": [
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
        "name": "duration",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "estimatedStart",
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Doctor",
    "kind": "LinkedField",
    "name": "doctor",
    "plural": false,
    "selections": [
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "Service",
    "kind": "LinkedField",
    "name": "selectedServices",
    "plural": true,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "name",
        "storageKey": null
      },
      (v4/*: any*/)
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PatientPageQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "CheckupNot_data"
      },
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "UpcomingApp_data"
      },
      {
        "args": (v1/*: any*/),
        "kind": "FragmentSpread",
        "name": "PastApp_data"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PatientPageQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "User",
        "kind": "LinkedField",
        "name": "me",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
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
                "concreteType": "Address",
                "kind": "LinkedField",
                "name": "address",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "city",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Checkup",
                "kind": "LinkedField",
                "name": "unreadCheckups",
                "plural": true,
                "selections": [
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "services",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientUpcomingAppointments",
        "plural": true,
        "selections": (v6/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Appointment",
        "kind": "LinkedField",
        "name": "patientPreviousAppointments",
        "plural": true,
        "selections": (v6/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d3193a37ccf7fcfcf55a38ea98d4b5ba",
    "id": null,
    "metadata": {},
    "name": "PatientPageQuery",
    "operationKind": "query",
    "text": "query PatientPageQuery(\n  $patientID: ID!\n) {\n  ...CheckupNot_data\n  ...UpcomingApp_data_UJS9J\n  ...PastApp_data_UJS9J\n}\n\nfragment AppBox_appointment on Appointment {\n  id\n  ...useAppointmentExpectedTime_appointment\n  ...useAppointmentEstimatedTime_appointment\n  expectedTime {\n    duration\n  }\n  doctor {\n    firstname\n    lastname\n    id\n  }\n  selectedServices {\n    name\n    id\n  }\n}\n\nfragment CheckupNot_data on Query {\n  me {\n    ...NotBox_user\n    patientProfile {\n      unreadCheckups {\n        id\n        ...NotBox_checkup\n      }\n      id\n    }\n    id\n  }\n}\n\nfragment NotBox_checkup on Checkup {\n  id\n  services\n}\n\nfragment NotBox_user on User {\n  firstname\n  lastname\n  patientProfile {\n    address {\n      city\n    }\n    id\n  }\n}\n\nfragment PastApp_data_UJS9J on Query {\n  patientPreviousAppointments(id: $patientID) {\n    id\n    ...AppBox_appointment\n  }\n}\n\nfragment UpcomingApp_data_UJS9J on Query {\n  patientUpcomingAppointments(id: $patientID) {\n    id\n    ...AppBox_appointment\n  }\n}\n\nfragment useAppointmentEstimatedTime_appointment on Appointment {\n  id\n  estimatedStart\n}\n\nfragment useAppointmentExpectedTime_appointment on Appointment {\n  expectedTime {\n    start\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f6fa47dd428a36773f9617e00b5f8e11';
export default node;
