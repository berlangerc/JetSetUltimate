import React, { Component } from 'react';

import TournamentOverview from './TournamentOverview/TournamentOverview';
import AddTournament from './AddTournament/AddTournament';
import TournamentDetail from './TournamentDetail/TournamentDetail';
import PlayerList from './PlayerList/PlayerList';

import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';

import { buildRouteStructure, renderRoutes } from '../AuthHandling/RoutesCreator';

const routes = [
    {
        path: "",
        exact: true,
        component: TournamentOverview
    },
    {
        path: "add",
        component: AddTournament
    },
    {
        path: "edit/:tournamentId",
        component: TournamentDetail
    },
    {
        path: "list/:tournamentId",
        component: PlayerList
    }
]
class TournamentManagement extends Component {
    constructor(props) {
        super(props);
        this.addTournament = this.addTournament.bind(this);
    }
    addTournament() {
        this.props.history.push('/manage/tournaments/add');
    }
    render() {
        const match = this.props.match.path;
        const routesWithParent = buildRouteStructure(match, routes);

        return (
            <ContentCard>
                <ContentCardBody>
                    {renderRoutes(routesWithParent)}
                </ContentCardBody>
            </ContentCard>

        );
    }
}

export default TournamentManagement;
