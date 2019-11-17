import React, { Component } from 'react';
import jwt from 'jsonwebtoken';
import Link from 'react-router-dom/Link';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

import PasswordForm from './PasswordForm';
import { resetPassword } from '../../store/actions/authActions';
import CardWithoutFrame from '../Components/CardWithoutFrame/CardWithoutFrame';

class CompletePasswordReset extends Component {

    constructor(props) {
        super(props);

        const token = props.match.params.token;
        const decodedToken = jwt.decode(token);
        const currentTimeInSeconds = new Date().getTime() / 1000;
        this.state = {
            token,
            expired: !(decodedToken && decodedToken.exp && decodedToken.exp > currentTimeInSeconds),
            isRequesting: false
        }
        this.resetPassword = this.resetPassword.bind(this);
    }

    resetPassword(password) {
        this.props.resetPassword(this.state.token, password);
        this.setState({ isRequesting: true });
    }

    renderPassword() {
        if (!this.state.isRequesting) {
            return <Grid id="loginForm">
                <PasswordForm savePassword={this.resetPassword} />
            </Grid>
        }
        else {
            if (this.props.loading) {
                return <p>Loading</p>
            }
            if (this.props.error) {
                return <div>
                    <p>Fout bij het resetten van uw wachtwoord.
                        Indien u dit nog eens hebt, mag u gerust een mailtje sturen naar info@jetsetultimate.be.
                        Mogelijke redenen zijn:
                    </p>
                    <ul>
                        <li>Wachtwoord link is vervallen (20 minuten)</li>
                        <li>Wachtwoord link is al gebruikt</li>
                    </ul>
                </div>
            }
            return <p>Uw wachtwoord is gereset</p>
        }

    }

    renderExpired() {
        const currentPath = this.props.location.pathname;
        const resetPasswordRequestUrl = currentPath.substring(0, currentPath.lastIndexOf("/"));

        return <p>
            Wachtwoordlink is vervallen. Klik hier om uw wachtwoord te resetten <br />
            <Link to={resetPasswordRequestUrl}> Vraag wachtwoord reset aan </Link>
        </p>
    }

    render() {
        return (
            <CardWithoutFrame id="complete-password-reset">
                <h1>Wachtwoord instellen</h1>
                {this.state.expired
                    ? this.renderExpired()
                    : this.renderPassword()}

            </CardWithoutFrame>
        );
    }
}

function mapStateToProps(state) {

    const { password_reset_succeeded, loading, error } = state.userData;

    return {
        password_reset_succeeded,
        loading,
        error
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        resetPassword: (token, password) => dispatch(resetPassword(token, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(CompletePasswordReset)