import React, { Component } from 'react';

export default class Option extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isConfiguring: !props.deleteOption || false,
            option: {
                description: this.props.description,
                price: this.props.price
            }
        }

        this.handleSave = this.handleSave.bind(this);
        this.handleConfigure = this.handleConfigure.bind(this);
        this.changePrice = this.changePrice.bind(this);
        this.changeDescription = this.changeDescription.bind(this);

    }

    handleConfigure() {
        this.setState({
            isConfiguring: true
        })
    }

    handleSave() {
        if (this.isValidOption()) {
            this.setState({
                isConfiguring: false
            })

            this.props.onChange(this.state.option);
        }
    }

    renderSaveOrConfigure(isNew) {
        if (this.state.isConfiguring || isNew)
            return <i className={"icon ion-md-add " + (!this.isValidOption() ? 'disabled' : '')}
                onClick={this.handleSave} />
        else {
            return <i className="icon ion-md-build" onClick={this.handleConfigure}></i>
        }

    }
    isValidOption() {
        return this.state.option.price !== '' && this.state.option.description !== '';
    }

    changePrice(e) {
        let updatedOption = this.state.option;
        updatedOption.price = e.target.value;
        this.setState({ option: updatedOption });
    }

    changeDescription(e) {
        let updatedOption = this.state.option;
        updatedOption.description = e.target.value;
        this.setState({ option: updatedOption });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            option: { description: nextProps.description, price: nextProps.price }
        })
    }
    render() {
        let { description, price } = this.props;
        let isNew = !this.props.deleteOption;

        return (<div className="option">
            <div className="content">
                {this.state.isConfiguring ?
                    <textarea
                        value={this.state.option.description}
                        onChange={this.changeDescription}
                        rows={10} />
                    :
                    description
                }
            </div>
            <div className="price">
                {this.state.isConfiguring ?
                    <input type="number" value={this.state.option.price} onChange={this.changePrice} />
                    :
                    (<span><i className="icon ion-logo-euro"></i>{price}</span>)}
            </div>
            <div className="configure">
                {this.renderSaveOrConfigure(isNew)}
                {!isNew
                    ? <i className="icon ion-md-trash" onClick={this.props.deleteOption}></i>
                    : ''}
            </div>
        </div>);
    }
}

//TODO
// change options when changed
// when configured, give form view