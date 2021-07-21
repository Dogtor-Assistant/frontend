/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type Weekday = "Friday" | "Monday" | "Saturday" | "Sunday" | "Thursday" | "Tuesday" | "Wednesday" | "%future added value";
export type WorkingHoursCard_doctor = {
    readonly offeredSlots: ReadonlyArray<{
        readonly day: Weekday;
        readonly start: string;
        readonly end: string;
    }>;
    readonly " $refType": "WorkingHoursCard_doctor";
};
export type WorkingHoursCard_doctor$data = WorkingHoursCard_doctor;
export type WorkingHoursCard_doctor$key = {
    readonly " $data"?: WorkingHoursCard_doctor$data;
    readonly " $fragmentRefs": FragmentRefs<"WorkingHoursCard_doctor">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "WorkingHoursCard_doctor",
  "selections": [
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
    }
  ],
  "type": "Doctor",
  "abstractKey": null
};
(node as any).hash = '39541cc3fb74e32cab4fcf9b70475899';
export default node;
