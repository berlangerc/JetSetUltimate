import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

import voorzitter from '../../images/Voorzitter.png';
import peningmeester from '../../images/Peningmeester.png';
import secretaris from '../../images/Secretaris.png';
// import jeugdcoordinator from '../../images/Jeugdcoordinator.png';
import redactie from '../../images/Redactie.png';
import site from '../../images/Site.png';
import buf from '../../images/BUF.png';
import fros from '../../images/fros.jpg';
import tofsport from '../../images/tofsport.png';
import buurtsport from '../../images/buurtsport.png';
import vluff from '../../images/vluff.png';
import outfits from '../../images/Arthur.jpg';

import ContactGroup from '../../components/ContactGroup';

export default class Contact extends Component {

    render() {
        return (
            <div>
                <h1>Algemeen</h1>
                <p>Jetset Ultimate frisbee vzw <br />
                    Geldenaaksebaan 132 bus 0101<br />
                    3001 Heverlee <br />
                    info@jetsetultimate.be <br />
                    IBAN:	BE25 7360 3918 0182<br />
                    BIC/SWIFT:	KREDBEBB<br />
                    Onze club is aangesloten bij de <a href="http://www.fros.be">FROS amateursport</a> federatie waardoor we verbonden zijn voor de verzekering aan Arena verzekering.

                </p>
                <h1>Bestuur</h1>

                <Grid>

                    <Row>
                        <ContactGroup
                            title={"Voorzitter"}
                            name={"Robin Goris"}
                            contactInfo={"info@jetsetultimate.be - +32 498 84 27 46 "}
                            responsibilities={"Algemene vragen, Verzekeringen, activiteiten opvolgen"}
                        // imageSrc={voorzitter}
                        />
                        <ContactGroup
                            title={"Peningmeester"}
                            name={"Ward Gordts"}
                            contactInfo={"financien@jetsetultimate.be"}
                            responsibilities={"Financiën, Update ledenzone"}
                        // imageSrc={peningmeester}
                        />
                        <ContactGroup
                            title={"Secretaris"}
                            name={"Tine Geldhof"}
                            contactInfo={"info@jetsetultimate.be"}
                            responsibilities={"Velden, contact stad leuven"}
                        // imageSrc={secretaris}
                        />

                    </Row>
                </Grid>
                <h1>Werkgroepen</h1>

                <Grid>
                    <Row>

                        <ContactGroup
                            title={"Jeugdcoordinator"}
                            name={"Lukas Kestens, Astrid Vangerven & Maarten Robeyns"}
                            contactInfo={"jeugdcoordinator@jetsetultimate.be"}
                            responsibilities={"APraktische regelingen jeugd, Tofsportkampen"}
                        />

                        <ContactGroup
                            title={"Outfits"}
                            name={"Arthur De Rieck"}
                            contactInfo={"outfits@jetsetultimate.be"}
                            responsibilities={"Bestellen en opvolgen van de outfits"}
                            imageSrc={outfits}
                        />
                        <ContactGroup
                            title={"Website"}
                            name={"Cedric Berlanger"}
                            contactInfo={"ledensite@jetsetultimate.be"}
                            responsibilities={"Ontwikkeling/support van de nieuwe ledensite"}
                            imageSrc={site}
                        />

                        <ContactGroup
                            title={"Redactie"}
                            name={"Sander Smets & Anneleen De Geest"}
                            contactInfo={"redactie@jetsetultimate.be"}
                            responsibilities={"Nieuwsbrieven schrijven"}
                            imageSrc={redactie}
                        />
                        <ContactGroup
                            title={"Initiaties"}
                            name={"Lien Desmet"}
                            contactInfo={"initiaties@jetsetultimate.be"}
                            responsibilities={"Coördineren van de initiaties, aanspreekpunt voor onze initiatoren en aanvragers"}
                        />
                        <ContactGroup
                            title={"Subsidies"}
                            name={"August Smessaert"}
                            contactInfo={"subsidies@jetsetultimate.be"}
                            responsibilities={"Subsidies"}
                        />
                    </Row>
                </Grid>
                <h1>Trainers</h1>
                <ul className="normal">
                    <li><b>Jetset</b>: Tim Op de Beeck & Quentin Meekers - jetsetopen@jetsetultimate.be </li>
                    <li><b>Gold</b>: Freek Janssens, Flies Billet & Rik De Vos - gold@jetsetultimate.be </li>
                    <li><b>Mixed</b>: Koen Verpoorten & Sander Smets - mixed@jetsetultimate.be </li>
                    <li><b>Propellers</b>: Paul Lacko & Floor Vandamme & Stijn Vanwijnendaele - propellers@jetsetultimate.be </li>
                    <li><b>Zeppelins</b>: Floor Van Damme & Stijn Vanwijnedaele - zeppelins@jetsetultimate.be </li>
                    <li><b>ULM & Alpha jet</b>: Emiel De Rieck & Lena De Wit - jeugd@jetsetultimate.be </li>
                    <li><b>LUV</b>: Saskia Chambille & Floor Vandamme - luv@jetsetultimate.be </li>
                    <li><b>Balloons</b>: Karl Kestens & Kwinten Flamez - balloons@jetsetultimate.be </li>
                </ul>
                <h1>Initiaties</h1>
                <p>
                    Wij bieden initiaties aan in regio Leuven (straal van 15 km rond Leuven).
                    Idealiter werken wij met een doorschuifsysteem, waar we groepen van 10 tot 20 personen hebben voor 1 tot 2 uur.
                    Qua leeftijd raden wij ultimate frisbee aan vanaf het 4e leerjaar lagere school.
                    Natuurlijk zijn wij hierin flexibel en kunnen wij ons aanpassen afhankelijk van jullie vraag.
                </p>
                <p>
                    Onze initiatoren hebben jarenlange ervaring met ultimate frisbee.
                    Via de club hebben ze al doende (en de meeste ook via een trainerscursus) geleerd hoe ultimate aangebracht kan worden.
                    De trainers beheersen het vak zelf door en door en brengen het over met passie.
                    Om deze kwaliteit te garanderen, bestaat de kans dat er soms een tweede persoon
                    mee komt naar een initiatie om op die manier ook hierin te scholen.
                </p>
                <p>
                    We voorzien 1 officiële frisbee per 2 personen, kegels en toebehoren.
                    Voor groepen uit de basisschool werken we met aangepaste (lichtere en zachtere) frisbees.
                </p>
                <p>
                    Wij voorzien initiaties in verschillende formules voor 30€/u.
                    Dit tarief omvat 1 initiator voor de initiatie, de verplaatsing en het materiaal.
                    Springuren kunnen ook in rekening worden gebracht.
                </p>
                <p>
                    Daarnaast organiseert onze club tijdens de zomermaanden ook frisbeekamp in samenwerking met tofsport Leuven.
                </p>
                <h1>Links</h1>
                <Grid>

                    <Row>
                        <ContactGroup
                            title={<a href="http://www.belgianultimate.be">Belgian Ultimate</a>}
                            name={"Belgische federatie"}
                            contactInfo={"info@belgianultimate.be"}
                            responsibilities={"Organisatie nationale ploegen en nationale kampioenschappen"}
                            imageSrc={buf}
                        />

                        <ContactGroup
                            title={<a href="http://www.fros.be">FROS</a>}
                            name={"Amaterusportfederatie"}
                            contactInfo={"info@fros.be"}
                            responsibilities={"dé recreatieve multisportfederatie, zij voorzien ook de verzekering en jeugdondersteuning."}
                            imageSrc={fros}
                        />
                        <ContactGroup
                            title={<a href="http://www.tofsport.be/activiteiten/tofsportkampen/">Tofsportkampen</a>}
                            name={"Tofsport Leuven"}
                            contactInfo={"tofsport@leuven.be"}
                            responsibilities={"Sportkampen die we samen met de stad Leuven organiseren"}
                            imageSrc={tofsport}
                        />

                        <ContactGroup
                            title={"Frisbee Vlaanderen"}
                            name={<a href="http://frisbeefederatie.wixsite.com/vluff">Vlaamse Federatie</a>}
                            contactInfo={"vlaamsefrisbeefederatie@gmail.com"}
                            responsibilities={"Aansluiting leden, Vertegenwoordiging in Vlaanderen"}
                            imageSrc={vluff}
                        />
                        <ContactGroup
                            title={<a href="http://www.tofsport.be/activiteiten/buurtsport/">Buurtsport</a>}
                            name={"Buurtsport Leuven"}
                            contactInfo={"buurtsport@leuven.be"}
                            responsibilities={"de brug tussen reguliere sportclubs en maatschappelijk kwetsbare personen"}
                            imageSrc={buurtsport}
                        />


                    </Row>
                </Grid>

            </div>


        )
    }
}