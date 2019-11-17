import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { getTournamentsForUser } from '../../../store/actions/tournamentsActions';
import { formatDate } from './../../../utils/utils';
import { withRouter } from 'react-router-dom';
import { isSubscribedForTournament } from '../helper';

class TournamentsOverview extends Component {

    constructor(props) {
        super(props);

        this.subscribeForTournament = this.subscribeForTournament.bind(this);
    }
    componentDidMount() {
        if (this.props.isAuthenticated) {
            this.fetchTournaments();
        }
    }
    componentWillReceiveProps(nextprops) {
        if (this.props.loading && !nextprops.loading && nextprops.isAuthenticated) {
            this.fetchTournaments();
        }
    }

    fetchTournaments() {
        this.props.getTournamentsForUser();
    }

    renderTeams(teams) {
        if (teams) {
            return teams.map((team, index) => {
                return <li key={index}>{team.Name}</li>
            })
        }
    }


    goToPlayerList = (tournamentId) => (event) => {
        this.props.history.push('list/' + tournamentId);
    }

    renderTournaments() {
        return this.props.userTournaments.map((tournament, index) => {
            return <tr key={index}>
                <td>{tournament.Name}</td>
                <td>{formatDate(tournament.StartDate)} - {formatDate(tournament.EndDate)}</td>
                <td>{tournament.Location}</td>
                <td><ul>{this.renderTeams(tournament.Teams)}</ul></td>
                <td>
                    <button onClick={this.goToPlayerList(tournament.id)} className="btn btn-warning">
                        {tournament.AmountOfSubscriptions}/{tournament.TotalPlayers} <i className="ion-ios-people"></i>
                    </button>
                </td>
                <td>{!isSubscribedForTournament(tournament)
                    ? this.renderSubscribeButton(tournament.id)
                    : this.renderUnsubscribeAndEditButton(tournament.id)}</td>
            </tr >
        })
    }

    subscribeForTournament = (tournamentId) => (event) => {
        this.props.history.push('/member/tournaments/subscribe/' + tournamentId);
    }

    unsubscribeForTournament = (tournamentId) => (event) => {
        this.props.history.push('/member/tournaments/unsubscribe/' + tournamentId);
    }

    renderSubscribeButton(tournamentId) {
        return <button className="btn btn-success" onClick={this.subscribeForTournament(tournamentId)}>Schrijf in</button>
    }

    renderUnsubscribeAndEditButton(tournamentId) {
        return <div className="configure-buttons" >
            <button className="btn btn-warning edit" onClick={this.subscribeForTournament(tournamentId)}>Wijzig</button>
            <button className="btn btn-danger unsubscirbe" onClick={this.unsubscribeForTournament(tournamentId)}>Schrijf uit</button>
        </div >
    }

    render() {
        return <Fragment>
            <h1>Tornooien</h1>
            <div className="tournamentsTableSubscribe">
                <table className="table table-responsive">
                    <thead>
                        <tr>
                            <th>Naam</th>
                            <th>Datum</th>
                            <th>Locatie</th>
                            <th>Team(s)</th>
                            <th># inschrijvingen</th>
                            <th>Schrijf in</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTournaments()}
                    </tbody>
                </table>

            </div>
        </Fragment>

    }
}

function mapStateToProps(state) {

    const { isAuthenticated, loading } = state.userData;
    const { userTournaments } = state.tournamentsData;

    return {
        loading,
        isAuthenticated,
        userTournaments,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTournamentsForUser: () => dispatch(getTournamentsForUser())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentsOverview))
