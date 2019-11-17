import React from 'react';
// Or import the input component
import DayPickerInput from 'react-day-picker/DayPickerInput';

import 'react-day-picker/lib/style.css';
import Input from '../Form/Input/Input';
import 'moment/locale/nl-be';
import 'moment/locale/be';


import MomentLocaleUtils, {
    formatDate,
    parseDate,
} from 'react-day-picker/moment';


export default function DayPicker({ value, ...props }) {
    return (
        <Input {...props}>
            <DayPickerInput {...{
                value: new Date(value),
                inputProps: { className: 'input-field form-control' },
                formatDate: formatDate,
                parseDate: parseDate,
                placeholder: `${formatDate(new Date())}`,
                locale: 'be'
            }} />

        </Input>
    )
}
