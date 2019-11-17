import React from 'react';
import Input from '../Input/Input';
import InputField from '../InputField/InputField';

const LabelInput = ({ touched, error, label, required, ...otherProps }) => {
    return (
        <Input {...{ touched, error, label, required }}>
            <InputField {...{ ...otherProps, hasError: touched && error }} />
        </Input>
    )
}

LabelInput.defaultProps = {
    touched: false,
    error: false,
    disabled: false
}
export default LabelInput
