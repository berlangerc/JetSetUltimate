import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-bootstrap';
import { withFormik, Field } from 'formik';

import PhoneInput from '../../../components/Form/PhoneInput/PhoneInput';
import LabelInput from '../../../components/Form/LabelInput/LabelInput';
import { defineAttributesForField } from '../../../utils/utils';
import formikConfiguration from './formikConfiguration';
import GenderSelect from '../../../components/Form/GenderSelect/GenderSelect';
import DayPicker from '../../../components/DayPicker/DayPicker';
import Button from '../../../components/Button/Button';
import SelectTeams from '../../../components/SelectTeams/SelectTeams';
import ProgressViewer from '../../../components/ProgressViewer';

class PlayerInfoInnerForm extends Component {

    render() {
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
            playerStatus
        } = this.props;

        return (
            <form onSubmit={handleSubmit}>
                <Grid>
                    <SelectTeams {...{
                        valueTeam1: values['team1'],
                        onChangeTeam1: handleChange,
                        labelTeam1: 'Team 1',
                        nameTeam1: 'team1',
                        valueTeam2: values['team2'],
                        onChangeTeam2: handleChange,
                        labelTeam2: 'Team 2',
                        nameTeam2: 'team2'
                    }} />
                    <Row>
                        <Col xs={12} md={6}>
                            <LabelInput
                                {...{ ...defineAttributesForField(this.props, 'jerseyNumber', 'Truitje nummer'), required: true }}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12} md={4}>
                            <ProgressViewer {...{ status: playerStatus }}>
                                <Button className="btn btn-outline-primary" disabled={isSubmitting} label={"opslaan"} onClick={handleSubmit} />
                            </ProgressViewer>
                        </Col>
                    </Row>
                </Grid >

            </form >
        )
    }
}

export default withFormik(formikConfiguration)(PlayerInfoInnerForm)
