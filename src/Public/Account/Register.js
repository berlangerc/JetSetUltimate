import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import { Button, Grid, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// info forms
import AccountInfo from './AccountInfo.js';
import EmegencyInfo from './EmergencyInfo';
import ParentInfo from './ParentInfo.js';
import PlayerInfo from './PlayerInfo.js';
import PrivacyInfo from './PrivacyInfo.js';

export default class Register extends Component {

    constructor() {
        super();
        this.state = {
            accountInfo: {},
            playerInfo: {},
            emergencyInfo: {},
            parentInfo: {},
            isUnderAge: false,
            hasError: false,
            registerButtonDisabled: false,
            processError: '',
            hasProcessError: false,
            agreedWithPrivacy: false
        };
        this.changeAccountInfo = this.changeAccountInfo.bind(this);
        this.registerAccount = this.registerAccount.bind(this);
        this.changePlayerInfo = this.changePlayerInfo.bind(this);
        this.changeParentInfo = this.changeParentInfo.bind(this);
        this.changeEmergencyInfo = this.changeEmergencyInfo.bind(this);
        this.changeUnderAge = this.changeUnderAge.bind(this);
        this.changePrivacyInfo = this.changePrivacyInfo.bind(this);
        this.updatePrivacyStatus = this.updatePrivacyStatus.bind(this);
    }

    changeUnderAge(underage) {
        this.setState({ isUnderAge: underage });
        let parentInfo = this.state.parentInfo;

        parentInfo.parentOneEmail.isRequired = underage;
        parentInfo.parentOneName.isRequired = underage;
        parentInfo.parentOneNumber.isRequired = underage;

        this.setState({ parentInfo: parentInfo })
    }

    changeAccountInfo(accountInfoState) {
        this.setState({ accountInfo: this.getInfoToSendBackend(accountInfoState) });
    }

    changePlayerInfo(playerInfo) {
        this.setState({ playerInfo: this.getInfoToSendBackend(playerInfo) });
    }

    changeEmergencyInfo(emergencyInfo) {
        this.setState({ emergencyInfo: this.getInfoToSendBackend(emergencyInfo) });
    }

    changeParentInfo(parentInfo) {
        this.setState({ parentInfo: this.getInfoToSendBackend(parentInfo) });
    }

    changePrivacyInfo(privacyInfo) {
        this.setState({ PrivacyInfo: this.getInfoToSendBackend(privacyInfo) });
    }

    getInfoToSendBackend(info) {
        let fieldsToDeliver = {};

        for (var field in info) {
            var { hasError, value, isRequired } = info[field];
            fieldsToDeliver[field] = { hasError, value, isRequired }
        }
        return fieldsToDeliver;
    }

    checkIfFieldsHaveError(inputFieldsObject) {
        let hasErrorComputed = false;

        for (var field in inputFieldsObject) {
            var { hasError, isRequired, value } = inputFieldsObject[field];
            hasErrorComputed = hasErrorComputed || hasError === true || (isRequired && value === '');
        }

        return hasErrorComputed;
    }

    registerAccount(evt) {
        this.setState({ registerButtonDisabled: true });
        let accountInfo = this.state.accountInfo;

        let hasErrorComputed = false;

        let playerInfo = this.state.playerInfo;
        let emergencyInfo = this.state.emergencyInfo;
        let parentInfo = this.state.parentInfo;

        hasErrorComputed =
            this.checkIfFieldsHaveError(accountInfo)
            || this.checkIfFieldsHaveError(playerInfo)
            || this.checkIfFieldsHaveError(emergencyInfo);

        if (!hasErrorComputed && this.state.agreedWithPrivacy) {
            this.setState({ hasError: hasErrorComputed });

            fetch(`/api/account/register`, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    accountInfo,
                    playerInfo,
                    emergencyInfo,
                    parentInfo
                })
            }).then(result => {
                result.json()
                    .then(result => {
                        if (result.success === true) {
                            this.props.history.push({
                                pathname: '/RegisterSucces',
                                state: { email: accountInfo.email.value }
                            });
                        }
                        else {
                            this.setState({
                                registerButtonDisabled: false,
                                processError: result.message,
                                hasProcessError: true
                            });

                        }
                    })
            })
        }
        else {
            this.setState({ hasError: hasErrorComputed || this.state.agreedWithPrivacy });
            this.setState({ registerButtonDisabled: false });
        }
    }

    updatePrivacyStatus(evt) {
        this.setState({ agreedWithPrivacy: !this.state.agreedWithPrivacy });
    }

    render() {
        let { isUnderAge, agreedWithPrivacy } = this.state;

        return (
            <div>
                <h2 className="login-header">
                    Maak een account
                </h2>
                <p>
                    Dag potentieel nieuw lid van onze club! We zijn blij dat je bij ons in de club wilt komen!
                Om te weten te komen in welke ploeg je hoort, neem zeker een kijkje bij <Link to="/ploegen">ploegen </Link>
                    zodat je je juist kan inschrijven en je weet waar en wanneer de trainingen plaatsvinden
                (onder <Link to="/trainingsschema">kalender</Link>).
                </p>

                <table id="tg">
                    <tbody>
                        <tr>
                            <th id="tg-bgyt">Start</th>
                            <th id="tg-bgyt">Student</th>
                            <th id="tg-bgyt">Niet-student</th>
                            <th id="tg-bgyt">Balloons</th>
                        </tr>
                        <tr>
                            <td id="tg-s6z2">September</td>
                            <td id="tg-s6z2">90€</td>
                            <td id="tg-s6z2">110€</td>
                            <td id="tg-s6z2">50€</td>

                        </tr>
                        <tr>
                            <td id="tg-s6z2">Januari</td>
                            <td id="tg-s6z2">70€</td>
                            <td id="tg-s6z2">70€</td>
                            <td id="tg-s6z2">25€</td>

                        </tr>
                        <tr>
                            <td id="tg-s6z2">Mei</td>
                            <td id="tg-s6z2">40€</td>
                            <td id="tg-s6z2">40€</td>
                            <td id="tg-s6z2">Niet mogelijk</td>

                        </tr>
                    </tbody>
                </table>
                <p>Het lidgeld kan je storten op ons rekeningnummer: BE25 7360 3918 0182. </p>
                <p>Het lidgeld omvat volgende aspecten:</p>
                <ul className="normal">
                    <li>Verzekering</li>
                    <li>Trainingen, velden en trainers</li>
                    <li>Nieuwsbrief elke maand</li>
                    <li>Teamfee op alle Belgische kampioenschappen</li>
                    <li>Inschrijving bij Frisbee Vlaanderen</li>
                    <li>Indien speler bij ULM een gratis frisbee</li>
                </ul>


                <AccountInfo
                    changeInfoState={this.changeAccountInfo}
                    changeUnderAge={this.changeUnderAge}
                />
                <EmegencyInfo
                    changeInfoState={this.changeEmergencyInfo} />
                <ParentInfo
                    changeInfoState={this.changeParentInfo}
                    isUnderAge={isUnderAge} />
                <PlayerInfo
                    changeInfoState={this.changePlayerInfo} />
                <PrivacyInfo
                    updatePrivacyStatus={this.updatePrivacyStatus}
                    value={agreedWithPrivacy} />

                <Grid>
                    <Row>
                        <Col xs={12} md={6}>
                            <Button bsSize="large" id="register-button" onClick={this.registerAccount} disabled={this.state.registerButtonDisabled}>
                                Registreer
                            </Button>
                            <div hidden={!this.state.hasError}>Gelieve alle verplichte waarden in te vullen</div>
                            <div hidden={this.state.agreedWithPrivacy}>Gelieve de privacy policy te accepteren</div>
                            <div hidden={!this.state.hasProcessError}>{this.state.processError}</div>
                        </Col>
                    </Row>
                </Grid>
            </div >
        )
    }
}