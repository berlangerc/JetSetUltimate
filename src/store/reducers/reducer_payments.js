import {
    FETCHING_PAYMENTS,
    FETCHING_PAYMENTS_SUCCESS,
    FETCHING_PAYMENTS_FAILURE
} from '../actions/actionTypes';

const INITIAL_STATE = { payments: [], status: null, error: null, loading: false, amountToPay: 0 };

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case FETCHING_PAYMENTS:
            return { ...state, payments: [], status: 'fetchingPayments', error: null, loading: true };
        case FETCHING_PAYMENTS_SUCCESS:
            return { ...state, payments: action.payments, amountToPay: action.amountToPay, status: 'paymentsFetched', error: null, loading: false };
        case FETCHING_PAYMENTS_FAILURE:// return error and make loading = false
            error = action.error || { message: action.payload.message };//2nd one is network or server down errors   
            return { ...state, payments: [], amountToPay: 0, status: 'fetchingPayments', error: error, loading: false };
        default:
            return state;
    }
}