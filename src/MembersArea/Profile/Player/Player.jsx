import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import PlayerInfoForm from './PlayerInfoForm';
import Loader from '../../../components/Loader/Loader';
import { updatePlayerInfo } from '../../../store/actions/accountActions';
import { resetOthers } from '../../../store/actions/apiState';

import { MYPROFILE_PLAYER } from '../../../store/api/apiStates';

class Player extends Component {

    componentDidMount() {
        this.props.resetOthers(MYPROFILE_PLAYER)
    }

    render() {
        const { user, status } = this.props;
        return (
            <div>
                {user
                    ? <PlayerInfoForm user={user} updatePlayerInfo={this.props.updatePlayerInfo} playerStatus={status} />
                    : <Loader />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const t = _.get(state.apiState, MYPROFILE_PLAYER);
    return {
        user: state.userData.user || {},
        status: _.get(state.apiState, MYPROFILE_PLAYER, {})
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updatePlayerInfo: bindActionCreators(updatePlayerInfo, dispatch),
        resetOthers: bindActionCreators(resetOthers, dispatch)
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Player));
