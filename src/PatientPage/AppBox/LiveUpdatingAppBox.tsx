import type { LiveUpdatingAppBox_appointment$key } from './__generated__/LiveUpdatingAppBox_appointment.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import AppBoxCommon from './AppBoxCommon';

import useAppointmentEstimatedTime from './useAppointmentEstimatedTime';

type Props = {
    appointment: LiveUpdatingAppBox_appointment$key,
    isPast: boolean,
    refreshQuery: () => void,
}

function LiveUpdatingAppBox(props: Props) {
    const appointment = useFragment(
        graphql`
            fragment LiveUpdatingAppBox_appointment on Appointment {
                ...AppBoxCommon_appointment
                ...useAppointmentEstimatedTime_appointment
            }
        `,
        props.appointment,
    );

    const estimatedDate = useAppointmentEstimatedTime(appointment);

    return (
        <AppBoxCommon
            appointment={appointment}
            estimatedDate={estimatedDate}
            isPast={props.isPast}
            refreshQuery={props.refreshQuery}
        />
    );
}

export default LiveUpdatingAppBox;
