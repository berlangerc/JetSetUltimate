import React from 'react';
import Input from './Input/Input';

export default class Select extends React.Component {

    render() {
        let { name, value } = this.props;

        return (
            <Input
                {...this.props}>
                <select
                    className="form-control"
                    value={value}
                    id={name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}>
                    {this.props.children}
                </select>
            </Input>
        )
    }
}