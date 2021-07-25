import { useMemo } from 'react';

import useToday from './useToday';

function useIsToday(date: Date) {
    const today = useToday();
    const isToday = useMemo(() => {
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear();
    }, [today, date]);
    return isToday;
}

export default useIsToday;
