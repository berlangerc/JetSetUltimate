import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import Icon from '../../../components/Icon';

class Tabs extends Component {
    renderTabs() {
        return this.props.routes.map(({ path, label, icon, exact }, index) => {
            return <div className="tab" key={index}>
                <NavLink to={path} activeClassName="active" exact={exact}>
                    <div className="d-none d-sm-block">{label}</div>
                    <div className="d-block d-sm-none"><Icon icon={icon} /></div>
                    <div className="bar"></div>
                </NavLink>
            </div>

        });
    }

    render() {
        return (
            <div className="tabs">
                {this.renderTabs()}
            </div>
        )
    }
}

Tabs.propTypes = {
    routes: PropTypes.array.isRequired,
}

export default Tabs;
