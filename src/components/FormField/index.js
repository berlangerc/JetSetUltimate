import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import './FormField.css';
import AwesomeIcon from 'react-fontawesome';
import ToolTip from 'react-portal-tooltip'

export default class FormField extends Component {

    constructor(props) {
        super();
        this.state = {
            touched: false,
            onChangeParent: props.onChange,
            constraints: props.constraints,
            value: '',
            isTooltipActive: false
        }

        this.onChange = this.onChange.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }

    onBlur(evt) {
        this.setState({ touched: true })
    }

    onChange(evt) {
        this.setState({ value: evt.target.value });
        this.state.onChangeParent(evt, this.props.id);
    }

    showTooltip() {
        this.setState({ isTooltipActive: true })
    }
    hideTooltip() {
        this.setState({ isTooltipActive: false })
    }

    getClassName() {
        if (this.state.touched === false)
            return '';

        if (this.props.hasError === true)
            return 'error'

        if (this.props.isRequired === true && this.state.touched === true && this.state.value === '') {
            return 'error'
        }

        return 'success'
    }
    render() {
        const { label, id, type } = this.props;
        return (
            <Col xs={12} md={6} className="form-field" id={id}>
                <Row >
                    <Col xs={12} md={4} lg={3}>
                        <label >{label}</label>
                        {this.props.isRequired ? <span className='required'>*</span> : ''}
                    </Col>
                    <Col xs={10} md={6} lg={7}>
                        <input type={type}
                            onBlur={this.onBlur}
                            onChange={this.onChange}
                            className={this.getClassName()}
                            placeholder={this.props.placeholder} />
                    </Col>
                    <Col xs={2} md={1} lg={1}>
                        {this.props.hasError === true ?
                            <div className='sign'>
                                <AwesomeIcon id={"sign-" + id}
                                    className='form-sign'
                                    name={'exclamation-triangle'}
                                    onMouseEnter={this.showTooltip.bind(this)} onMouseLeave={this.hideTooltip.bind(this)}
                                >

                                </AwesomeIcon>
                                <ToolTip active={this.state.isTooltipActive} position="top" arrow="center" parent={"#sign-" + id}>
                                    <div>
                                        <p>{this.props.errorMessage}</p>
                                    </div>
                                </ToolTip>
                            </div> : ''}
                    </Col>
                </Row>
            </Col>
        )
    }
}
