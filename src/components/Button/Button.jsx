import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';

const Button = ({ onClick, label, id, disabled, className }) => {
    return (
        <button onClick={onClick} id={id} disabled={disabled} className={classnames('js-button', className)}>{label}</button>
    )
}

Button.defaultProps = {
    disabled: false
};

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    id: PropTypes.string,
};

export default Button;