import React, { Component } from 'react';
// import { Grid, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux'

import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';
import TransactionOverview from '../MyFinance/Transactions/TransactionOverview';
import verzekeringsPDF from '../../assets/Verzekeringsformulier.pdf';

class Dashboard extends Component {

    render() {
        return (
            <ContentCard>
                <ContentCardBody>
                    <h1>Overzicht</h1>
                    <div>
                        <p>Hallo {this.props.user.firstName}!</p>
                        <TransactionOverview />

                        <h3>Nuttige links en documenten</h3>
                        <p>Hier kan je alles vinden wat je nodig hebt bij een ongeval of voor de mutualiteit.</p>
                        <ul className="normal">
                            <li><b>Verzekering:</b> Heb je een ongeval gehad op tornooi, training, activiteit of tijdens het vervoer? Je kan <a href={verzekeringsPDF} target="_blank" rel="noopener noreferrer">hier</a> het verzekeringsformulier downloaden dat je bij de dokter kan laten invullen. Het lidnummer mag leeg gelaten worden. </li>
                            <li><b>Mutualiteit:</b> Als je je lidgeld betaald wordt, kan je <a href="https://drive.google.com/drive/folders/1_wnCGeLvmuU8XJRRZkS8HUBElcmWkcGk?usp=sharing" target="_blank" rel="noopener noreferrer">hier</a> een document vinden dat je kan gebruiken voor een terugbetaling aan te vragen bij je ziekenfonds. Vergeet je klevertje er niet op te plakken. </li>
                            <li><b>Nieuwsbrieven:</b> Het archief van onze nieuwsbrieven staat <a href="https://drive.google.com/drive/folders/0B0sEoNoc1V9Fa2lPVlNZZmxRTXM?usp=sharing" target="_blank" rel="noopener noreferrer">hier</a>.  </li>

                        </ul>

                    </div>
                </ContentCardBody>
            </ContentCard>
        );
    }
}

function mapStateToProps(state) {

    const { user } = state.userData;

    return {
        user
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
