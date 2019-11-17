import React from 'react';
import PropTypes from 'prop-types';

import './SingleInput.css';

const SingleInput = (props) => {
    let { error, touched, value, name, label } = props.attributes;
    return (
        <div className="form-group">
            <label className="form-label">{label}</label>
            <input
                className={`form-control ${(error && touched && 'is-invalid') || ''}`}
                name={name}
                type={props.inputType}
                value={value}
                onChange={props.onChange}
                placeholder={props.placeholder} />
            {error && touched && <div className="invalid-feedback">{error}</div>}
        </div>
    )
};

SingleInput.propTypes = {
    inputType: PropTypes.oneOf(['text', 'number', 'password']).isRequired,
    placeholder: PropTypes.string,
};

export default SingleInput;  