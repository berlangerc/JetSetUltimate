import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import AuthenticatedMembersArea from './AuthenticatedMembersArea';
import Login from './Login/Login';
import RequestPasswordReset from './PasswordReset/RequestPasswordReset';
import CompletePasswordReset from './PasswordReset/CompletePasswordReset';
import './membersArea.css';
import { getTeams } from '../store/actions/teamsActions.js';

export class MembersArea extends Component {

    componentDidMount() {
        this.props.getTeams();
    }
    render() {
        const { user } = this.props.user;
        return (
            <div className="memberzone">
                <Switch>
                    <Route exact path='/login' component={Login} />
                    <Route exact path='/passwordreset' component={RequestPasswordReset} />
                    <Route exact path='/passwordreset/:token' component={CompletePasswordReset} />
                    <Route path='/member' component={() => {
                        return user
                            ? <AuthenticatedMembersArea />
                            : <Login />
                    }} />
                </Switch>

            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userData
})

const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: bindActionCreators(getTeams, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MembersArea)
