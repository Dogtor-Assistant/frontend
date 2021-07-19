import type { SetStateAction } from 'react';

import React, { useState } from 'react';
import Select from 'react-select';

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

    return (
        <Select<Doctor>
            backspaceRemovesValue={true}
            getOptionLabel={(doctor: Doctor) => doctor.firstname.concat(' '.concat(doctor.lastname))}
            getOptionValue={(doctor: Doctor) => doctor.id}
            isClearable={true}
            onChange={handleChange}
            onInputChange={e => setChangingInput(e)}
            onKeyDown={e => {if (e.key === 'Enter') {
                e.preventDefault();
                setValue(changingInput);
            } }}
            openMenuOnClick={false}
            options={docs}
            value={selectedDoctor}
        />
    );
};

export default MySelect;
