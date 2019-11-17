
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getTournamentInfoForUserAndSubscription, unsubscribeForTournament } from '../../../store/actions/tournamentsActions'
import { withRouter } from 'react-router-dom';
import { ableToUnsubscribe, getOpenSubscription } from '../helper';

class UnsubscribeForTournament extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tournamentId: this.props.match.params.tournamentId,
            allowedToUnsubscribe: false
        }

        this.unsubscribeForTournament = this.unsubscribeForTournament.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.unsubscribe_tournament_success && nextProps.unsubscribe_tournament_success) {
            this.props.history.goBack();
        }

        if (nextProps.tournamentSubscription) {
            this.setState({
                subscription: getOpenSubscription(nextProps.tournamentSubscription)
            })

            if (ableToUnsubscribe(nextProps.tournamentSubscription.StartDate)) {
                this.setState({ allowedToUnsubscribe: true })
            }
        }
    }

    componentDidMount() {
        this.props.getTournamentInfoForUserAndSubscription(this.state.tournamentId)
    }

    unsubscribeForTournament() {
        this.props.unsubscribeForTournament(this.state.tournamentId)
    }

    isTournamentLoading() {
        return this.props.loading
    }

    renderNotAbleToUnsubscribe() {
        if (!this.state.allowedToUnsubscribe) {
            return <p className="notAbleToUnsubscribe">U bent te laat om uit te schrijven, gelieve de tornooiverantwoordelijke te contacteren.</p>
        }
    }

    renderWillGetRefund() {
        if (this.state.allowedToUnsubscribe) {
            return <p className="notAbleToUnsubscribe">U bent succesvol uitgeschreven, u ziet ook het bedrag terug op u account.</p>
        }
    }
    render() {
        const tournament = this.props.tournamentSubscription;

        if (this.props.error || (tournament && !this.state.subscription)) {
            return <h1>Er was een probleem</h1>
        }
        else if (this.props.loading || !tournament) {
            return <h1>Aan het laden</h1>
        }

        return <div>
            <p>Bent u zeker dat u wilt uitschrijven voor dit tornooi: <b>{tournament.Name}?</b></p>

            {this.renderNotAbleToUnsubscribe()}
            {this.renderWillGetRefund()}
            <button className="btn btn-danger unsubscribe" disabled={!this.state.allowedToUnsubscribe} onClick={this.unsubscribeForTournament}>Uitschrijven</button>

        </div >
    }
}

function mapStateToProps(state) {

    const { tournamentSubscription, loading, error, unsubscribe_tournament_success } = state.tournamentsData;

    return {
        loading,
        tournamentSubscription,
        error,
        unsubscribe_tournament_success
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTournamentInfoForUserAndSubscription: (tournamentId) => dispatch(getTournamentInfoForUserAndSubscription(tournamentId)),
        unsubscribeForTournament: (tournamentId) => dispatch(unsubscribeForTournament(tournamentId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UnsubscribeForTournament))