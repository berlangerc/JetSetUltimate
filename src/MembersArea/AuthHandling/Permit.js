import { Component } from 'react';
import { connect } from 'react-redux'

import { allowedRolesIncludeUserRoles } from '../../utils/Auth';

class EnoughPermissionForComponent extends Component {
    render() {
        const { isAuthenticated, user, loading, allowedRoles } = this.props;

        if (!loading && isAuthenticated && allowedRoles && allowedRolesIncludeUserRoles(allowedRoles, user.roles)) {
            return this.props.children;
        } else {
            return null;
        }
    }
}

function mapStateToProps(state) {

    const { isAuthenticated, user, loading } = state.userData;

    return {
        isAuthenticated,
        user, loading
    }
}

export default connect(mapStateToProps)(EnoughPermissionForComponent)
