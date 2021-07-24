import { useMemo } from 'react';

import { useCurrentSearchArguments } from './context';

function useAreSearchArgumentsEmpty() {
    const searchArguments = useCurrentSearchArguments();
    const areEmpty = useMemo(() => {
        const record = searchArguments as Record<string, unknown>;
        const keys = Object.keys(record);
        for (const key of keys) {
            if (record[key] != null) {
                return false;
            }
        }
        return true;
    }, [searchArguments]);

    return areEmpty;
}

export default useAreSearchArgumentsEmpty;
