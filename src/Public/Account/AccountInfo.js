import React from 'react';
import { Grid, Row } from 'react-bootstrap';
import InputInfo from './InputInfo';

import FormField from '../../components/FormField';
import FormSelect from '../../components/FormSelect';

import Validators from '../../utils/Validators';
import { PHONENUMBER } from '../../utils/constants';

import moment from 'moment';

export default class AccountInfo extends InputInfo {

    constructor() {
        super();
        this.state = {
            fields: {

                firstName: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },
                lastName: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                },
                email: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.validateEmail
                },

                password: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                confirmedPassword: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                phoneNumber: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.isTelephoneNumber
                },

                gender: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                birthday: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                streetName: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                number: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },

                postalcode: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    constraint: Validators.isNumber,
                    errorMessage: ''
                },

                city: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: ''
                },
                nationality: {
                    hasError: false,
                    value: '',
                    defaultValue: 'Belgium',
                    isRequired: true,
                    errorMessage: ''

                }
            },
            countries: []
        };
        this.changeAccountInfo = this.changeAccountInfo.bind(this);
        this.changeField = this.changeField.bind(this);
        this.getCountries = this.getCountries.bind(this);
        this.changeBirthdate = this.changeBirthdate.bind(this);
        this.changePassword = this.changePassword.bind(this);
    }

    componentWillMount() {
        this.changeAccountInfo();
        this.getCountries();
    }

    changeAccountInfo() {
        let selectFields = this.state.fields;
        this.props.changeInfoState(selectFields);
    }

    changeField(evt, id) {
        super.changeField(evt, id, this.changeAccountInfo);
    }

    getCountries() {
        fetch(`/api/countries`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }).then(result => {
            result.json()
                .then(result => {
                    this.setState({ countries: result })
                })
                .catch(error => {
                    console.log(error);
                })
        })
    }


    changeBirthdate(evt, id) {
        let isNotUnderage = moment(evt.target.value).isBefore(moment().subtract(18, 'y'))
        this.props.changeUnderAge(!isNotUnderage);

        this.changeField(evt, id);
    }

    changePassword(evt, id) {

        let fields = this.state.fields;
        let value = evt.target.value;
        let errorMessage = '';
        let errorMessageIfNotMatching = 'De paswoord controle is gefaald, uw paswoorden verschillen.'
        let notMatching = false;

        if (id === 'password') {
            if (value !== fields.confirmedPassword.value) {
                notMatching = true;
                errorMessage = errorMessageIfNotMatching;
            }
            this.changeFieldWithProperties(fields, notMatching, fields.confirmedPassword.value, errorMessage, 'confirmedPassword');
            this.changeFieldWithProperties(fields, notMatching, value, errorMessage, 'password');
        }
        else {
            if (value !== fields.password.value) {
                notMatching = true;
                errorMessage = errorMessageIfNotMatching;
            }
            this.changeFieldWithProperties(fields, notMatching, value, errorMessage, 'confirmedPassword');
            this.changeFieldWithProperties(fields, notMatching, fields.password.value, errorMessage, 'password');


        }

        this.changeAccountInfo();

    }

    createCountriesOptions() {
        let items = [];
        for (let i = 0; i < this.state.countries.length; i++) {
            items.push(<option key={i} >{this.state.countries[i].Name}</option>);
        }
        return items;
    }

    render() {
        var { firstName
            , lastName
            , email
            , password
            , confirmedPassword
            , birthday
            , city
            , gender
            , nationality
            , number, phoneNumber, postalcode, streetName
        } = this.state.fields;

        return (
            <div className="form">
                <Grid>
                    <h3>Algemene info</h3>
                    <p>De informatie in deze sectie moet de info van de speler zijn niet die van de ouders.
                        Deze moet dus van de speler zijn en dit voor de verzekering.
                        De informatie van de ouders wordt later gevraagd.
                    </p>
                    <Row>
                        <FormField
                            id={'firstName'}
                            label={'Voornaam'}
                            type={'text'}
                            isRequired={firstName.isRequired}
                            onChange={this.changeField}
                            hasError={firstName.hasError}
                            errorMessage={firstName.errorMessage}
                        />
                        <FormField
                            id={'lastName'}
                            label={'Achternaam'}
                            type={'text'}
                            hasError={lastName.hasError}
                            onChange={this.changeField}
                            isRequired={lastName.isRequired}
                            errorMessage={lastName.errorMessage}
                        />
                        <FormField
                            id={'email'}
                            label={'Email (=login)'}
                            hasError={email.hasError}
                            type={'email'}
                            onChange={this.changeField}
                            isRequired={email.isRequired}
                            errorMessage={email.errorMessage}
                        />


                        <FormField
                            id={'phoneNumber'}
                            label={'Telefoon'}
                            hasError={phoneNumber.hasError}
                            type={'text'}
                            onChange={this.changeField}
                            isRequired={phoneNumber.isRequired}
                            errorMessage={phoneNumber.errorMessage}
                            placeholder={PHONENUMBER}
                        />
                    </Row>
                    <Row>
                        <FormField
                            id={'password'}
                            label={'Paswoord'}
                            hasError={password.hasError}
                            type={'password'}
                            onChange={this.changePassword}
                            isRequired={password.isRequired}
                            errorMessage={password.errorMessage}
                        />
                        <FormField
                            id={'confirmedPassword'}
                            label={'Paswoord controle'}
                            hasError={confirmedPassword.hasError}
                            type={'password'}
                            onChange={this.changePassword}
                            isRequired={confirmedPassword.isRequired}
                            errorMessage={confirmedPassword.errorMessage}
                        />
                        <FormSelect
                            id={'gender'}
                            label={'Geslacht'}
                            type={'select'}
                            value={gender.value}
                            isRequired={gender.isRequired}
                            onChange={this.changeField}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </FormSelect>
                        <FormField
                            id={'birthday'}
                            label={'Geboortedag'}
                            hasError={birthday.hasError}
                            type={'date'}
                            onChange={this.changeBirthdate}
                            isRequired={birthday.isRequired}

                        />
                        <FormSelect
                            id={'nationality'}
                            label={'Nationaliteit'}
                            type={'select'}
                            value={nationality.value}
                            onChange={this.changeField}
                            isRequired={nationality.isRequired}
                            defaultValue={nationality.defaultValue}>
                            {
                                this.createCountriesOptions()
                            }
                        </FormSelect>
                        <FormField
                            id={'streetName'}
                            label={'Straat'}
                            hasError={streetName.hasError}
                            type={'text'}
                            onChange={this.changeField}
                            isRequired={streetName.isRequired}
                            errorMessage={streetName.errorMessage}

                        />
                        <FormField
                            id={'number'}
                            label={'Nummer/bus'}
                            hasError={number.hasError}
                            type={'text'}
                            onChange={this.changeField}
                            isRequired={number.isRequired}
                            errorMessage={number.errorMessage}
                        />
                        <FormField
                            id={'postalcode'}
                            label={'Postcode'}
                            hasError={postalcode.hasError}
                            type={'text'}
                            onChange={this.changeField}
                            isRequired={postalcode.isRequired}
                            errorMessage={postalcode.errorMessage}
                        /><FormField
                            id={'city'}
                            label={'Stad'}
                            hasError={city.hasError}
                            type={'text'}
                            onChange={this.changeField}
                            isRequired={city.isRequired}
                            errorMessage={city.errorMessage}
                        />
                    </Row>
                </Grid>
            </div >
        )
    }
}
