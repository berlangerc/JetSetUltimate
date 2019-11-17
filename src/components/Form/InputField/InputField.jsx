import React from 'react'
import PropTypes from 'prop-types';
import classnames from 'classnames';

const InputField = ({ hasError, ...props }) => {
    return <input {...props} className={classnames("input-field form-control", { "is-invalid": hasError })} />
}

InputField.defaultProps = {
    value: '',
    placeholder: '',
    disabled: false
}

InputField.prototypes = {
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string
}

export default InputField
