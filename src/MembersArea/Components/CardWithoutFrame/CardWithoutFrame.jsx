import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import logo from '../../../images/logo_wings_500px.jpg';

import PropTypes from 'prop-types';

const CardWithoutFrame = ({ children, id }) => {
    return <Grid >
        <Row className="d-flex justify-content-center">
            <Col xs={12} md={8} smOffset={0}>
                <div id={id} className="cardWithoutFrame">
                    <div className="logo-header">
                        <img src={logo} className="img-fluid" alt="logo_jetset_wings" />
                    </div>
                    {children}
                </div>
            </Col>
        </Row>

    </Grid>
}

CardWithoutFrame.propTypes = {
    children: PropTypes.array,
    id: PropTypes.string
}

export default CardWithoutFrame;
