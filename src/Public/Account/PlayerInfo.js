import React from 'react';
import InputInfo from './InputInfo';

import { Grid, Row, Col } from 'react-bootstrap';

import FormField from '../../components/FormField';
import FormSelect from '../../components/FormSelect';

import Validators from '../../utils/Validators';

export default class PlayerInfo extends InputInfo {

    constructor() {
        super();
        this.state = {
            fields: {
                jerseyNumber: {
                    hasError: false,
                    value: '',
                    isRequired: true,
                    errorMessage: '',
                    constraint: Validators.isJerseyNumber
                },

                playedSince: {
                    hasError: false,
                    value: '',
                    isRequired: false,
                    errorMessage: '',
                    constraint: Validators.isNumber
                },

                lifeStatus: {
                    hasError: false,
                    value: 'adult',
                    isRequired: false,
                    errorMessage: ''
                },

                team1: {
                    hasError: false,
                    value: 'Zeppelins',
                    isRequired: true,
                    errorMessage: '',
                },
                team2: {
                    hasError: false,
                    value: '',
                    isRequired: false,
                    errorMessage: ''
                },
                eating: {
                    hasError: false,
                    value: 'meat',
                    isRequired: false,
                    errorMessage: ''
                },
            },
            teams: []
        };
        this.changePlayerInfo = this.changePlayerInfo.bind(this);
        this.changeField = this.changeField.bind(this);
    }

    componentWillMount() {
        this.changePlayerInfo();
        this.getTeams();
    }


    changePlayerInfo() {
        let selectFields = this.state.fields;

        this.props.changeInfoState(selectFields);
    }

    changeField(evt, id) {
        super.changeField(evt, id, this.changePlayerInfo);
    }

    getTeams() {
        fetch(`/api/teams`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            }
        }).then(result => {
            result.json()
                .then(result => {
                    this.setState({ teams: result })
                })
                .catch(error => {
                    console.log(error);
                })
        })
    }

    createTeamsOptions(isRequired) {
        let items = [];
        if (isRequired === false) {
            items.push(<option key=""></option>)
        }
        for (let i = 0; i < this.state.teams.length; i++) {
            items.push(<option key={i} >{this.state.teams[i].Name}</option>);
        }
        return items;
    }

    render() {
        var { jerseyNumber, playedSince, lifeStatus, team1, team2, eating } = this.state.fields;

        return (

            <div className="form" >
                <Grid>
                    <h3>Speler info</h3>
                    <p>Deze informatie wordt gebruikt voor tornooien en events.
                    </p>
                    <p> Wij bestellen geen outfit zelf automatisch en deze is ook niet in het lidgeld inbegrepen.
    Meer info rond outfits komt via de nieuwsbrief of facebook doorheen het jaar.</p>
                    <Row>
                        <FormField
                            id={'jerseyNumber'}
                            label={'Truitje nummer'}
                            hasError={jerseyNumber.hasError}
                            type={'number'}
                            onChange={this.changeField}
                            isRequired={jerseyNumber.isRequired}
                            errorMessage={jerseyNumber.errorMessage}
                            min={'0'}
                            max={'100'}
                        />
                        <FormField
                            id={'playedSince'}
                            label={'Speelt sinds'}
                            hasError={playedSince.hasError}
                            type={'number'}
                            onChange={this.changeField}
                            isRequired={playedSince.isRequired}
                            errorMessage={playedSince.errorMessage}
                        />
                        <FormSelect
                            id={'lifeStatus'}
                            label={'Status'}
                            hasError={lifeStatus.hasError}
                            type={'select'}
                            onChange={this.changeField}
                            value={lifeStatus.value}
                            isRequired={lifeStatus.isRequired}
                            errorMessage={lifeStatus.errorMessage}
                        >
                            <option value="adult">Adult</option>
                            <option value="student">Student</option>


                        </FormSelect>
                        <FormSelect
                            id={'eating'}
                            label={'Eetstijl'}
                            hasError={eating.hasError}
                            type={'select'}
                            isRequired={eating.isRequired}
                            errorMessage={eating.errorMessage}
                            onChange={this.changeField}
                            value={eating.value}
                        >
                            <option value="meat">Vlees</option>
                            <option value="veggie">Vegetarisch</option>
                            <option value="halal">Halal</option>
                            <option value="other">Andere</option>
                        </FormSelect>
                    </Row>
                    <Row>
                        <Col xs={12}>
                            U kan de ploeg selecteren waar u speelt. Indien u in 2 ploegen speelt kan u dit ook aanduiden.
                            Jeugd = ULM, Beginner = Zepplins, Gemiddeld niveau = Propellers, Gevorderd niveau = Jetset/Gold, Vrouw = LUV

                        </Col>
                        <FormSelect
                            id={'team1'}
                            label={'Team 1'}
                            hasError={team1.hasError}
                            type={'select'}
                            isRequired={team1.isRequired}
                            onChange={this.changeField}
                            errorMessage={team1.errorMessage}
                            value={team1.value}
                        >
                            {this.createTeamsOptions(team1.isRequired)}
                        </FormSelect>
                        <FormSelect
                            id={'team2'}
                            label={'Team 2'}
                            hasError={team2.hasError}
                            type={'select'}
                            isRequired={team2.isRequired}
                            errorMessage={team2.errorMessage}
                            onChange={this.changeField}
                            value={team2.value}
                        >
                            {this.createTeamsOptions(team2.isRequired)}

                        </FormSelect>
                        <Col xs={12}>

                        </Col>


                    </Row>
                </Grid>
            </div>
        )
    }
}