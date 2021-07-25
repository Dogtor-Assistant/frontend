/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type useAppointmentExpectedTime_appointment = {
    readonly expectedTime: {
        readonly start: string;
    };
    readonly " $refType": "useAppointmentExpectedTime_appointment";
};
export type useAppointmentExpectedTime_appointment$data = useAppointmentExpectedTime_appointment;
export type useAppointmentExpectedTime_appointment$key = {
    readonly " $data"?: useAppointmentExpectedTime_appointment$data;
    readonly " $fragmentRefs": FragmentRefs<"useAppointmentExpectedTime_appointment">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useAppointmentExpectedTime_appointment",
  "selections": [
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Appointment",
  "abstractKey": null
};
(node as any).hash = 'd0bb25605f5239a51590da92ea5a060e';
export default node;
