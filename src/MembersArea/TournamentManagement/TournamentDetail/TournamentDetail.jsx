import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import TournamentForm from '../AddTournament/TournamentForm';

import { updateTournament } from '../../../store/actions/tournamentsActions';
import Loader from '../../../components/Loader/Loader';

class TournamentDetail extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tournamentId: this.props.match.params.tournamentId,
            isUpdating: false
        }

        this.goBack = this.goBack.bind(this);
        this.updateTournament = this.updateTournament.bind(this);
    }

    componentDidUpdate(prevprops, prevstate) {
        if (this.state.isUpdating && this.props.update_tournament_success) {
            this.props.history.goBack();
        }
    }

    goBack() {
        this.props.history.goBack();
    }

    getTournament(tournamentId) {
        if (this.props.tournaments) {
            return this.props.tournaments.find((tournament) => {
                return tournament.id == tournamentId;
            })
        }
    }

    unCapitalize(string) {
        return string.charAt(0).toLowerCase() + string.slice(1);
    }

    convertReceivedTournament(tournament) {
        const convertedTournament = this.convertObjecToUncapitalize(tournament);

        convertedTournament.teams = convertedTournament.teams.map((team) => team.id)
        return convertedTournament;
    }

    convertObjecToUncapitalize(object) {
        let convertedObject = {}


        if (Object.keys(object).length === 0 || object instanceof String) {
            convertedObject = object;
        }
        else {
            Object.keys(object).forEach((higherCase) => {
                let value = object[higherCase];

                if (Array.isArray(value)) {
                    value = value.map((arrayValue) => {
                        return this.convertObjecToUncapitalize(arrayValue);
                    })
                }

                const noCapital = this.unCapitalize(higherCase);
                convertedObject[noCapital] = value;
            });
        }
        return convertedObject;
    }

    updateTournament(updatedtournament) {
        this.props.updateTournament(updatedtournament);
        this.setState({ isUpdating: true });
    }

    render() {
        const tournament = this.getTournament(this.state.tournamentId);

        if (tournament) {
            return <div>
                <h1> Update Tournament</h1>
                <button className="btn" onClick={this.goBack}>Overzicht</button>
                <TournamentForm tournament={this.convertReceivedTournament(tournament)} saveTournament={this.updateTournament} />
            </div >
        }
        else {
            return <Loader />
        }
    }

}


function mapStateToProps(state) {
    const { tournaments, loading, update_tournament_success } = state.tournamentsData;

    return {
        tournaments,
        loading,
        update_tournament_success
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        updateTournament: (tournament) => dispatch(updateTournament(tournament))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentDetail));