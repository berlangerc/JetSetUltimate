import React from 'react';
import { withFormik } from 'formik';
import t from 'loc-validationschemas';
import DatePicker from '../../../components/Form/DatePicker/DatePicker';
import Select from '../../../components/Form/Select';
import TeamsSelector from '../../../components/TeamSelector';
import Input from '../../../components/Form/Input/Input';
import TextArea from '../../../components/Form/TextArea';

import OptionManagement from './Options/OptionManagement';
import { tournamentTypes, categories } from '../../constants';
import { defineAttributesForField } from '../../../utils/utils';
import LabelInput from '../../../components/Form/LabelInput/LabelInput';
import InputCheckbox from '../../../components/Form/InputCheckbox/InputCheckbox';

const TournamentForm = (props) => {
    const {
        values,
        touched,
        errors,
        // dirty,
        isSubmitting,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        // handleReset,
    } = props;


    const isToAddTournament = () => {
        return !props.tournament.id;
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>Algemene info</h3>
            {!isToAddTournament() && values.creator ?
                <div className="row">
                    <div className="col-md-6">
                        <LabelInput {...{
                            disabled: true,
                            label: 'Aangemaakt door',
                            value: values.creator.FirstName + ' ' + values.creator.LastName
                        }} />
                    </div>
                </div>
                : null
            }
            <div className="row">
                <div className="col-md-6">
                    <LabelInput
                        {...{ ...defineAttributesForField(props, 'name', 'Naam') }}
                        placeholder={'tornooi/event naam'}
                    />
                </div>

                <div className="col-md-6">
                    <LabelInput
                        {...{
                            ...defineAttributesForField(props, 'location', 'Locatie'),
                            placeholder: 'Stadionlaan 1 3000 Leuven'
                        }}
                    />
                </div>
            </div>

            <div className="row">
                <div className="col-md-4">
                    <DatePicker
                        {...defineAttributesForField(props, 'startDate', 'start datum')}
                        onChange={date => setFieldValue('startDate', date)}
                        onBlur={date => setFieldValue('startDate', date)}
                    />
                </div >
                <div className="col-md-4">
                    <DatePicker
                        {...defineAttributesForField(props, 'endDate', 'eind datum')}
                        onChange={date => setFieldValue('endDate', date)}
                        onBlur={date => setFieldValue('endDate', date)}
                    />
                </div>
                <div className="col-md-4">
                    <DatePicker
                        {...defineAttributesForField(props, 'openDate', 'Start registratie')}
                        onChange={date => setFieldValue('openDate', date)}
                        onBlur={date => setFieldValue('openDate', date)}
                    />
                </div>
            </div >
            <Select
                {...defineAttributesForField(props, 'type', 'Type')}>
                <option>Tornooi</option>
                <option>Match</option>
                <option>Activiteit</option>
            </Select>
            <Input
                {...defineAttributesForField(props, 'teams', 'Teams')}>
                <TeamsSelector
                    name="teams"
                    onChange={teams => setFieldValue('teams', teams)}
                    onBlur={teams => setFieldValue('teams', teams)}
                    selectedTeams={values['teams']} />
            </Input>
            <div className="row">
                <div className="col-md-4">
                    <LabelInput
                        {...defineAttributesForField(props, 'totalPlayers', 'Totaal # spelers', 'Max spelers')}
                        type={'number'}
                    />
                </div>

                <div className="col-md-4">
                    <LabelInput
                        {...defineAttributesForField(props, 'totalFemale', 'Totaal # vrouwen', 'Max vrouwen')}
                        type={'number'}
                    />
                </div>

                <div className="col-md-4">
                    <LabelInput
                        {...defineAttributesForField(props, 'totalMale', 'Totaal # mannen', 'Max mannen')}
                        type={'number'}
                    />
                </div>
            </div>


            <h3>Tornooi info</h3>
            <p>Geeft wat extra info rond het tornooi.</p>
            <Select
                {...defineAttributesForField(props, 'tournamentType', 'Tornooi type')}>
                {
                    tournamentTypes.map(tournamentType => {
                        return <option key={'tournament_type' + tournamentType.key} value={tournamentType.key}>{tournamentType.value}</option>
                    })
                }
            </Select>
            <Select
                {...defineAttributesForField(props, 'playingType', 'Spel type')}
            >
                <option>Mixed</option>
                <option>Loose mixed</option>
                <option>Open</option>
                <option>Woman</option>
                <option>U20</option>
                <option>U17</option>
                <option>U14</option>
                <option>U11</option>
            </Select>
            <LabelInput
                {...defineAttributesForField(props, 'linkEvent', 'Link')}
                placeholder={'www.facebook.com/BUOC2017'}
            />
            <Select
                {...defineAttributesForField(props, 'surfaceType', 'Type ondergrond')}
            >
                <option>Gras</option>
                <option>Kunstgras</option>
                <option>Strand</option>
                <option>Indoor</option>
                <option>Andere</option>
            </Select>
            <Select
                {...defineAttributesForField(props, 'category', 'Categorie')}
            >
                {
                    categories.map(category => {
                        return <option key={category.key} value={category.key}>{category.value}</option>
                    })
                }
            </Select>

            <h3>Logistieke info</h3>
            <p>De volgende sectie is bedoeld om het zo eenvoudig mogelijk te maken qua logistiek. Hoe beter de gegevens hoe makkelijker alles regelt.</p>
            <div className="row">
                <div className="col-sm-4">
                    <InputCheckbox {...defineAttributesForField(props, 'carpoolNeeded', 'Carpool nodig')} />
                </div>
                <div className="col-sm-4">

                    <InputCheckbox {...defineAttributesForField(props, 'eatingHabbitNeeded', 'Eet gewoonte')} />
                </div>
                <div className="col-sm-4">
                    <InputCheckbox {...defineAttributesForField(props, 'remarkRepliesNeeded', 'Opmerkingen verplicht')} />
                </div>
            </div>
            <Input {...defineAttributesForField(props, 'remarks', 'Opmerkingen')}>
                <TextArea name='remarks' onChange={handleChange} onBlur={handleBlur} value={values['remarks']} />
            </Input>

            {
                isToAddTournament() ?
                    <OptionManagement
                        onChange={(options) => setFieldValue('options', options)}
                        options={values['options']}
                        error={errors['options']}
                        touched={touched['options']}
                    />
                    : ''
            }

            {/* <div className="form-group">
                <label>Imaginary Thing</label>
                <VirtualizedSelect
                    name="imaginaryThingId"
                    value={values.imaginaryThingId}
                    options={imaginaryThings}
                    onChange={_handleSelect} />
                <small className="form-text text-muted">
                    This is optional
        </small>
            </div> */}
            <div className="form-controller">
                <button type="submit" className="btn btn-outline-primary" disabled={isSubmitting}>
                    {isToAddTournament()
                        ? 'Aanmaken'
                        : 'Aanpassen'
                    }
                </button>
            </div>
            <label className="invalid-feedback">
                {errors && Object.keys(errors) && Object.keys(errors).length > 0 ? 'Gelieve alle velden in te vullen' : ''}
            </label>
        </form >
    );
}


export default withFormik({
    mapPropsToValues: (props) => {
        let tournament = props.tournament;

        return {
            id: tournament.id,
            name: tournament.name,
            location: tournament.location,
            startDate: tournament.startDate,
            endDate: tournament.endDate,
            openDate: tournament.openDate,
            type: tournament.type,
            teams: tournament.teams,
            totalPlayers: tournament.totalPlayers,
            totalFemale: tournament.totalFemale,
            totalMale: tournament.totalMale,
            tournamentType: tournament.tournamentType,
            playingType: tournament.playingType,
            linkEvent: tournament.linkEvent,
            surfaceType: tournament.surfaceType,
            category: tournament.category,
            carpoolNeeded: tournament.carpoolNeeded,
            eatingHabbitNeeded: tournament.eatingHabbitNeeded,
            remarkRepliesNeeded: tournament.remarkRepliesNeeded,
            remarks: tournament.remarks,
            options: tournament.options,
            creator: tournament.creator
        }
    },

    validationSchema: t.getTournamentValidations(),

    handleSubmit: (values, { setSubmitting, props }) => {
        setSubmitting(true);
        props.saveTournament(values);
    },
})(TournamentForm);