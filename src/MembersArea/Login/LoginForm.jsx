import React, { Component } from 'react';
import { FormGroup, Row, Col, Grid } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux'

import FieldGroupWithIcon from '../../components/FieldGroupWithIcon';
import { login } from '../../store/actions/authActions';
import SingleInput from '../../components/Form/SingleInput';
import LabelInput from '../../components/Form/LabelInput/LabelInput';
import Button from '../../components/Button/Button';

class LoginForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.setEmail = this.setEmail.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.goToHome = this.goToHome.bind(this);
    }

    componentWillReceiveProps(props) {
        if (props.isAuthenticated)
            props.history.push('/member')
    }
    setEmail(event) {
        this.setState({ email: event.target.value })
    }

    setPassword(event) {
        this.setState({ password: event.target.value })
    }

    isEverythingFilledIn(email, password) {

        return (email !== null && email !== '' && password !== null && password !== '')
    }

    loginUser() {
        const { email, password } = this.state;

        this.props.login(email, password)
            .then((response) => {
                if (this.props.user) {
                    this.props.history.push('/member');
                }
            })
    }

    goToHome() {
        this.props.history.push("/");
    }
    render() {
        const { error, isLoading } = this.props;
        return (
            <Grid id="loginForm">
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <LabelInput
                            id="formControlsEmail"
                            type="email"
                            icon="user"
                            placeholder="Email"
                            value={this.state.email}
                            onChange={this.setEmail} />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <LabelInput
                            id="formControlsPassword"
                            icon="lock"
                            type="password"
                            placeholder="Password"
                            value={this.state.password}
                            onChange={this.setPassword}
                        />
                    </Col>
                </Row>
                <Row className="justify-content-center">
                    <div className="error" hidden={!error}>{'Could not login with these credentials'}</div>
                </Row>
                <div className="center-text">
                    <div><Link to="/register">Create new account</Link></div>
                    <div><Link to="/passwordreset">Reset password</Link></div>
                </div>
                <Row className="justify-content-center">
                    <Col xs={12} md={6}>
                        <div className="login-btn-wrapper">
                            <Button id="login-button"
                                onClick={this.loginUser}
                                disabled={!this.isEverythingFilledIn(this.state.email, this.state.password) || isLoading}
                                label="Login" />
                        </div>
                    </Col>
                    <Col xs={12} md={6}>
                        <div className="login-btn-wrapper">
                            <Button id="backTohome"
                                className="neutral"
                                onClick={this.goToHome}
                                label="Hoofdpagina" />
                        </div>
                    </Col>
                </Row>
            </Grid>
        );
    }


}

const mapStateToProps = (state) => {
    return {
        user: state.userData.user,
        error: state.userData.error,
        isLoading: state.userData.loading,
        isAuthenticated: state.userData.isAuthenticated
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => dispatch(login(email, password))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm));