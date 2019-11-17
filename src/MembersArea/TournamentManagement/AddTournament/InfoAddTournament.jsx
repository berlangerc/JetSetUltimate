import React from 'react';

const InfoAddTournament = () => {
    return <div>
        <p>Vul hier alles correct in. Op die manier kan alles ook juist ingevuld worden door de spelers.</p>
        <h4>Prijs</h4>
        <p>Als je de teamfee en playersfee kent gebruik dan volgende manier om het tornooi aan te maken
        . Mocht er teveel betaald worden, krijg je dit
        budget voor op het tornooi (drankje, naft, ...). Als er te weinig betaald is, betaalt de club
                dit verschil zodat de prijs op de ledenzone altijd een maximum bedrag is:</p>
        <table id="tournamentPriceTable">
            <thead>
                <tr>
                    <th id="tg-bgyt">Type</th>
                    <th id="tg-bgyt">Formule</th>
                    <th id="tg-bgyt">Voorbeeld</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td id="tg-s6z2">7 vs 7</td>
                    <td id="tg-s6z2">TP = TF / 10 + PF</td>
                    <td id="tg-s6z2">TF = 100€, PF = 45€ --> TP = 55€</td>
                </tr>
                <tr>
                    <td id="tg-s6z2">5 vs 5</td>
                    <td id="tg-s6z2">TP = TF / 8 + PF</td>
                    <td id="tg-s6z2">TF = 100, PF = 45€ --> TP 57.5€</td>
                </tr>
                <tr>
                    <td id="tg-s6z2">X vs X</td>
                    <td id="tg-s6z2">TP = TF / (X+3) + PF</td>
                    <td id="tg-s6z2">6 vs 6 TF = 100, PF = 45€ --> TP 56.11€</td>
                </tr>
            </tbody>
        </table>
        <p><i>Teamfee= TF, Playerfee = PF, TP= totale prijs, X = aantal personen je speelt op het veld</i></p>

    </div>;
}

export default InfoAddTournament;