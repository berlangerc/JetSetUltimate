import React from 'react';
import PropTypes from 'prop-types';
// import UserMenu from './userMenu/UserMenu';
// import TaskMenu from './taskMenu/TaskMenu';
// import MessageMenu from './messageMenu/MessageMenu';
import Brand from './Brand/Brand';
import RightNav from './RightNav/RightNav';

const Header = ({ toggleSideMenu, onLogout, collapsed }) => (
  <header
    className="header fixed--header col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <Brand collapsed={collapsed} />
    {/* <nav
      className="navbar navbar-static-top"
      role="navigation">
      <SideBarButton
        toggleSideMenu={toggleSideMenu}
      /> */}
    <RightNav toggleSideMenu={toggleSideMenu} collapsed={collapsed} />

  </header>
);

Header.propTypes = {
  onLogout: PropTypes.func,
  currentView: PropTypes.string,
  toggleSideMenu: PropTypes.func,
  collapsed: PropTypes.bool
};

Header.defaultProps = {
};

export default Header;
