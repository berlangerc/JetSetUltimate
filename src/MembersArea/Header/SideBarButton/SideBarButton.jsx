import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';

const SideBarButton = ({ toggleSideMenu, className }) => (
    <button
        onClick={toggleSideMenu}
        className={classnames("navbar-toggler align-self-center", className)}>
        <span className="sr-only">
            Toggle navigation
        </span>
        <FontAwesomeIcon icon={faBars} />
    </button>
);

SideBarButton.propTypes = {
    toggleSideMenu: PropTypes.func.isRequired,
    className: PropTypes.string
};

SideBarButton.defaultProps = {
    className: ''
}

export default SideBarButton;
