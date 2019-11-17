import React, { Component } from 'react';
import RadioButton from '../../../components/RadioButton';

class TournamentOptionSelector extends Component {

    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (optionId) => (event) => {
        this.props.changeSelectedOption(optionId);
    }


    renderOptions() {
        const options = this.props.options;

        if (options) {
            return options.map((value, index) => {
                return <tr key={index}>
                    <td>{value.Description}</td>
                    <td>{value.Price}</td>
                    <td>
                        <RadioButton key={value.id}
                            onChange={this.handleChange(value.id)}
                            value={this.props.selectedId === value.id} />
                    </td>
                </tr>
            })
        }
    }

    render() {
        return (
            <div>
                <h3>Opties</h3>
                <table className="table table-responsive-sm">
                    <thead>
                        <tr>
                            <th>Beschrijving</th>
                            <th>Prijs</th>
                            <th>Selecteer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderOptions()}
                    </tbody>
                </table>
            </div >
        );
    }
}
export default TournamentOptionSelector;
