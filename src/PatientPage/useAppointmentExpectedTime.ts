import type {
    useAppointmentExpectedTime_appointment$key,
} from './__generated__/useAppointmentExpectedTime_appointment.graphql';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useAppointmentExpectedTime(appointment: useAppointmentExpectedTime_appointment$key) {
    const { expectedTime } = useFragment(
        graphql`
            fragment useAppointmentExpectedTime_appointment on Appointment {
                expectedTime {
                    start
                }
            }
        `,
        appointment,
    );

    if (expectedTime.start == null) {
        return null;
    }

    return new Date(expectedTime.start);
}

export default useAppointmentExpectedTime;
