import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';
import image from '../Articles/Posts/2019_04_2728_open_divisie1.jpg';
export default class Home extends Component {

  render() {
    return (
      <div >

        {/* <Jumbotron className="give-me-space">
          <h2>Inschrijvingen nieuw seizoen</h2>
          <p className="normal">
            Interesse in frisbee? Het nieuwe seizoen start in september, je kan altijd komen proberen in deze maand!
            Kijk bij ploegen waar je thuis hoort en kom gewoon langs op een training om gratis te proberen. Vergeet geen
            sportieve kleding! <br />
            Na september is het nog enkel mogelijk om bij onze jeugdploegen (balloons/ULM) aan te sluiten.<br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSc_U6z1VW11-Mp8r9PJrh92X86ERq8GjuAM7CsoHwsmK2TGgA/viewform?fbclid=IwAR3k_qwCrGdcET0xEo5f73ZgIxL7tcj2bKDFWK4TEjevT4qh71iBkmGzHpk">
              Inschrijving</a>
          </p>
        </Jumbotron> */}

        <Jumbotron className="give-me-space">
          <h2><a href="/articles/2019_04_2728_open_divisie1">Verslag Jetset BUOC divisie 1</a></h2>
          <p className="normal">
            Het voorbije weekend (27-28 april) vond er in de Gentse Blaarmeersen het eerste BUOC-weekend voor het hoogste frisbeeniveau in België plaats: een divisie met Freespect, Gentle, Freezzzbeezzz, Mooncatchers A, Mooncatchers 1, Helgtre en onze Leuvense mannenploeg Jetset streden om de vier felbegeerde finaletickets. Jetset eindigde na een weekend vol felbevochten matchen op een 5de stek.          </p>
          <img src={image} style={{ width: "100% " }} />
        </Jumbotron>
      </div >
    );
  }
}