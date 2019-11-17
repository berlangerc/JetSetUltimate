import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getPayments } from '../../../store/actions/financialActions';
import { Table } from 'react-bootstrap';
import { formatDate } from '../../../utils/utils';

class TransactionOverview extends Component {

    static MAX_ROWS = 5;

    componentDidMount() {
        this.fetchPayments();
    }

    fetchPayments() {
        this.props.getPayments();
    }


    generateTransactionRows() {
        const { payments } = this.props;
        const { MAX_ROWS } = TransactionOverview;

        let rowsCovered = 0;

        return payments.reverse().map((payment) => {
            if (payment.Amount === 0 || rowsCovered >= MAX_ROWS) {
                return null;
            }
            rowsCovered++;

            return (
                <tr className={this.getClassForAmount(payment.Amount)} key={payment.id}>
                    <td>{formatDate(payment.Date)}</td>
                    <td>{payment.Amount}</td>
                    <td>{payment.Name}</td>
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
            <div className="my-finance">
                <p>
                    U huidige balans is: <span className={this.getClassForAmount(amountToPay)}>{amountToPay}&euro;</span>
                </p>
                {(amountToPay < 0) ?
                    <p>Zorg dat je zeker op tijd betaalt en dat je balans hoger dan 0&euro; is. Zie My Finance voor meer informatie.<br />

                    </p>
                    : ''}
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Datum</th>
                            <th>Bedrag</th>
                            <th>Beschrijving</th>
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

const mapStateToProps = (state) => {

    const { payments, amountToPay } = state.paymentsData;

    return {
        payments,
        amountToPay
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPayments: bindActionCreators(getPayments, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(TransactionOverview)

