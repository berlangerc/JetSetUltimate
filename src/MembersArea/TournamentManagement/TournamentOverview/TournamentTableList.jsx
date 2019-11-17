import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { formatDate } from '../../../utils/utils';


const renderTeams = (teams) => {
    if (teams) {
        return teams.map((team, index) => {
            return <li key={index}>{team.Name}</li>
        })
    }
}


const generateTournamentRows = ({ tournaments, goToPlayerList, editTournament }) => {
    if (tournaments) {
        return tournaments.map((tournament, index) => {
            return <tr key={index}>
                <td>{tournament.Name}</td>
                <td>{formatDate(tournament.StartDate)} - {formatDate(tournament.EndDate)}</td>
                <td>{tournament.Location}</td>
                <td><ul>{renderTeams(tournament.Teams)}</ul></td>
                <td>{tournament.AmountOfSubscriptions}/{tournament.TotalPlayers}</td>
                <td>
                    <button onClick={goToPlayerList(tournament.id)} className="btn btn-warning ion-ios-people"></button>
                    <button onClick={editTournament(tournament.id)} className="btn btn-primary ion-ios-build"></button>
                </td>
            </tr >
        });
    }
}

const TournamentTableList = ({ className, ...props }) => {
    return (
        <div className={className}>
            <table className="table">
                <thead>
                    <tr>
                        <th>Naam</th>
                        <th>Datum</th>
                        <th>Locatie</th>
                        <th>Team(s)</th>
                        <th># inschrijvingen</th>
                        <th>Opties</th>
                    </tr>
                </thead>
                <tbody>
                    {generateTournamentRows(props)}
                </tbody>
            </table>
        </div>
    )
}

TournamentTableList.propTypes = {
    tournaments: PropTypes.array,
    goToPlayerList: PropTypes.func.isRequired,
    editTournament: PropTypes.func.isRequired
}

export default TournamentTableList
