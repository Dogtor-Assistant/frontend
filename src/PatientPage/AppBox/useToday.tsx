
import { useEffect, useMemo, useState } from 'react';

/// gives you today as a date and updates it when the day ends
function useToday() {
    const initial = useMemo(() => new Date(), []);
    const [date, setDate] = useState(initial);

    const today = useMemo(() => {
        const today = new Date(date);
        today.setHours(0);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return today;
    }, [date]);

    useEffect(() => {
        const tomorrow = new Date(today);
        tomorrow.setDate(today.getDate() + 1);
        const timeDifference = tomorrow.getTime() - Date.now();
        const timeout = setTimeout(() => {
            setDate(tomorrow);
        }, timeDifference);

        return () => {
            clearTimeout(timeout);
        };
    }, [date, today]);

    return today;
}

export default useToday;
