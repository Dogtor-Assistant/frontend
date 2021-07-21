import type { SetStateAction } from 'react';

import React, { useState } from 'react';
import Select from 'react-select';
import { useColorMode, useMultiStyleConfig } from '@chakra-ui/react';

type Doctor = {
    id: string,
    firstname: string,
    lastname: string,
    services: {
        id: string,
        serviceName: string,
    }[],
}

interface ArrayObjectSelectState {
  selectedDoctor: Doctor | null,
}

type Props = {
    docs: Doctor[],
    setValue: React.Dispatch<SetStateAction<string>>,
    setDoctor: React.Dispatch<SetStateAction<Doctor>>,
}

const MySelect = ({ docs, setValue, setDoctor }:Props) => {

    const [selectedDoctor, setSelectedDoctor] = useState<ArrayObjectSelectState['selectedDoctor']>();
    const inputStyles = useMultiStyleConfig('Input', {});

    const { colorMode } = useColorMode();
    
    const handleChange =
         (option: Doctor | null) => {
             setSelectedDoctor(option);
             setDoctor({
                 firstname: option?.firstname || '',
                 id: option?.id || '',
                 lastname: option?.lastname || '',
                 services: option?.services.map(s => ({
                     id: s.id,
                     serviceName: s.serviceName,
                 })) || [],
             });
         };

    const [changingInput, setChangingInput] = useState('');
    const chakraStyles = {
        control: (provided: Record<string, unknown>) => ({
            ...provided,
            background: 'inherit',
           
        }),
        input: (provided: Record<string, unknown>) => ({
            ...provided,
            background: 'inherit',
            color: 'inherit',
        }),
        menu: (provided: Record<string, unknown>) => ({
            ...provided,
            background: colorMode === 'light' ? 'white' : '#365264', //skyblue
            color: 'black',
        }),
        option: (provided: Record<string, unknown>) => ({
            ...provided,
            color: 'inherit',
        }),
        singleValue: (provided: Record<string, unknown>) => ({
            ...provided,
            color: 'inherited',
        }),
       
    };

    return (
        <Select<Doctor>
            backspaceRemovesValue={true}
            getOptionLabel={(doctor: Doctor) => doctor.firstname.concat(' '.concat(doctor.lastname))}
            getOptionValue={(doctor: Doctor) => doctor.id}
            isClearable={true}
            onChange={handleChange}
            onInputChange={e => setChangingInput(e)}
            onKeyDown={e => {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    setValue(changingInput);
                } }}
            openMenuOnClick={true}
            options={docs}
            placeholder={'Search for a doctor'}
            styles={{
                ...chakraStyles,
                ...inputStyles,
            }}
            value={selectedDoctor}
        />
    );
};

export default MySelect;
