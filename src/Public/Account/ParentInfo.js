import React from 'react';
import InputInfo from './InputInfo';

import FormField from '../../components/FormField';
import { Grid, Row } from 'react-bootstrap';

import Validators from '../../utils/Validators';
import { PHONENUMBER } from '../../utils/constants';

export default class ParentInfo extends InputInfo {

    constructor(props) {
        super(props);

        this.state = {
            fields: {
                parentOneName: {
                    hasError: false,
                    value: '',
                    isRequired: props.isUnderAge,
                    errorMessage: ''
                },

                parentOneNumber: {
                    hasError: false,
                    value: '',
                    isRequired: false,
                    errorMessage: '',
                    constraint: Validators.isTelephoneNumber
                },

                parentOneEmail: {
                    hasError: false,
                    value: '',
                    isRequired: props.isUnderAge,
                    errorMessage: '',
                    constraint: Validators.validateEmail
                },
                parentTwoNumber: {
                    hasError: false,
                    value: '',
                    isRequired: props.isUnderAge,
                    errorMessage: '',
                    constraint: Validators.isTelephoneNumber
                }
            }
        };
        this.changeParentInfo = this.changeParentInfo.bind(this);
        this.changeField = this.changeField.bind(this);
    }

    componentWillMount() {
        this.changeParentInfo();
    }


    changeParentInfo() {
        let selectFields = this.state.fields;

        this.props.changeInfoState(selectFields);
    }

    changeField(evt, id) {
        super.changeField(evt, id, this.changeParentInfo);
    }

    componentWillReceiveProps(nextProps) {
        let fields = this.state.fields;
        fields.parentOneEmail.isRequired = nextProps.isUnderAge;
        fields.parentOneName.isRequired = nextProps.isUnderAge;
        fields.parentOneNumber.isRequired = nextProps.isUnderAge;

        this.setState({
            fields: fields
        })
    }

    // componentDidUpdate(prevProps, prevState) {
    //     this.changeParentInfo();
    // }
    render() {
        var { parentOneName, parentOneEmail, parentOneNumber, parentTwoNumber } = this.state.fields;

        return (

            <div className="form" >
                <Grid>
                    <h3>Parent info</h3>
                    <p>Deze persoon krijgt ook de betaalreminders, en bepaalde info indien het een jeudgspeler is.
                        In de toekomst kan deze speler ook zelf inloggen en zo de account van zijn zoon/dochter beheren.
                    </p>
                    <Row>
                        <FormField
                            id={'parentOneName'}
                            label={'Ouder naam'}
                            hasError={parentOneName.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={parentOneName.isRequired}
                            errorMessage={parentOneName.errorMessage}

                        />
                        <FormField
                            id={'parentOneEmail'}
                            label={'Ouder Email'}
                            hasError={parentOneEmail.hasError}
                            onChange={this.changeField}
                            type={'email'}
                            isRequired={parentOneEmail.isRequired}
                            constraint={Validators.validateEmail}
                            errorMessage={parentOneEmail.errorMessage}

                        /><FormField
                            id={'parentOneNumber'}
                            label={'Ouder telefoon'}
                            hasError={parentOneNumber.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            isRequired={parentOneNumber.isRequired}
                            placeholder={PHONENUMBER}
                            errorMessage={parentOneNumber.errorMessage}

                        />
                        <FormField
                            id={'parentTwoNumber'}
                            label={'Ouder extra telefoon'}
                            hasError={parentTwoNumber.hasError}
                            onChange={this.changeField}
                            type={'text'}
                            placeholder={PHONENUMBER}
                            errorMessage={parentTwoNumber.errorMessage}
                        />
                    </Row>
                </Grid>
            </div >
        )
    }
}