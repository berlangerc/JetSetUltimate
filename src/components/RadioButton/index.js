import React from 'react';

import './radioButton.css';

export default class RadioButton extends React.Component {

    render() {
        let { onChange, value } = this.props;

        return (
            <div className="buttonRadio">
                <input checked={value} type="checkbox" onChange={onChange} />
            </div>
        )
    }
}