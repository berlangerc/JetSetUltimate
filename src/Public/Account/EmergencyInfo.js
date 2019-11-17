import React from 'react';
import InputInfo from './InputInfo';

import FormField from '../../components/FormField';
import { Grid, Row } from 'react-bootstrap';

import Validators from '../../utils/Validators';

export default class EmergencyInfo extends InputInfo {

    constructor() {
        super();
        this.state = {
            fields: {
                contactName: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },
                contactNumber: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.isTelephoneNumber
                },
                contactEmail: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.validateEmail
                },

                doctorName: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                doctorNumber: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.isTelephoneNumber
                }
            }
        };
        this.changeEmergencyInfo = this.changeEmergencyInfo.bind(this);
        this.changeField = this.changeField.bind(this);
    }

    componentWillMount() {
        this.changeEmergencyInfo();
    }


    changeEmergencyInfo() {
        let selectFields = this.state.fields;

        this.props.changeInfoState(selectFields);
    }

    changeField(evt, id) {
        super.changeField(evt, id, this.changeEmergencyInfo);
    }


    render() {
        var { contactName, contactNumber, contactEmail, doctorName, doctorNumber } = this.state.fields;

        return (

            <div className="form" >
                <Grid>
                    <h3>Contact info</h3>
                    <p>Deze informatie is nodig in geval van nood. Hopelijk hebben we dit nooit nodig.</p>
                    <Row>
                        <FormField
                            id={'contactName'}
                            label={'Noodcontact naam'}
                            hasError={contactName.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={contactName.isRequired}
                            errorMessage={contactName.errorMessage}
                        /><FormField
                            id={'contactNumber'}
                            label={'Noodcontact telefoon'}
                            hasError={contactNumber.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={contactNumber.isRequired}
                            errorMessage={contactNumber.errorMessage}
                            constraint={Validators.isTelephoneNumber}
                        /><FormField
                            id={'contactEmail'}
                            label={'Noodcontact email'}
                            hasError={contactEmail.hasError}
                            onChange={this.changeField}
                            type={'email'}
                            isRequired={contactEmail.isRequired}
                            errorMessage={contactEmail.errorMessage}

                        /> </Row>
                    <Row>
                        <FormField
                            id={'doctorName'}
                            label={'Dokter naam'}
                            hasError={doctorName.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={doctorName.isRequired}
                            errorMessage={doctorName.errorMessage}

                        /><FormField
                            id={'doctorNumber'}
                            label={'Dokter telefoon'}
                            hasError={doctorNumber.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={doctorNumber.isRequired}
                            constraint={Validators.isTelephoneNumber}
                            errorMessage={doctorNumber.errorMessage}

                        />
                    </Row>
                </Grid>
            </div>
        )
    }
}