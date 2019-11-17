import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';

const ContactGroup = (props) => {
    const { title, name, contactInfo, responsibilities, imageSrc } = props;
    return (
        <Col xs={12} md={5} lg={4} className="contact-group-container">
            <Card className="contact-card">
                <div className="contact-img">
                    <CardImg top src={imageSrc} />

                </div>
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardSubtitle>{name}</CardSubtitle>
                    <CardText className="contact-text">
                        {responsibilities}<br />
                        {contactInfo}
                    </CardText>

                </CardBody>
            </Card>

        </Col>
    );
};

export default ContactGroup;