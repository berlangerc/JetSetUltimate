import React, { Component } from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Footer extends Component {

    // static defaultProps = {}
    // state = {}


    render() {
        return (
            <footer>
                <Grid>
                    <Row>
                        <Col lg={12} className="horizontal-center" >
                            <p>Copyright &copy; JetSetUltimate 2017</p>
                        </Col>
                    </Row>
                </Grid>
            </footer>
        );
    }
}