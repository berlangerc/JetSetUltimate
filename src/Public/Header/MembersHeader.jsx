import React, { Component, Fragment } from 'react';


import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import {
    NavItem,
    NavLink
} from 'reactstrap';

// import AdminHeader from './AdminHeader';
// import Permit from './../AuthHandling/Permit';

class MembersHeader extends Component {
    constructor() {
        super();
        this.state = {
            isAuthenticated: false
        }
    }



    render() {
        const { isAuthenticated, user } = this.props;
        return (

            // (!isAuthenticated) ?
            <Fragment>
                <NavItem>
                    <NavLink tag={Link} to="/login">Ledenzone</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/register">Nieuw lid</NavLink>
                </NavItem>
            </Fragment>
            // :
            // <Nav pullRight>
            //     <NavDropdown title={user.firstName} id="nav-dropdown">
            //         {/* <MenuItem >Manage account</MenuItem> */}
            //         <LinkContainer exact to="/dashboard">
            //             <NavItem>Overzicht</NavItem>
            //         </LinkContainer>
            //         <Permit allowedRoles={['admin', 'trainer']}>
            //             <LinkContainer exact to="/manage/tournaments">
            //                 <NavItem>Tornooien</NavItem>
            //             </LinkContainer>
            //         </Permit>
            //         <Permit allowedRoles={['admin']}>
            //             <AdminHeader />
            //         </Permit>
            //         <MenuItem divider />
            //     </NavDropdown>

            // </Nav>

        )
    }
}
function mapStateToProps(state) {

    const { isAuthenticated, user } = state.userData;

    return {
        isAuthenticated,
        user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        // logout: () => dispatch(logout())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MembersHeader))