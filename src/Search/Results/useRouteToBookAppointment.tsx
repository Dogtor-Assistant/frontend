import type { useRouteToBookAppointment_doctor$key } from './__generated__/useRouteToBookAppointment_doctor.graphql';

import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { useFragment } from 'react-relay';
import { graphql } from 'babel-plugin-relay/macro';

function useRouteToBookAppointment(doctor: useRouteToBookAppointment_doctor$key) {
    const decoded = useFragment(
        graphql`
            fragment useRouteToBookAppointment_doctor on Doctor {
                id
            }
        `,
        doctor,
    );

    const history = useHistory();

    const path = useMemo(() => `bookappointment/${decoded.id}`, [decoded]);
    const book = useCallback(
        () => {
            history.push(path);
        },
        [history, path],
    );

    return book;
}

export default useRouteToBookAppointment;
