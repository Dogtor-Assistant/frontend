/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppBoxCommon_appointment = {
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
    readonly " $fragmentRefs": FragmentRefs<"useAppointmentExpectedTime_appointment">;
    readonly " $refType": "AppBoxCommon_appointment";
};
export type AppBoxCommon_appointment$data = AppBoxCommon_appointment;
export type AppBoxCommon_appointment$key = {
    readonly " $data"?: AppBoxCommon_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"AppBoxCommon_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "AppBoxCommon_appointment",
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
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = '12bb366b265e01b8d39d6b3d92a9d04e';
export default node;
