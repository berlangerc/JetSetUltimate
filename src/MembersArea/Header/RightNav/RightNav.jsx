import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import SideBarButton from '../SideBarButton/SideBarButton';
import classnames from 'classnames';
import Logout from '../Logout/Logout';
import Link from 'react-router-dom/Link';
import Button from '../../../components/Button/Button';

export class RightNav extends Component {

    render() {
        const { collapsed, userData } = this.props;
        return (
            <div className={classnames("nav-right d-flex align-items-center", { "collapsed": collapsed })} >
                <SideBarButton toggleSideMenu={this.props.toggleSideMenu} className="d-none d-lg-block" />
                <ul className="navbar-right ml-lg-auto">
                    <li>
                        <Link to='/'>
                            <Button {...{ label: 'Club', onClick: () => { } }} />
                        </Link>
                    </li>
                    <li className="d-none d-sm-block"><p>Hello, {userData.user.firstName}</p></li>
                    <li><Logout /></li>
                </ul>
                <SideBarButton toggleSideMenu={this.props.toggleSideMenu} className="d-block d-lg-none ml-auto" />
            </ div>
        )
    }
}

RightNav.propTypes = {
    toggleSideMenu: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    userData: state.userData
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RightNav);
