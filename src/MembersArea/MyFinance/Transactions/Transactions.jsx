import React, { Component } from 'react';
import PropTypes from 'prop-types'

import { Table } from 'react-bootstrap';
import { formatDate } from '../../../utils/utils';

export default class Transactions extends Component {

    generateTransactionRows() {
        const { payments, maxDebits, maxCredits } = this.props;
        let amountOfDebitsCovered = 0;
        let amountOfCreditsCovered = 0;

        return payments.reverse().map((payment) => {
            if (payment.Amount === 0) {
                return null;
            }

            if (payment.Amount > 0) {
                if (maxDebits && maxDebits <= amountOfDebitsCovered) {
                    return null;
                }
                amountOfDebitsCovered = amountOfDebitsCovered + 1;
            }

            if (payment.Amount < 0) {
                if (maxCredits && maxCredits <= amountOfCreditsCovered) {
                    return null;
                }
                amountOfCreditsCovered = amountOfCreditsCovered + 1;
            }

            return (
                <tr className={this.getClassForAmount(payment.Amount)} key={payment.id}>
                    <td>{payment.Amount}</td>
                    <td>{payment.Name}</td>
                    <td>{formatDate(payment.Date)}</td>
                </tr>)


        });
    }

    getClassForAmount(amount) {
        if (amount < 0) {
            return 'negativeAmount'
        }
        else {
            return 'positiveAmount';
        }
    }
    render() {
        const { amountToPay } = this.props;

        return (
            <div>
                <p>
                    U huidige balans is: <span className={this.getClassForAmount(amountToPay)}>{amountToPay}&euro;</span>
                </p>
                {(amountToPay < 0) ?
                    <p>Zorg dat je zeker op tijd betaalt en dat je balans hoger dan 0&euro; is. U kan het rekeningnr onderaan deze pagina vinden.<br />

                    </p>
                    : ''}
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Bedrag</th>
                            <th>Beschrijving</th>
                            <th>Datum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.generateTransactionRows()}
                    </tbody>
                </Table>
            </div>
        );
    }
}

Transactions.propTypes = {
    maxDebits: PropTypes.number,
    maxCredits: PropTypes.number
}
