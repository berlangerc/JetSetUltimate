import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/jetset_logo_transparant.png'

import { Image } from 'react-bootstrap';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavDropdown,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import SocialHeader from './SocialHeader'
import MembersHeader from './MembersHeader';
import Icon from '../../components/Icon';


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <div className="brand">
                    <Link to="/">
                        <Image src={logo} responsive />
                    </Link>
                </div>
                <SocialHeader />
                <Navbar expand="sm">
                    <NavbarBrand className="d-block d-sm-none" href="/">Jetset Ultimate</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}>
                        <Icon icon={faBars} />
                    </NavbarToggler>

                    <Collapse navbar isOpen={this.state.isOpen}>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav>
                                <DropdownToggle nav caret>
                                    Club
                                  </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem tag={Link} to="/frisbeeclub">
                                        Frisbeeclub
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/spiritofthegame">
                                        Spirit of the game
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/ploegen">
                                        Ploegen
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/trainingsschema">
                                        Trainingsschema
                                    </DropdownItem>
                                    <DropdownItem tag={Link} to="/agenda">
                                        Agenda
                                    </DropdownItem>
                                </DropdownMenu>

                            </UncontrolledDropdown>
                            <NavItem>
                                <NavLink tag={Link} to="/contact">Contact</NavLink>
                            </NavItem>
                            <MembersHeader />

                        </Nav>

                    </Collapse>
                </Navbar>

            </div >
        )
    }
}


export default Header;