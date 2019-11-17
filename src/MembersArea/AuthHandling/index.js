import React, { Component } from 'react';
import { connect } from 'react-redux'

import PermissionDenied from '../AuthHandling/PermissionDenied';
import { allowedRolesIncludeUserRoles } from '../../utils/Auth';

export default function Authorization(allowedRoles) {
    return (WrappedComponent) => {

        class AuthRouter extends Component {
            render() {
                const { isAuthenticated, user } = this.props;

                if (isAuthenticated && allowedRoles && allowedRolesIncludeUserRoles(allowedRoles, user.roles)) {
                    return <WrappedComponent {...this.props} />;
                } else {
                    return <PermissionDenied />
                }
            }
        }

        function mapStateToProps(state) {

            const { isAuthenticated, user } = state.userData;

            return {
                isAuthenticated,
                user
            }
        }

        return connect(mapStateToProps)(AuthRouter)
    }
}
