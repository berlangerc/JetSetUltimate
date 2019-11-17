import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import InfoForm from './InfoForm';
import Loader from '../../../components/Loader/Loader';
import { updateBasicInfo } from '../../../store/actions/accountActions';
import { MYPROFILE_BASIC } from '../../../store/api/apiStates';
import { resetOthers } from '../../../store/actions/apiState';

class Info extends Component {

    componentDidMount() {
        this.props.resetOthers(MYPROFILE_BASIC);
    }

    render() {
        const { user, status } = this.props;
        return (
            <div>
                {user
                    ? <InfoForm user={user} updateBasicInfo={this.props.updateBasicInfo} infoStatus={status} />
                    : <Loader />
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.userData.user,
        status: _.get(state.apiState, MYPROFILE_BASIC)
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateBasicInfo: bindActionCreators(updateBasicInfo, dispatch),
        resetOthers: bindActionCreators(resetOthers, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Info);
