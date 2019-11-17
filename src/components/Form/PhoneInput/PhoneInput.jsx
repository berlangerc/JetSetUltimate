import React from 'react';
import Input from '../Input/Input';
import PhoneInputReact from 'react-phone-number-input';
import classnames from 'classnames';
function PhoneInput({ value, onChange, inputClassName, setFieldValue, name, ...inputProps }) {
    return (
        <Input {...inputProps}>
            <PhoneInputReact
                {...{ inputClassName: classnames('input-field', inputClassName) }}
                country="BE"
                name={name}
                value={value}
                international={false}
                onChange={(value) => setFieldValue(name, value)} />
        </Input>
    )
}
PhoneInput.defaultProps = {
    inputClassName: ''
}

export default PhoneInput
