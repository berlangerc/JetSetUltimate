import React, { Fragment } from 'react'
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/utils';
import classnames from 'classnames';
import Divider from '../../Components/Divider/Divider';

const renderTeams = (teams) => {
    if (teams && teams.length) {
        return <div>{teams.map(team => team.Name).join(', ')}</div>
    }
}

const generateTournamentItems = ({ tournaments, goToPlayerList, editTournament }) => {

    if (tournaments) {
        return tournaments
            .map((tournament, index) => {
                return <Fragment key={index}>
                    <div className="tournament-tile-list-item">
                        <div className="tournament-title">{tournament.Name}</div>
                        <div>{formatDate(tournament.StartDate)} - {formatDate(tournament.EndDate)}</div>
                        <div>{tournament.Location}</div>
                        {renderTeams(tournament.Teams)}
                        <div>
                            <button onClick={goToPlayerList(tournament.id)} className="btn btn-warning ion-ios-people"></button>
                            <button onClick={editTournament(tournament.id)} className="btn btn-primary ion-ios-build"></button>
                        </div>
                    </div >
                    <Divider />
                </Fragment>
            });
    }
}

const TournamentTileList = ({ className, ...props }) => {
    return (
        <div className={classnames(className, 'tournament-tile-list')}>
            {generateTournamentItems(props)}
        </div>
    )
}

TournamentTileList.propTypes = {

}

export default TournamentTileList
