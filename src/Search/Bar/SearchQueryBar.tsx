import React from 'react';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';

import { useSearchQuery } from 'Search/context';

function SearchQueryBar() {
    const [query, setQuery] = useSearchQuery(700);

    return (
        <InputGroup size="lg">
            <InputLeftElement h="68px" paddingLeft={4} pointerEvents="none" >
                <SearchIcon color="gray.300" />
            </InputLeftElement>
            <Input
                onChange={event => setQuery(event.target.value)}
                placeholder="Search for Doctor"
                pr="4.5rem"
                spellCheck="false"
                sx={{
                    border: 'transparent',
                    fontWeight: 'medium',
                    h: '68px',
                    outline: 0,
                    pl: '68px',
                }}
                type="text"
                value={query}
                variant="filled"
            />
                
        </InputGroup>
    );
}

export default SearchQueryBar;
