import React from 'react';
import DatePicker from 'react-datepicker';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

type Props ={
    pickedDate: Date,
    setPickedDate: (date:Date)=>void,
}

type CustomInputType = {
    onClick: () => void,
    value: string,
    placeholder:string,
}

type RefType=HTMLLabelElement

const DatePickerComponent = ({ pickedDate, setPickedDate }: Props) => {

    const CustomInput = React.forwardRef<RefType, CustomInputType>(({ onClick, value, placeholder }, ref) => {
        return (
            <CustomDatePickDiv>
                <label onClick={onClick} ref={ref}>
                    {value || placeholder}
                </label>
                <FontAwesomeIcon icon={faCalendarAlt} onClick={onClick} />
            </CustomDatePickDiv>
        );
    });
    CustomInput.displayName = 'CustomInput';

    return (
        <DatePickerDiv>
            <DatePicker
                customInput={<CustomInput onClick={() => ''}
                    placeholder='select the date' value='Select'/>}
                dateFormat="dd-MM-yyyy"
                minDate={new Date()}
                onChange={date => date instanceof Date && setPickedDate(date)}
                selected={pickedDate}
            />
        </DatePickerDiv>
    );
};

export default DatePickerComponent;

const DatePickerDiv = styled.div`
  position: relative;
`;

const CustomDatePickDiv = styled.div`
    text: '#fff';
    background: '#000';
    primary: '#0cf';
  border: solid 0.1em #cbd4c9;
  border-radius: 0.25em;
  padding: 0.3em 1.6em 0 1.6em;
`;
