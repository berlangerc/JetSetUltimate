import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import ploegenJeugd from '../../images/PloegenJeugd.png';
import ploegenVolwassenen from '../../images/PloegenVolwassenen.png';

export default class Ploegen extends Component {

    render() {
        return (
            <div>
                <h1>Ploegen</h1>
                <p>
                    Interesse om mee te sporten? Hieronder maak je alvast kennis met de <b>verschillende ploegen</b> binnen onze club. Er zijn verschillende jeugdploegen en volwassenploegen naargelang je leeftijd, niveau en competitiviteit. De <b>trainingsmomenten en -locaties </b>kan je <Link to="/trainingsschema">hier </Link>vinden.

                <br />
                    Neem op training sportkleren, (voor outdoor) voetbalschoenen (met plastic studs) en een drinkbus mee. Een outfit kan na de start van het seizoen besteld worden.
                    <br />
                    <br />
                    <h2>NIEUWE LEDEN</h2>
                    Nieuwe leden kunnen in september komen testen en dienen voor eind september officieel in te schrijven via de <Link to="/register" >ledenzone</Link>. Leden die halverwege het jaar nog willen aansluiten, mailen best naar het bestuur.
<br /> Informatie over lidgeld vind je onder <Link to="/register">nieuw lid</Link> voor het aanmaken van een account op de ledenzone.
                </p>
                <br />
                <h2>JEUGDPLOEGEN</h2>

                <p>Onze <b>jeugd</b> die volledig achter de <a href="http://panathlonvlaanderen.be/" target="_blank" rel="noopener noreferrer"> panathlon-verklaring</a> staat,
                 is opgestart in 2015. Er is een jeugdbeleidsplan opgemaakt dat je hier kan vinden. We werken met de leeftijdscategorieën volgens de (inter)nationale wedstrijden, namelijk U11, U14, U17 en U20. Voor het seizoen 2018-2019 zijn er volgende jeugdploegen:
                   </p>

                <ul className="normal">
                    <li><b>U11 - Balloons</b> (2010-2012): De U11 wordt binnen onze club de ‘Balloons’ genoemd. Zij komen om de twee weken samen op maandag (zie <Link to="/agenda">agenda</Link> of <Link to="/trainingsschema">trainingsschema</Link>) en trainen binnen. Hierbij wordt spelenderwijs de verschillende worpen en spelvormen aangeleerd.
</li>
                    <li><b>U14 - ULM</b> (2007-2009): De U14 wordt binnen onze club de ‘ULM’ genoemd. Dit staat voor het ‘Ultimate Leuven Minors’ of het klein vliegtuigje (vliegende dingen is het thema voor de namen van onze ploegen). Zij trainen op donderdag (zie <Link to="/agenda">agenda</Link>). Hier wordt al meer gefocust op tactieken. Enkele keren per jaar wordt meegedaan aan toernooien voor U14.
</li>
                    <li><b>U17 - ULM Alpha Jet</b> (2004-2006): De U17 wordt binnen onze club ‘Alpha Jet’ genoemd. Zij trainen op dinsdag (zie <Link to="/agenda">agenda</Link>), maar kunnen ook op donderdag aansluiten op de ULM-training voor een tweede trainingsmoment. Zij zullen meer werken naar toernooien toe.
</li>
                    <li><b>U20 </b>(2001-2003): De U20 zal dit jaar bij de volwassenploegen trainen. De trainingsmomenten hangen af van het niveau (zie volwassenploegen). In de periode vóór Belgische Kampioenschappen U20, zullen zij extra trainingen krijgen, speciaal voor U20.
</li>

                </ul>

                <p>
                    De jeugd in het middelbaar kan ook naar de SNS-trainingen op dinsdag.
                </p>
                <Image src={ploegenJeugd} responsive className="img" />

                <h2>VOLWASSENPLOEGEN</h2>
                <p>
                    Bij de <b>volwassenen</b> worden de ploegen opgesplitst op basis van niveau. Ook zijn er onderverdelingen op basis van geslacht, namelijk open, vrouwen en mixed.

                </p>
                <ul className="normal">
                    <li>Beginners: Zeppelins (open), beLUVten (vrouwen)</li>
                    <li>Gemiddeld: Propellers (open), LUV-U2 (vrouwen), Gold</li>
                    <li>Expert: Jetset (open), LUV (vrouwen), Mixed (mixed) </li>

                </ul>
                <p>
                    De <b>zeppelins</b> is onze beginnersploeg. Hier starten nieuwe leden. De trainingen gaan door op dinsdag (zie <Link to="/agenda">agenda</Link>). Hier wordt gefocust op leren gooien en uitleg van het spel. KUL-studenten kunnen een tweede trainingsmoment bij het sportkot volgen. Beginnende vrouwen worden gestimuleerd om ook naar de LUV-training te gaan (zie verder).
                   <br />
                    <br />
                    De <b>propellers</b> vormen het middenniveau van onze club. De trainingen gaan door op maandag, dinsdag en donderdag (tweewekelijks) (zie <Link to="/agenda">agenda</Link>). Hier wordt meer rond tactieken gewerkt. Zij gaan vaker naar officiële en funtoernooien. Ook hier worden de vrouwen gestimuleerd om naar de LUV-training te gaan (zie verder). Voor de spelers die meer op zoek zijn voor een sport als recreatie, is er <b>Gold</b> waar spelplezier centraal staat. Hier kunnen spelers die de basis goed beheersen spelen, dus enige ervaring is wel vereist.
<br />
                    <br />
                    Ten slotte is er <b>Jetset (open)</b> waarin onze topspelers trainen. Dit op maandag en donderdag (zie <Link to="/agenda">agenda</Link>). Zij behoren tot de top van de Belgisch frisbeewereld. Daarnaast is er ook een mixed-ploeg en een vrouwenploeg one-LUV.
<br />
                    <br />
                    Voor de <b>vrouwen</b> worden aparte trainingsmomenten voorzien. LUV, ofwel Leuvense Ultimate Vrouwen, geeft alle vrouwen uit de club de kans om samen te trainen en zich voor te bereiden op vrouwen-toernooien. Voor de volwassenen wordt op donderdag getraind.
<Image src={ploegenVolwassenen} responsive className="img" />


                </p>
                <h2>WEDSTRIJDEN & TOERNOOIEN</h2>

                <p>
                    In België worden wedstrijden op nationaal niveau gehouden. Dit wilt zeggen dat de afstanden groot zijn en de wedstrijden in <b>toernooivorm</b> worden georganiseerd. Soms toernooien van één dag en soms gedurende een heel weekend. Eenmaal lid, kan je op de ledenzone kijken welke toernooien je kan meedoen. Er bestaan funtoernooien waar je als team of als persoon kan inschrijven. Zo komt iedereen aan zijn trek! De kosten voor een toernooi zijn niet verrekend in het lidgeld en worden via de ledenzone aangerekend.
<br />In België zijn er Belgian Ultimate (Open/Women/Youth) Outdoor en Indoor Championships, afgekort BU(W/Y)OC en BU(W/Y)IC.
                </p>

                <p>
                    Geïnteresseerd in hoe we presteren? Je kan een overzicht van de meeste van onze prestaties
                    <a href="https://docs.google.com/spreadsheets/d/185bZa_GhRZkEVt5-ImBenI7jzhlPu4FDcV4O-xXbcMA/edit?usp=sharing" target="_blank" rel="noopener noreferrer"> hier </a>
                    vinden
                    </p>
            </div >
        )
    }
}