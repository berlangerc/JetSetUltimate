import React, { Component } from 'react';

import Option from './Option';

export default class Options extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: props.options
        }

        this.addOption = this.addOption.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ options: nextProps.options });

    }
    // updateOptions(modifiedOptions){
    //     this.setState({options: modifiedOptions});

    // }
    deleteOption(index) {
        let modifiedOptions = this.state.options;
        modifiedOptions.splice(index, 1);

        this.props.onChange(modifiedOptions);
    }

    updateOption(index, option) {
        let modifiedOptions = this.state.options;
        modifiedOptions[index] = option;

        this.props.onChange(modifiedOptions);
    }

    renderOptions() {
        return this.state.options.map((option, index) => {
            return <Option description={option.description}
                key={index}
                price={option.price}
                deleteOption={this.deleteOption.bind(this, index)}
                onChange={(updatedOption) => { this.updateOption.bind(this, index)(updatedOption) }}
            />
        })
    }

    addOption(newOption) {
        let modifiedOptions = this.state.options;
        modifiedOptions.push(newOption);

        this.props.onChange(modifiedOptions);
    }

    renderEmptyOption() {
        return <Option description={''}
            key={this.state.options.length}
            price={''}
            onChange={this.addOption}
        />
    }
    render() {
        let { error, touched } = this.props;

        return (<div className="tournament-options">
            <div className="options">
                {this.renderOptions()}
                {this.renderEmptyOption()}
            </div>
            {error && touched && <div className="invalid-feedback d-block">{error}</div>}
        </div>
        );
    }
}