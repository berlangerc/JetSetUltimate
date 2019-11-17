import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import { faUser, faPhone, faGamepad, faToolbox } from '@fortawesome/free-solid-svg-icons';
import { } from '@fortawesome/free-regular-svg-icons';

import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';
import Tabs from '../Components/Tabs/Tabs';
import { buildRouteStructure, renderRoutes } from '../AuthHandling/RoutesCreator';
import Settings from './Settings/Settings';
import Info from './Info/Info';
import Player from './Player/Player';

const routes = [
    {
        path: "/",
        label: 'Info',
        component: Info,
        exact: true,
        icon: faUser,
    },
    {
        path: "/player",
        label: 'Speler',
        component: Player,
        icon: faGamepad
    },
    {
        path: "/communication",
        label: "Communicatie",
        component: () => <div>Communicatie</div>,
        icon: faPhone
    },
    {
        path: "/settings",
        label: "Instellingen",
        component: Settings,
        icon: faToolbox
    }
];

class Profile extends Component {

    constructor(props) {
        super(props)

        this.state = {
            routes: buildRouteStructure(props.match.path, routes, props.roles)
        }
    }

    render() {
        const { routes } = this.state;
        return (
            <ContentCard>
                <ContentCardBody>
                    <h3>Profiel</h3>
                    <Tabs routes={routes} />
                    {renderRoutes(routes)}
                </ContentCardBody>

            </ContentCard>
        )
    }
}
// Profile.propTypes = {
//     prop: PropTypes
// }

const mapStateToProps = (state) => ({
    "test": "test"
})

const mapDispatchToProps = {
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));
