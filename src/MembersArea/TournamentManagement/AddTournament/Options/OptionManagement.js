import React, { Component } from 'react';

import Options from './Options';

export default class OptionManagement extends Component {

    render() {
        let { onChange, options, error, touched } = this.props;
        return (
            <div>
                <h3>Opties</h3>
                <p>
                    Hier kan je de prijs zetten voor dit tornooi. Probeer hier altijd in de omschrijving duidelijk te maken wat dit juist inhoud. Verschillende opties zijn mogelijk.
                    (Minstens 1 is nodig)
                </p>
                <Options onChange={onChange} options={options} error={error} touched={touched} />
            </div>
        );
    }
}