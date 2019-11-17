import React from 'react';

const Input = ({ error, touched, label, children, required }) => {
    return <div className="form-group">
        <label className="form-label">{label}
            {required
                ? <span className="required">*</span>
                : null}
        </label>
        {children}
        {error && touched ? <div className="invalid-feedback d-flex">{error}</div> : null}
    </div>
}

export default Input;
