import React from 'react';

import './checkbox.css';

const Checkbox = ({ onChange, label, value, name }) => {

    return (
        <div className="checkboxke">
            <input name={name} checked={value} type="checkbox" onChange={onChange} />
            {label ? <label>{label}</label> : ''}
        </div>
    )
}
export default Checkbox;