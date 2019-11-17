import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

export default class RegisterSucces extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <h1>Registration succesfull!</h1>
                            <p>You have succesfully registered yourself with e-mail '{this.props.location.state.email}'</p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}