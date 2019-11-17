import React from 'react'
import Input from '../Input/Input';
import Checkbox from '../Checkbox';

const InputCheckbox = ({ value, name, onChange, onBlur, ...props }) => {
    return (
        <Input {...props}>
            <Checkbox
                {...{
                    value,
                    onChange,
                    onBlur,
                    name
                }}
            />
        </Input>
    )
}

export default InputCheckbox;
