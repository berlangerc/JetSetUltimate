import React, { Component } from 'react';


import { NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

export default class MembersHeader extends Component {
    render() {
        return (
            <LinkContainer exact to="/admin">
                <NavItem>admin</NavItem>
            </LinkContainer>
        )
    }
}