import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import SingleInput from '../../components/Form/SingleInput';
import validators from '../../utils/Validators';
import { requestPasswordReset } from '../../store/actions/authActions';
import CardWithoutFrame from '../Components/CardWithoutFrame/CardWithoutFrame';
import { defineAttributesForField } from '../../utils/utils';
import LabelInput from '../../components/Form/LabelInput/LabelInput';
import GoToLoginButton from '../Login/GoToLoginButton';

class RequestPasswordReset extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: '',
            touched: false,
            value: '',
            isRequesting: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.resetPassword = this.resetPassword.bind(this);
    }

    handleChange(event) {
        const givenvalue = event.target.value
        const validation = this.validateEmail(givenvalue);

        this.setState({
            value: givenvalue,
            error: validation,
            touched: true
        });
    }

    validateEmail(email) {
        if (!email || email === '') {
            return 'Vul een E-mail adres in'
        }

        const validationCheck = validators.validateEmail(email);
        if (validationCheck.returnedSatisfied) {
            return;
        }
        else {
            return validationCheck.returnedErrorMessage;
        }
    }

    resetPassword() {
        this.setState({ isRequesting: true });
        this.props.requestPasswordReset(this.state.value);
    }

    render() {
        const { error, touched, value } = this.state;
        return (
            <CardWithoutFrame id="request-password-reset">
                <h1>Wachtwoord vergeten</h1>
                {this.state.isRequesting && !this.props.error && this.props.password_reset_requested
                    ? (!this.props.loading
                        ? <Fragment>
                            <p>Wachtwoord resetten is aangevraagd voor {this.props.password_reset_requested} en is 20 minuten geldig.</p>
                            <GoToLoginButton />
                        </Fragment>
                        : <p>laden</p>)
                    : <div>
                        <p>
                            Weet u het wachtwoord niet meer? Vul hieronder je e-mailadres in.
                            We sturen dan binnen enkele minuten een e-mail waarmee een nieuw wachtwoord kan worden aangemaakt.
                        </p>
                        <div className="col-md-10 offset-md-1">
                            <LabelInput
                                {...{
                                    onChange: this.handleChange,
                                    onBlur: this.handleChange,
                                    touched, error,
                                    name: 'email',
                                    label: 'E-mailadres',
                                    value
                                }}
                            />
                            <button id="requestPasswordReset" className='btn' onClick={this.resetPassword} disabled={!touched || error}>Resetten</button>
                        </div>
                    </div>
                }
            </CardWithoutFrame>
        );
    }
}

function mapStateToProps(state) {

    const { password_reset_requested, loading, error } = state.userData;

    return {
        password_reset_requested,
        loading,
        error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        requestPasswordReset: (email) => dispatch(requestPasswordReset(email))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestPasswordReset)