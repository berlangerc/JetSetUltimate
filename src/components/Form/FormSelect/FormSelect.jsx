import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Input from '../Input/Input';

export default class FormSelect extends Component {

    render() {
        const { name, onChange, value, ...props } = this.props;
        return (
            <Input {...props}>
                <select type={'select'}
                    onChange={onChange}
                    value={value}
                    name={name}
                    className="input-field"
                >
                    {this.props.children}
                </select>
            </Input>
        );
    }
}
