import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { getPayments } from '../../store/actions/financialActions';
import ContentCard from '../Content/ContentCard';
import ContentCardBody from '../Content/ContentCardBody';
import Transactions from './Transactions/Transactions';

export class MyFinance extends Component {

    componentDidMount() {
        this.fetchPayments();
    }

    fetchPayments() {
        this.props.getPayments();
    }

    render() {
        const { payments, amountToPay } = this.props;

        return <div className="my-finance">
            <ContentCard>
                <ContentCardBody>
                    <h3>Financiële status</h3>
                    <Transactions payments={payments} amountToPay={amountToPay} maxDebits={10} maxCredits={10} />
                    <p>IBAN:	BE25 7360 3918 0182<br />
                        BIC/SWIFT:	KREDBEBB<br />
                        Opmerking: Voor- en achternaam van de speler</p>
                </ContentCardBody>
            </ContentCard>
        </div>
    }
}

const mapStateToProps = (state) => {

    const { loading } = state.userData;
    const { payments, amountToPay } = state.paymentsData;

    return {
        loading,
        payments,
        amountToPay
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getPayments: bindActionCreators(getPayments, dispatch)
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyFinance)
