import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { withFormik, Field } from 'formik';

import PhoneInput from '../../../components/Form/PhoneInput/PhoneInput';
import LabelInput from '../../../components/Form/LabelInput/LabelInput';
import { defineAttributesForField } from '../../../utils/utils';
import formikConfiguration from './formikConfiguration';
import GenderSelect from '../../../components/Form/GenderSelect/GenderSelect';
import DayPicker from '../../../components/DayPicker/DayPicker';
import Button from '../../../components/Button/Button';
import ProgressViewer from '../../../components/ProgressViewer';

export class InfoInnerForm extends React.Component {

    render() {
        const {
            values,
            touched,
            errors,
            // dirty,
            isSubmitting,
            handleChange,
            setFieldValue,
            handleBlur,
            handleSubmit,
            infoStatus,
            // handleReset,
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'firstName', 'voornaam'), required: true }}
                            />
                        </Col>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'lastName', 'achternaam'), required: true }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField({ ...this.props, disabled: true }, 'email', 'Email'), required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <PhoneInput
                                {...{ ...defineAttributesForField(this.props, 'phoneNumber', 'Telefoonnummer'), setFieldValue, required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <GenderSelect
                                {...{ ...defineAttributesForField(this.props, 'gender', 'Geslacht'), required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <DayPicker
                                {...{ ...defineAttributesForField(this.props, 'birthDay', 'Geboortedatum'), required: true }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'streetName', 'Straat'), required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'number', 'Nummer'), required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'postalCode', 'Postcode'), required: true }} />
                        </Col>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'city', 'Stad'), required: true }} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} md={4}>
                            <ProgressViewer {...{ status: infoStatus }}>
                                <Button className="btn btn-outline-primary" disabled={isSubmitting} label={"opslaan"} onClick={handleSubmit} />
                            </ProgressViewer>
                        </Col>
                    </Row>
                </Grid>

            </form >
        )
    }
}

export default withFormik(formikConfiguration)(InfoInnerForm)
