/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppBox_appointment = {
    readonly id: string;
    readonly expectedTime: {
        readonly duration: number;
    };
    readonly doctor: {
        readonly firstname: string;
        readonly lastname: string;
    };
    readonly selectedServices: ReadonlyArray<{
        readonly name: string;
    }>;
    readonly " $fragmentRefs": FragmentRefs<"useAppointmentExpectedTime_appointment" | "useAppointmentEstimatedTime_appointment">;
    readonly " $refType": "AppBox_appointment";
};
export type AppBox_appointment$data = AppBox_appointment;
export type AppBox_appointment$key = {
    readonly " $data"?: AppBox_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"AppBox_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBox_appointment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
          "name": "duration",
          "storageKey": null
        }
      ],
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
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "firstname",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "lastname",
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
      "name": "selectedServices",
      "plural": true,
      "selections": [
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
      "args": null,
      "kind": "FragmentSpread",
      "name": "useAppointmentExpectedTime_appointment"
    },
    {
      "args": null,
      "kind": "FragmentSpread",
      "name": "useAppointmentEstimatedTime_appointment"
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = 'b9174c5b9f00fb1780b296b50ea07fb3';
export default node;
