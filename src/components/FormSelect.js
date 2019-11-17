import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

export default class FormSelect extends Component {

    constructor(props) {
        super();

        // calculate value for select
        let value = '';
        if (props.value !== '') {
            value = props.value
        }
        else if (props.defaultValue && props.defaultValue !== '') { // not empty
            value = props.defaultValue
        }
        else if (React.Children.toArray(props.children).length > 0) {
            let childrenArray = React.Children.toArray(props.children);
            value = childrenArray[0].props.value;
        }
        else {
            value = ''
        }

        // set state
        this.state = {
            onChangeParent: props.onChange,
            defaultValue: props.defaultValue,
            value
        }
        this.onChangeValue = this.onChangeValue.bind(this);

    }

    onChangeValue(evt) {
        this.setState({ value: evt.target.value });
        this.state.onChangeParent(evt, this.props.id);
    }

    componentDidMount() { // set 
        let evt = {
            target: {
                value: this.state.value
            }
        }
        this.state.onChangeParent(evt, this.props.id);
    }

    render() {
        const { label, type, largeRow, id } = this.props;
        return (
            <Col xs={12} md={largeRow ? 12 : 6} className="form-field" id={id}>
                <Row className="form-field">
                    <Col xs={12} md={largeRow ? 12 : 4} lg={largeRow ? 12 : 3}  >
                        <label>{label}</label>
                    </Col>
                    <Col xs={12} md={largeRow ? 12 : 6} lg={largeRow ? 12 : 7}>
                        <select type={type}
                            onChange={this.onChangeValue}
                            value={this.state.value}
                        >
                            {this.props.children}
                        </select>
                    </Col>
                </Row>
            </Col>)
    }
}
