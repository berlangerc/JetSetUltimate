import React from 'react'
import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';
import { Grid, Row, Col } from 'react-bootstrap';

const NotFoundOrUnauthorized = () => {
    return (
        <ContentCard>
            <ContentCardBody>
                <Grid>
                    <Col lg={7} className="mx-auto">
                        <div className=" text-center">
                            <h2>SORRY!</h2>
                            <h3 className="font-weight-light">The page you’re looking for was not found or you don't have permissions to see it.</h3>
                        </div>
                    </Col>
                </Grid>

            </ContentCardBody>
        </ContentCard>
    )
}

export default NotFoundOrUnauthorized
