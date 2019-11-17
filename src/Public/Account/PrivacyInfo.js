import React from 'react';
import InputInfo from './InputInfo';

import { Grid, Col } from 'react-bootstrap';


import Checkbox from '../../components/Form/Checkbox';

export default class PrivacyInfo extends InputInfo {

    render() {
        const { updatePrivacyStatus, value } = this.props;
        return (

            <div className="form" >
                <Grid>
                    <h3>Privacy info</h3>
                    <p>Door lid te worden van de club Jetset Ultimate Frisbee Leuven, gaat u akkoord met de volgende {` `}
                        <a href="https://docs.google.com/document/d/1-3i_v38-dHsXyLC2sU1Jk1qx4HOf_muo5WbS8GGdflc/edit?usp=sharing">
                            Privacy policy
                        </a>.
                    </p>
                    <Col xs={12}>
                        <Checkbox
                            {...{
                                onChange: updatePrivacyStatus,
                                label: 'Ik ga akkoord met de privacy policy',
                                value,
                                name: 'privacyCheckbox'
                            }}
                        />
                    </Col>


                </Grid>
            </div>
        )
    }
}