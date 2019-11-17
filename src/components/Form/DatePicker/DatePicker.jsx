import React from 'react';

import moment from 'moment';

import DateTimePicker from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import Input from '../Input/Input';
import classnames from 'classnames';


require('moment/locale/nl');

export default class DatePicker extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }


    handleChange(e) {
        if (moment.isMoment(e)) {
            this.props.onChange(e.toJSON())
        }
        else {
            this.props.onChange('');
        }
    }

    render() {
        let { value, onBlur, touched, error } = this.props.attributes || this.props;

        return (
            <Input {...{ touched, error, ...this.props }}>
                <DateTimePicker
                    inputProps={{ className: classnames("form-control", { "is-invalid": touched && error }) }}
                    value={moment(value)}
                    dateFormat="DD/MM/YYYY"
                    timeFormat="HH:mm"
                    onChange={this.handleChange}
                    onBlur={onBlur}
                    locale="nl" />
            </Input>

        )
    }
}