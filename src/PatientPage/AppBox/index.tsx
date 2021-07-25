import type { AppBox_appointment$key } from './__generated__/AppBox_appointment.graphql';

import React from 'react';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

import AppBoxCommon from './AppBoxCommon';
import LiveUpdatingAppBox from './LiveUpdatingAppBox';

import useAppointmentExpectedTime from './useAppointmentExpectedTime';
import useIsToday from './useIsToday';

type Props = {
    appointment: AppBox_appointment$key,
    isPast: boolean,
    refreshQuery: () => void,
}

function AppBox(props: Props) {
    const appointment = useFragment(
        graphql`
            fragment AppBox_appointment on Appointment {
                ...useAppointmentExpectedTime_appointment
                ...AppBoxCommon_appointment
                ...LiveUpdatingAppBox_appointment
            }
        `,
        props.appointment,
    );

    const expectedTime = useAppointmentExpectedTime(appointment);
    const isToday = useIsToday(expectedTime);
    if (isToday) {
        return (
            <LiveUpdatingAppBox
                appointment={appointment}
                isPast={props.isPast}
                refreshQuery={props.refreshQuery}
            />
        );
    }
     
    return (
        <AppBoxCommon
            appointment={appointment}
            estimatedDate={null}
            isPast={props.isPast}
            refreshQuery={props.refreshQuery}
        />
    );
}

export default AppBox;
