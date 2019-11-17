import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Button from '../../components/Button/Button';
import { withRouter } from 'react-router-dom';

class GoToLoginButton extends Component {

    constructor(props) {
        super(props)

        this.goToLogin = this.goToLogin.bind(this);
    }

    goToLogin() {
        this.props.history.push('/login');
    }

    render() {
        return <Button onClick={this.goToLogin} label={"Back to login"} />
    }
}

export default withRouter(GoToLoginButton);

