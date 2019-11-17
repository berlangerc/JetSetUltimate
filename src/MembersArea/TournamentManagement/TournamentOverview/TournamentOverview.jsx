import React, { Component } from 'react';
import TournamentList from './TournamentList';

class TournamentOverview extends Component {
    render() {
        return (
            <TournamentList addTournament={this.addTournament} />
        );
    }
}

export default TournamentOverview;
