import type { HTMLAttributes } from 'react';

import React from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './date-picker.css';

interface Props {
  isClearable?: boolean,
  onChange: (date: Date) => any,
  selectedDate: Date | undefined,
  showPopperArrow?: boolean,
}

const DatePicker = ({
    selectedDate,
    onChange,
    isClearable = false,
    showPopperArrow = false,
    ...props
}: Props) => {
    return (
        <ReactDatePicker
            isClearable={isClearable}
            onChange={onChange}
            selected={selectedDate}
            showPopperArrow={showPopperArrow}
            {...props}
        />
    );
};

export default DatePicker;
