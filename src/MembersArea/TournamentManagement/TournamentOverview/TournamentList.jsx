import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getTournaments } from '../../../store/actions/tournamentsActions';
import TournamentTableList from './TournamentTableList';
import TournamentTileList from './TournamentTileList';

class TournamentList extends Component {

    constructor(props) {
        super(props)

        this.addButton = this.addButton.bind(this);
    }

    componentDidMount() {
        this.props.getTournaments();
    }

    componentWillReceiveProps(nextprops) {
        if (this.props.loading && !nextprops.loading) {
            this.props.getTournaments();
        }
    }

    goToPlayerList = (tournamentId) => (event) => {
        this.props.history.push(this.props.match.path + 'list/' + tournamentId);
    }

    editTournament = (tournamentId) => (event) => {
        this.props.history.push(this.props.match.path + 'edit/' + tournamentId);
    }

    renderAddTournamentButton() {
        return <button className="btn btn-success" onClick={this.addButton}>Maak tornooi</button>
    }

    addButton() {
        this.props.history.push('./add');
    }

    render() {
        const { tournaments } = this.props;

        return (
            <Fragment>

                <div className="tournamentOverview table-responsive-sm">
                    <h3>Tornooi overzicht</h3>
                    {this.renderAddTournamentButton()}
                    <TournamentTableList {...{
                        className: "d-none d-sm-block m-3",
                        tournaments,
                        goToPlayerList: this.goToPlayerList,
                        editTournament: this.editTournament
                    }} />
                    <TournamentTileList
                        {...{
                            className: "d-block d-sm-none m-3",
                            tournaments,
                            goToPlayerList: this.goToPlayerList,
                            editTournament: this.editTournament
                        }}
                    />
                    {this.renderAddTournamentButton()}
                </div>
            </Fragment>

        );
    }
}
function mapStateToProps(state) {
    const { tournaments, loading } = state.tournamentsData;

    return {
        tournaments,
        loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTournaments: () => dispatch(getTournaments())
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(TournamentList));
