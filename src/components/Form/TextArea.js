import React from 'react';

import './TextArea.css';

export default class TextArea extends React.Component {

    render() {
        let { name, value, onChange, onBlur } = this.props;

        return (
            <textarea className="form-control"
                name={name}
                onChange={onChange} onBlur={onBlur}
                value={value}
                rows={10}
            />

        )
    }
}