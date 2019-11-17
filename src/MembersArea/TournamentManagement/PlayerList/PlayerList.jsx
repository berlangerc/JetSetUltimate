import React, { Component } from 'react';

import { connect } from 'react-redux';
import { getPlayerSubscriptions } from '../../../store/actions/tournamentsActions';
import Button from '../../../components/Button/Button';

class PlayerList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tournamentId: this.props.match.params.tournamentId,
        }
        this.goBack = this.goBack.bind(this);
    }

    componentDidMount() {
        this.props.getPlayerSubscriptions(this.state.tournamentId);
    }

    renderSubscribedPlayers() {
        if (this.props.subscribedPlayers) {
            if (this.props.subscribedPlayers.length > 0) {
                return this.props.subscribedPlayers.map((subscribedPlayer, index) => {
                    return <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{subscribedPlayer.Account.FirstName}</td>
                        <td>{subscribedPlayer.Account.LastName}</td>
                        <td>{subscribedPlayer.Account.Email}</td>
                        <td>{subscribedPlayer.Option.Description}</td>
                        <td>{subscribedPlayer.Option.Price}</td>
                    </tr>
                })
            }
            else {
                return <tr><td colSpan={6}>Nog geen inschrijvingen</td></tr>
            }

        }

    }

    goBack() {
        this.props.history.goBack();
    }

    render() {
        return (
            <div>
                <h1>PlayerList</h1>
                <Button className="" onClick={this.goBack} label="Overview">Overzicht</Button>
                <table className="table table-responsive-sm">
                    <thead>
                        <tr>
                            <th>Volgorde</th>
                            <th>Voornaam</th>
                            <th>Achternaam</th>
                            <th>Email</th>
                            <th>Beschrijving</th>
                            <th>Prijs</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSubscribedPlayers()}
                    </tbody>

                </table>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { subscribedPlayers, loading } = state.tournamentsData;

    return {
        subscribedPlayers,
        loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPlayerSubscriptions: (tournament) => dispatch(getPlayerSubscriptions(tournament))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PlayerList);
// export default PlayerList