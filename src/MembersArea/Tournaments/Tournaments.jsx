import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TournamentsOverview from './TournamentsOverview/TournamentsOverview';
import SubscribeForTournament from './SubscribeForTournament/SubscribeForTournament';
import UnsubscribeForTournament from './UnsubscribeForTournament/UnsubscribeForTournament';
import PlayerList from '../TournamentManagement/PlayerList/PlayerList';
import { buildRouteStructure, renderRoutes } from '../AuthHandling/RoutesCreator';
import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';

const routes = [
    {
        path: "",
        exact: true,
        component: TournamentsOverview
    },
    {
        path: "subscribe/:tournamentId",
        component: SubscribeForTournament
    },
    {
        path: "unsubscribe/:tournamentId",
        component: UnsubscribeForTournament
    },
    {
        path: "list/:tournamentId",
        component: PlayerList
    }
]
const Tournaments = ({ match }) => {
    const routesWithParent = buildRouteStructure(match.path, routes);

    return (
        <ContentCard>
            <ContentCardBody>
                <div className="tournaments">
                    {renderRoutes(routesWithParent)}
                </div>
            </ContentCardBody>
        </ContentCard>

    )
}

export default Tournaments
