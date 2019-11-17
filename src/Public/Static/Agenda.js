import React, { Component } from 'react';

export default class Agenda extends Component {

    render() {
        return (
            <div>
                <h1>Kalender</h1>
                <p> Hieronder staat de kalender week per week van Jetset per ploeg. Ook activiteiten voor de hele club
                        staan hier op. Indien je wil kan je aan de hand van het plusje onderaan de agenda, deze toevoegen aan je eigen agenda.
                        Zo ben je nooit te laat.
                        </p>
                <iframe title="agenda" src="https://calendar.google.com/calendar/b/2/embed?showTitle=0&amp;showPrint=0&amp;mode=WEEK&amp;height=600&amp;wkst=1&amp;bgcolor=%23FFFFFF&amp;src=jetsetultimatefrisbee%40gmail.com&amp;color=%232F6309&amp;src=bqutrup3sifo3aapg1jsvlamv8%40group.calendar.google.com&amp;color=%238C500B&amp;src=0gvnimcm8opd0kqjtmgidmrfgc%40group.calendar.google.com&amp;color=%236B3304&amp;src=pu3anlb4dr5kmgph1edqr8ohvk%40group.calendar.google.com&amp;color=%23691426&amp;src=k5gillmrc7o58gaa496moab41g%40group.calendar.google.com&amp;color=%23333333&amp;src=iajk116kr08gi3ric5pj4i2srk%40group.calendar.google.com&amp;color=%23182C57&amp;src=el91c1sm94n18ka6knqq9b1kk0%40group.calendar.google.com&amp;color=%23853104&amp;src=cb11egi1alngvfq48a5ub80pms%40group.calendar.google.com&amp;color=%23AB8B00&amp;src=euvk090srh9cida0vrqv69vfks%40group.calendar.google.com&amp;color=%23333333&amp;src=27h8euegvlc1v3g40idbkaesn0%40group.calendar.google.com&amp;color=%23691426&amp;src=k08u87oicbqjvj7kebf51ur0o4%40group.calendar.google.com&amp;color=%2323164E&amp;ctz=Europe%2FBrussels"
                    width="800" height="600" frameborder="0" scrolling="no"></iframe>
            </div >
        )
    }
}