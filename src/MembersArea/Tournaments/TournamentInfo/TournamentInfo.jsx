import React, { Component } from 'react';
import { formatDateTime } from '../../../utils/utils';
import { isArray } from 'util';
import { tournamentTypes, categories } from '../../constants';

class TournamentInfo extends Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    renderUrl() {
        if (this.props.tournament.LinkEvent) {
            return this.renderInfoRow("URL", this.props.tournament.LinkUrl);
        }
    }

    renderTeams(teams) {
        if (teams && isArray(teams)) {
            return teams.reduce((acc, value, index) => {
                let newAcc = acc + value.Name;

                if (index + 1 < teams.length) {
                    newAcc += ", "
                }
                return newAcc;
            }, "")
        }
    }

    renderInfoRow(label, value) {
        return <tr><th>{label}</th><td>{value}</td></tr>
    }

    getValueForTournamentType(tournamentType) {
        const filteredTournamentTypes = tournamentTypes.filter(tournamentype => tournamentype.key === tournamentType);
        if (filteredTournamentTypes && filteredTournamentTypes[0]) {
            return filteredTournamentTypes[0].value;
        }
        return;
    }
    getValueForCategory(category) {
        const filteredCategories = categories.filter(categories => categories.key === category);
        if (filteredCategories && filteredCategories[0]) {
            return filteredCategories[0].value;
        }
        return;
    }
    render() {
        let tournament = this.props.tournament;
        return <div>
            <table className="table table-responsive-sm">
                <tbody>
                    {this.renderInfoRow('Naam', tournament.Name)}
                    {this.renderInfoRow('Locatie', tournament.Location)}
                    {this.renderInfoRow('Periode', formatDateTime(tournament.StartDate) + " - " + formatDateTime(tournament.EndDate))}
                    {this.renderUrl()}
                    {this.renderInfoRow('Categorie', this.getValueForCategory(tournament.Category))}
                    {this.renderInfoRow('Tornooi type', this.getValueForTournamentType(tournament.TournamentType))}
                    {this.renderInfoRow('Spel type', tournament.PlayingType)}
                    {this.renderInfoRow('Totaal vrouwen', tournament.TotalFemale)}
                    {this.renderInfoRow('Totaal mannen', tournament.TotalMale)}
                    {this.renderInfoRow('Totaal spelers', tournament.TotalPlayers)}
                    {this.renderInfoRow('Spelers van', this.renderTeams(tournament.Teams))}
                    {this.renderInfoRow('Opmerkingen', tournament.Remarks)}
                </tbody>
            </table>
        </div>
    }
}

export default TournamentInfo