import { useEffect, useRef } from 'react';
import { useDisclosure } from '@chakra-ui/react';

function useDisclosureOnByDefault(openByDefault: boolean) {
    const wasEverOpen = useRef(false);
    const disclosure = useDisclosure();

    useEffect(() => {
        if (!wasEverOpen.current && !disclosure.isOpen && openByDefault) {
            disclosure.onOpen();
        }
        if (disclosure.isOpen) {
            wasEverOpen.current = true;
        }
    }, [disclosure, openByDefault]);

    return disclosure;
}

export default useDisclosureOnByDefault;
