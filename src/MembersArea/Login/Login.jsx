import React, { Component } from 'react';

import LoginForm from './LoginForm';
import CardWithoutFrame from '../Components/CardWithoutFrame/CardWithoutFrame';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

class Login extends Component {
    render() {
        if (this.props.isAuthenticated) {
            return <Redirect to="/member" />;
        }
        else {
            return <CardWithoutFrame id={"login"}>
                < LoginForm />
            </CardWithoutFrame>;
        }
    }
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.userData.isAuthenticated
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login);