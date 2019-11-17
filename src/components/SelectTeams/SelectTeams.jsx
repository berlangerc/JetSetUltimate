import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap';
import FormSelect from '../../components/Form/FormSelect/FormSelect';

class SelectTeams extends Component {
    renderOptions(withDefault) {
        const teamOptions = [];
        const { teams } = this.props;
        if (withDefault) {
            teamOptions.push(<option key={'default'}></option>);
        }
        if (teams) {
            teams.forEach(team => {
                teamOptions.push(<option key={team.id} value={team.Name}>{team.Name}</option>)
            });
        }

        return teamOptions;
    }

    render() {
        const { teams,
            valueTeam1,
            valueTeam2,
            onChangeTeam1,
            onChangeTeam2,
            nameTeam1,
            nameTeam2,
            labelTeam1,
            labelTeam2
        } = this.props;

        const teamsAreLoaded = teams && teams.length;

        return (
            <Row>
                <Col xs={12} md={6}>
                    <FormSelect
                        {...{
                            value: valueTeam1,
                            label: labelTeam1,
                            onChange: onChangeTeam1,
                            type: 'select',
                            isRequired: true,
                            disabled: !teamsAreLoaded,
                            name: nameTeam1
                        }}>
                        {this.renderOptions()}
                    </FormSelect >
                </Col>
                <Col xs={12} md={6}>
                    <FormSelect
                        {...{
                            value: valueTeam2,
                            label: labelTeam2,
                            type: 'select',
                            onChange: onChangeTeam2,
                            isRequired: true,
                            disabled: !teamsAreLoaded,
                            name: nameTeam2
                        }}>
                        {this.renderOptions(true)}
                    </FormSelect >
                </Col>
            </Row>
        )
    }
}

SelectTeams.propTypes = {
    valueTeam1: PropTypes.string,
    valueTeam2: PropTypes.string,
    onChangeTeam1: PropTypes.func.isRequired,
    onChangeTeam2: PropTypes.func.isRequired,
    labelTeam1: PropTypes.string.isRequired,
    labelTeam2: PropTypes.string.isRequired
}
const mapStateToProps = (state) => {
    return {
        teams: state.teamsData.teams || []
    }
};

export default connect(mapStateToProps)(SelectTeams)
