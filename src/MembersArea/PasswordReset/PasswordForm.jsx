import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { Row, Col } from 'react-bootstrap';

import LabelInput from '../../components/Form/LabelInput/LabelInput';
import { defineAttributesForField } from '../../utils/utils';

const PasswordForm = (props) => {
    const {
        errors,
        isSubmitting,
        handleSubmit,
    } = props;

    return (
        <form onSubmit={handleSubmit}>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <LabelInput
                        {...{
                            type: 'password',
                            ...defineAttributesForField(props, 'password', 'Wachtwoord')
                        }}
                    />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8}>
                    <LabelInput
                        {...{
                            type: 'password',
                            ...defineAttributesForField(props, 'passwordConfirm', 'Bevestig Wachtwoord')
                        }} />
                </Col>
            </Row>

            <div className="form-controller">
                <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting || errors.length > 0}>
                    Aanpassen
                </button>
            </div>
        </form >
    );
}


export default withFormik({
    mapPropsToValues: (props) => {
        return {
            password: '',
            passwordConfirm: ''
        }
    },

    validationSchema: yup.object().shape({
        password: yup.string().required('Gelieve dit veld in te vullen'),
        passwordConfirm: yup
            .string()
            .test('passwordsAreEqual', 'Wachtwoorden zijn niet hetzelfde', function (value) {
                const { password } = this.parent;
                return password === value;
            }).required('Gelieve dit veld in te vullen')
    }),

    handleSubmit: (values, { setSubmitting, props }) => {
        setSubmitting(true);
        props.savePassword(values.password);
    },
})(PasswordForm);