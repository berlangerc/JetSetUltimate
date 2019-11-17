import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
// import { Grid, Row, Col } from 'react-bootstrap';
// import FormField from '../../../components/FormField';
// import FormSelect from '../../../components/FormSelect';

import InfoAddTournament from './InfoAddTournament';
import TournamentForm from './TournamentForm';

// import { addTournament } from '../../../actions/tournamentsActions';
import { addTournament } from '../../../store/actions/tournamentsActions';

import { connect } from 'react-redux';

const emptyTournament = {
    name: '',
    location: '',
    startDate: '',
    endDate: '',
    openDate: '',
    type: 'Tournament',
    teams: [],
    totalPlayers: '',
    totalFemale: '',
    totalMale: '',
    playingType: 'Mixed',
    tournamentType: 'seven',
    linkEvent: '',
    // sleepOptions: '',
    surfaceType: 'Indoor',
    // tournament: '',
    // sleepNeeded: '',
    // responsable: '',
    category: 'fun',
    // selection: ''
    carpoolNeeded: false,
    eatingHabbitNeeded: false,
    remarkRepliesNeeded: false,
    remarks: '',
    options: [],
};

class TournamentManagement extends Component {

    render() {
        return (
            <div>
                {this.props.add_tournament_success ?
                    <p>Tornooi aangemaakt</p>
                    :
                    this.props.loading ?
                        'Loading'
                        :
                        <div>
                            <h3>Creeër/editeer tornooi</h3>
                            <InfoAddTournament />
                            <TournamentForm tournament={emptyTournament} saveTournament={this.props.addTournament} />
                        </div>
                }
            </div>
        )
    }


    // render() {
    //     let { name, startDate, endDate, openDate, typeDrop, teams, totalFemale, totalPlayers, totalMale,
    //         carpoolNeeded, carpoolStart, remarks, remarksNeeded, rolesNeeded, rolesSelect, foodNeeded, playingType,
    //         tournamentType, linkEvent, sleepOptions, surface, tournamentTypeDrop, playingTypeDrop, sleepNeeded, responsable,
    //         location, surfaceDrop, category, selection
    //          } = this.state.fields;
    //     return (
    //         //make multiselect working
    //         //add teams via lookup + make multi select
    //         // make dates date and time in selection or add time field
    //         // Indien checkbox geselecteerd wordt maak gelinkte veld verplicht
    //         // Namen van alle leden in de verantwoordelijke box
    //                     {/* <FormSelect
    //                         id={'responsable'}
    //                         label={'Verantwoordelijke'}
    //                         type={'select'}
    //                         value={responsable.value}
    //                         onChange={this.changeField}
    //                         isRequired={responsable.isRequired}
    //                     >
    //                         <option value="namen">namen</option>

    //                     </FormSelect> */}
    //                 <Row>
    //                     <FormField
    //                         id={'surface'}
    //                         label={'Ondergrond andere'}
    //                         hasError={surface.hasError}
    //                         type={'text'}
    //                         onChange={this.changeField}
    //                         isRequired={surface.isRequired}
    //                         errorMessage={surface.errorMessage}
    //                     />
    //                     <FormField
    //                         id={'selection'}
    //                         label={'Selectie'}
    //                         hasError={selection.hasError}
    //                         type={'checkbox'}
    //                         onChange={this.changeField}
    //                         isRequired={selection.isRequired}
    //                         errorMessage={selection.errorMessage}
    //                     />
    //                 </Row>



    //                         id={'carpoolStart'}
    //                         label={'Vertrekuur carpool en plaats'}
    //                         hasError={carpoolStart.hasError}
    //                         type={'textarea'}
    //                         onChange={this.changeField}
    //                         isRequired={carpoolStart.isRequired}
    //                         errorMessage={carpoolStart.errorMessage}
    //                     /><FormField
    //                         id={'rolesNeeded'}
    //                         label={'Rollen nodig?'}
    //                         hasError={rolesNeeded.hasError}
    //                         type={'checkbox'}
    //                         onChange={this.changeField}
    //                         isRequired={rolesNeeded.isRequired}
    //                         errorMessage={rolesNeeded.errorMessage}
    //                     />
    //                     {/* <FormSelect
    //                         id={'rolesSelect'}
    //                         label={'Selecteer de rollen:'}
    //                         type={'select multi'}
    //                         value={rolesSelect.value}
    //                         onChange={this.changeField}
    //                         isRequired={rolesSelect.isRequired}
    //                     >
    //                         <option value="trainer">Trainer</option>
    //                         <option value="logistiek">Logistiek</option>
    //                     </FormSelect> */}
    //                     <FormField
    //                         id={'sleepNeeded'}
    //                         label={'Slaap reservatie nodig?'}
    //                         hasError={sleepNeeded.hasError}
    //                         type={'checkbox'}
    //                         onChange={this.changeField}
    //                         isRequired={sleepNeeded.isRequired}
    //                         errorMessage={sleepNeeded.errorMessage}
    //                     />
    //                     {/* <FormSelect
    //                         id={'sleepOptions'}
    //                         label={'Slaap opties'}
    //                         type={'select multi'}
    //                         value={sleepOptions.value}
    //                         onChange={this.changeField}
    //                         isRequired={sleepOptions.isRequired}
    //                     >
    //                         <option value="hotel">Hotel</option>
    //                         <option value="tent">Tent</option>
    //                         <option value="geen">Geen</option>
    //                         <option value="andere">andere</option>

    //                     </FormSelect> */}

    //                 </Row>
    //             </Grid>

    //         </div>
    //     );
    // }
}

function mapStateToProps(state) {
    const { add_tournament_success, loading } = state.tournamentsData;

    return {
        add_tournament_success,
        loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addTournament: (tournament) => dispatch(addTournament(tournament))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TournamentManagement);
