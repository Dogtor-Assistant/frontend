import type {
    useAppointmentEstimatedTime_appointment$key,
} from './__generated__/useAppointmentEstimatedTime_appointment.graphql';
import type {
    useAppointmentEstimatedTimeSubscription,
    useAppointmentEstimatedTimeSubscriptionResponse,
} from './__generated__/useAppointmentEstimatedTimeSubscription.graphql';

import { useCallback, useMemo, useState } from 'react';

import { useFragment, useSubscription } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

const subscription = graphql`
    subscription useAppointmentEstimatedTimeSubscription($appointmentId: ID!) {
        estimatedWaitingTime(id: $appointmentId) {
            estimatedStart
        }
    }
`;

function useAppointmentEstimatedTime(appointment: useAppointmentEstimatedTime_appointment$key) {
    const decoded = useFragment(
        graphql`
            fragment useAppointmentEstimatedTime_appointment on Appointment {
                id
                estimatedStart
            }
        `,
        appointment,
    );

    const initialDate = useMemo(() => new Date(decoded.estimatedStart), [decoded]);
    const [date, setDate] = useState(initialDate);

    const onNext = useCallback(
        (data: useAppointmentEstimatedTimeSubscriptionResponse | null | undefined) => {
            const newEstimate = data?.estimatedWaitingTime.estimatedStart;
            if (newEstimate != null) {
                setDate(new Date(newEstimate));
            }
        },
        [setDate],
    );

    useSubscription<useAppointmentEstimatedTimeSubscription>(
        {
            onNext,
            subscription,
            variables: {
                appointmentId: decoded.id,
            },
        },
    );

    return date;
}

export default useAppointmentEstimatedTime;
