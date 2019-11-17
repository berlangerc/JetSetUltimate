import PaymentService from './../api/PaymentService';
import {
    // FETCHING_PAYMENTS,
    FETCHING_PAYMENTS_SUCCESS,
    FETCHING_PAYMENTS_FAILURE
} from './actionTypes';

export function getPayments() {

    return (dispatch) => {
        const token = localStorage.getItem("jwtToken");

        return PaymentService.getPayments(token)
            .then((response) => {
                if (!response.ok) {
                    // dispatch(loginErrored(true, response.statusText));
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((token) => dispatch(paymentFetchSuccesfull(token)))
            .catch((error) => {
                dispatch(paymentFetchFailure(true, error));
            });
    };

}


export function paymentFetchFailure(hasError, error) {
    return {
        type: FETCHING_PAYMENTS_FAILURE,
        haserror: hasError,
        error: error
    };
}

export function paymentFetchSuccesfull(response) {
    return {
        type: FETCHING_PAYMENTS_SUCCESS,
        payments: response.payments,
        amountToPay: response.amountToPay,
    };
}