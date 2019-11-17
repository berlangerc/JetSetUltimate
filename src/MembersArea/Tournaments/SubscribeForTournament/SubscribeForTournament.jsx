import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

import { getTournamentInfoForUserAndSubscription, subscribeForTournament } from '../../../store/actions/tournamentsActions'
import TournamentInfo from '../TournamentInfo/TournamentInfo';
import TournamentOptionSelector from '../TournamentOptionSelector/TournamentOptionSelector';
import { withRouter } from 'react-router-dom';
import { formatDateTime } from '../../../utils/utils';
import { ableToSubscribe, ableToUpdateSubscription, getOpenSubscription, isSubscribedForTournament, substractDaysFrom } from '../helper';

class SubscribeForTournament extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tournamentId: this.props.match.params.tournamentId,
            possibleToSubscribe: false,
            possibleToUpdateSubscription: false
        }

        this.changeSelectedOption = this.changeSelectedOption.bind(this);
        this.subscribeForTournament = this.subscribeForTournament.bind(this);
        this.unsubscribeForTournament = this.unsubscribeForTournament.bind(this);
    }

    getSelectedId(subscription) {

        if (subscription && subscription.Option)
            return subscription.Option.id;

        return;
    }

    componentWillReceiveProps(nextProps) {
        if (!this.props.subscribe_tournament_success && nextProps.subscribe_tournament_success) {
            this.props.history.goBack();
        }

        const tournament = nextProps.tournamentSubscription;

        if (tournament) {
            this.setOpenSubscriptionAndOption(tournament);

            if (ableToSubscribe(tournament.StartDate, tournament.OpenDate)) {
                this.setState({ possibleToSubscribe: true })
            }
            if (ableToUpdateSubscription(tournament.StartDate)) {
                this.setState({ possibleToUpdateSubscription: true })
            }
        }
    }

    setOpenSubscriptionAndOption(tournamentSubscription) {
        const openSubscription = getOpenSubscription(tournamentSubscription);
        const selectedOptionId = this.getSelectedId(openSubscription);

        this.setState({
            subscription: openSubscription,
            selectedOptionId: selectedOptionId
        });
    }

    changeSelectedOption(selectedOptionId) {
        if (this.state.selectedOptionId === selectedOptionId)
            this.setState({
                selectedOptionId: null
            })
        else {
            this.setState({
                selectedOptionId
            })
        }
    }

    componentDidMount() {
        this.props.getTournamentInfoForUserAndSubscription(this.state.tournamentId)
    }

    unsubscribeForTournament = (tournamentId) => (event) => {
        this.props.history.push('/tournaments/unsubscribe/' + tournamentId);
    }

    subscribeForTournament() {
        this.props.subscribeForTournament(
            this.state.tournamentId,
            {
                selectedOptionId: this.state.selectedOptionId
            });
    }

    isImpossibleToSubscribe() {
        return this.props.loading || !this.state.selectedOptionId || !this.state.possibleToSubscribe;
    }

    isImpossibleToUpdateSubscription() {
        return this.props.loading || !this.state.selectedOptionId || !this.state.possibleToUpdateSubscription;
    }

    renderSubscriptionAreNotOpenYet(isSubscribed) {
        if (this.props.tournamentSubscription) {
            if (isSubscribed && !this.state.possibleToUpdateSubscription)
                return <p className="notYetAbleToSubscribe">U kan nog niet voor dit tornooi inschrijven. </p>

            if (!this.state.possibleToSubscribe) {
                return <p className="notYetAbleToSubscribe">
                    {
                        "U kan pas inschrijven vanaf: " +
                        formatDateTime(this.props.tournamentSubscription.OpenDate) +
                        " tot " +
                        formatDateTime(substractDaysFrom(this.props.tournamentSubscription.StartDate, 7))
                        + ' voor dit tornooi.'
                    }
                </p>
            }
        }
    }

    unsubscribeForTournament = (tournamentId) => (event) => {
        this.props.history.push('/tournaments/unsubscribe/' + tournamentId);
    }

    render() {
        const tournament = this.props.tournamentSubscription;
        if (this.props.error) {
            return <h1>Er was een probleem, als dit zich blijft voordoen kan u het bestuur contacteren</h1>
        }
        else if (this.props.loading || !tournament) {
            return <h1>Aan het laden</h1>
        }

        const isSubscribed = isSubscribedForTournament(tournament);

        return <div>
            <h1>Schrijf in voor: {tournament.Name}</h1>
            <TournamentInfo tournament={tournament} />

            <TournamentOptionSelector
                options={tournament.Options}
                selectedId={this.state.selectedOptionId}
                changeSelectedOption={this.changeSelectedOption} />

            {this.renderSubscriptionAreNotOpenYet(isSubscribed)}

            {!isSubscribed
                ? <button className={'btn btn-success'} disabled={this.isImpossibleToSubscribe()} onClick={this.subscribeForTournament}>Schrijf in</button>
                : <div className="buttons">
                    <button className={'btn btn-warning subscribe'}
                        disabled={this.isImpossibleToUpdateSubscription()}
                        onClick={this.subscribeForTournament}>
                        update
                    </button>
                    <button className="btn btn-danger"
                        onClick={this.unsubscribeForTournament(tournament.id)}>
                        unsubscribe
                    </button>
                </div>
            }


        </div >
    }
}

function mapStateToProps(state) {

    const { tournamentSubscription, loading, error, subscribe_tournament_success } = state.tournamentsData;

    return {
        loading,
        tournamentSubscription,
        error,
        subscribe_tournament_success
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTournamentInfoForUserAndSubscription: (tournamentId) => dispatch(getTournamentInfoForUserAndSubscription(tournamentId)),
        subscribeForTournament: (tournamentId, selectedOptionId) => dispatch(subscribeForTournament(tournamentId, selectedOptionId))
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SubscribeForTournament))