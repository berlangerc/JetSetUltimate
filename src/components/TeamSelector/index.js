import React from 'react';
import { getTeams } from './../../store/actions/teamsActions'
import { connect } from 'react-redux';



// Then import the virtualized Select HOC
import Checkbox from '../Form/Checkbox';
import './teamselector.css';

class TeamSelector extends React.Component {
    constructor(props) {
        super(props);

        let receivedTeams = this.props.selectedTeams;
        if (receivedTeams instanceof Array) {
            receivedTeams = receivedTeams.map((selectedTeam) => {
                if (selectedTeam.id) {
                    return selectedTeam.id;
                }
                return selectedTeam;
            })
        }

        this.state = {
            selectedTeams: receivedTeams || []
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
        this.props.getTeams();
    }

    renderTeamOptions() {
        let teamOptions = this.props.teams.map((team) => {
            return <Checkbox key={team.id}
                value={this.state.selectedTeams.includes(team.id)}
                onChange={this.handleChange.bind(this, team.id)}
                label={team.Name}
            />
        });
        teamOptions.push(<Checkbox key={-1}
            onChange={this.handleChange.bind(this, -1)}
            label={"Everyone"}
            value={this.props.teams.length === this.state.selectedTeams.length} />);
        return teamOptions;
    }
    handleChange(e, event) {
        let isGoingTobeChecked = event.target.checked;
        let newSelectedTeams = this.state.selectedTeams;
        if (e === -1) {
            newSelectedTeams = []
            if (isGoingTobeChecked) {
                this.props.teams.forEach(team => {
                    newSelectedTeams.push(team.id);
                });
            }
        }
        else {
            if (isGoingTobeChecked) {
                newSelectedTeams.push(e);
            }
            else {
                newSelectedTeams = this.state.selectedTeams.filter((selectedTeam) => {
                    return selectedTeam !== e;
                })
            }
        }
        this.setState({
            selectedTeams: newSelectedTeams
        })

        this.props.onChange(newSelectedTeams);
    }
    render() {
        return (
            <div className="teamselector">
                {this.renderTeamOptions()}
            </div>
        )
    }
}

function mapStateToProps(state) {

    const { teams } = state.teamsData;

    return {
        teams
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTeams: () => dispatch(getTeams())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TeamSelector)
