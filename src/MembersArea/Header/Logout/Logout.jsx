import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect, } from 'react-redux'
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { logout } from './../../../store/actions/authActions';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';
// import eee from '@fortawesome/fontawesome-free';
import Icon from '../../../components/Icon';

class Logout extends Component {
    constructor(props) {
        super(props)

        this.logout = this.logout.bind(this);
    }

    logout() {
        this.props.logout();
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="logout-wrapper" onClick={this.logout}>
                <a ><Icon icon={faPowerOff} /></a>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: bindActionCreators(logout, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Logout));
