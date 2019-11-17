import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Club extends Component {

    render() {
        return (
            <div>
                <h2>Frisbeeclub</h2>
                <p>
                    Jetset is de ultimate frisbeeclub van Leuven en bestaat al sinds 1982.
                    De club bestaat uit verschillende ploegen en speelt mee op het topniveau van België.
                    De club wordt in goede banen geleid door een heleboel vrijwilligers, namelijk
                    de voorzitter, de penningmeester, de secretaris, de jeugdcoördinator, al de trainers per ploeg, initiatoren, ...
                    Hun contactgegevens staan bij <Link to={"/contact"}> contact</Link>.

                </p>
                <p>
                    Ultimate is één van de type sporten die met een frisbee kan worden beoefend.
                    Ultimate is een ploegsport die over de hele wereld wordt gespeeld en nog steeds aan populariteit wint.
                    De sport wordt gespeeld buiten op gras, binnen of op het strand .
                    De sport wordt buiten 7 tegen 7 spelers gespeeld en binnen en op het strand 5 tegen 5 spelers.
                    Er bestaan open (vooral mannen), vrouwen en mixed-divisies.
                </p>
                <p>
                    Ultimate wordt gespeeld op een versmald voetbalveld met langs weerskanten een eindzone (baklijn).
                    Elke ploeg begint bij elk punt in één eindzone en het aanvallend team probeert aan de hand van passen de overkant te bereiken.
                    De persoon met de frisbee mag zich niet verplaatsen en het punt wordt gemaakt door het vangen van de frisbee
                    in de andere eindzone aan de hand van passen tussen de teamgenoten.
                </p>
                <p>
                    Ultimate is een non-contact-sport en wordt gespeeld zonder scheidsrechter.
                    Hierdoor wordt verwacht dat alles spelers de regels kennen en dat opmerkingen/onenigheden (‘calls’) onderling worden opgelost.
                    Indien een onenigheid niet kan worden opgelost, wordt ‘teruggespoeld’ naar het laatste moment zonder onenigheid.
                    Per wedstrijd of toernooi wordt er dan ook een spirit-prijs uitgereikt.
                </p>
                <p>
                    Een video over ultimate frisbee gemaakt door de Hasseltse frisbeeclub Diabolic Heaven:
                    </p>
                <iframe title="test" src="https://www.youtube.com/embed/zEKnqFBajiI" width="100%" height="300px" allowfullscreen></iframe>
                <p>
                    Een video over de finale van het Belgisch Kampioenschap (BUOC) 2017 bij vrouwen en mannen:
                    </p>
                <iframe title="test1" src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBelgianUltimate%2Fvideos%2F830860190406897%2F&show_text=0&width=560" width="100%" height="500" allowFullScreen></iframe>
            </div>
        )
    }
}