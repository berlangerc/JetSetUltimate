import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../../components/Icon';
import { Link, NavLink } from 'react-router-dom';
import classnames from 'classnames';

const activeClassName = (isActive) => {
    return classnames("nav-link", { "active": isActive })
};

const SideBarMenuItem = ({ label, icon, path, exact }) => {
    return (
        <li className="nav-item">
            <NavLink to={path}
                exact={exact}
                className={"nav-link"}
                activeClassName={"active"} >
                <span className="menu-title">{label}</span>
                <Icon icon={icon} />
            </NavLink>
        </li>
    )
}

SideBarMenuItem.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.any.isRequired,
    path: PropTypes.string.isRequired,
    current: PropTypes.string,
}

export default SideBarMenuItem;