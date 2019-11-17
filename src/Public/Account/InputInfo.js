import { Component } from 'react';

export default class InputInfo extends Component {

    constructor() {
        super();
        this.fields = {};
    }

    changeFieldWithProperties(fields, hasError, value, errorMessage, id) {
        let field = fields[id];
        fields[id] =
            {
                hasError,
                value,
                isRequired: field.isRequired,
                constraint: field.constraint,
                errorMessage
            };
        this.setState({ fields: fields });

    }

    changeField(inputChangedField, id, callback) {
        let input = inputChangedField.target.value;
        let field = this.state.fields[id];
        let hasError = false;
        let errorMessage = '';

        if (field.isRequired === true && input === '') {
            hasError = true;
            errorMessage = 'This field is Required'
        }

        // constraint fails
        else if (field.constraint) {
            var { returnedErrorMessage, returnedSatisfied } = field.constraint(input);
            hasError = !returnedSatisfied;
            errorMessage = returnedErrorMessage;
        }

        this.changeFieldWithProperties(this.state.fields, hasError, input, errorMessage, id);
        callback();
    }
}
