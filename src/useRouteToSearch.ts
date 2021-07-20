import type { SearchArguments } from 'Search/context';

import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

type RouteToSearch = (searchArguments: Partial<SearchArguments>) => void

function useRouteToSearch(): RouteToSearch {
    const history = useHistory();
    const routeToSearch = useCallback(
        (searchArguments: Partial<SearchArguments>) => {
            const inputAsRecord = searchArguments as Record<string, unknown>;
            const orderedInput = Object.keys(inputAsRecord).sort().reduce(
                (obj, key) => {
                    const value = inputAsRecord[key];
                    if (value == null) {
                        return obj;
                    }
                
                    return {
                        ...obj,
                        [key]: value,
                    };
                },
                {},
            );

            const stringified = JSON.stringify(orderedInput);
            const encoded = Buffer.from(stringified, 'ascii').toString('base64');
            const searchId = Buffer.from(`Search:${encoded}`).toString('base64');
            history.push(`search?id=${searchId}`);
        },
        [history],
    );

    return routeToSearch;
}

export default useRouteToSearch;
