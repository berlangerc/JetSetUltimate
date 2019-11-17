import React, { Component } from 'react';
import { FormControl, Col, Row } from 'react-bootstrap';
import AwesomeIcon from 'react-fontawesome';

import './FieldGroupWithIcon.css';

export default class FieldGroupWithIcon extends Component {

    // static defaultProps = {}
    // state = {}


    render() {
        const { id, icon, help, ...props } = this.props;
        return (
            <Row className="loginField">
                <Col hidden={true} md={1}>
                    <label className="labelIcon">
                        <AwesomeIcon name={icon} />
                    </label>
                </Col>
                <Col xs={12} ><FormControl {...props} /></Col>
            </Row>
        );
    }
}