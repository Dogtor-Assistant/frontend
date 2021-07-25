/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Weekday = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday" | "%future added value";
export type Menu_doctor = {
    readonly id: string;
    readonly firstname: string;
    readonly lastname: string;
    readonly offeredSlots: ReadonlyArray<{
        readonly day: Weekday;
        readonly start: string;
        readonly end: string;
    }>;
    readonly services: ReadonlyArray<{
        readonly id: string;
        readonly description: string | null;
        readonly estimatedDuration: number | null;
        readonly name: string;
        readonly privateCovered: boolean | null;
        readonly publicCovered: boolean | null;
    }>;
    readonly appointments: ReadonlyArray<{
        readonly isDone: boolean;
        readonly expectedTime: {
            readonly duration: number;
            readonly start: string;
        };
    }>;
    readonly " $refType": "Menu_doctor";
};
export type Menu_doctor$data = Menu_doctor;
export type Menu_doctor$key = {
    readonly " $data"?: Menu_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"Menu_doctor">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "start",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Menu_doctor",
  "selections": [
    (v0/*: any*/),
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
        (v1/*: any*/),
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
      "args": null,
      "concreteType": "Service",
      "kind": "LinkedField",
      "name": "services",
      "plural": true,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "description",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "estimatedDuration",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "name",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "privateCovered",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "publicCovered",
          "storageKey": null
        }
      ],
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "Appointment",
      "kind": "LinkedField",
      "name": "appointments",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "isDone",
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
            },
            (v1/*: any*/)
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
})();
(node as any).hash = '159f65bc53305b5dadf15d939b074344';
export default node;
