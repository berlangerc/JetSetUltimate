import React from 'react'
import FormSelect from '../FormSelect/FormSelect';

export default function GenderSelect(props) {
    return (
        <FormSelect
            {...{
                ...props,
                type: 'select',
                isRequired: true
            }}>
            <option value="male">Man</option>
            <option value="female">Vrouw</option>
        </FormSelect >
    )
}
