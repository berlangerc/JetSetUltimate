import AccountService from './../api/AccountService';
import {
    SIGNIN_USER,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    LOGOUT_USER,
    USER_FROM_TOKEN,
    USER_FROM_TOKEN_SUCCESS,
    USER_FROM_TOKEN_FAILURE,
    REQUESTING_RESET_PASSWORD,
    REQUESTING_RESET_PASSWORD_SUCCESS,
    REQUESTING_RESET_PASSWORD_FAILURE,
    RESETTING_PASSWORD,
    RESETTING_PASSWORD_FAILURE,
    RESETTING_PASSWORD_SUCCESS
} from './actionTypes';
import localStorage from './../../utils/localStorage';

export function loginLoading() {
    return {
        type: SIGNIN_USER
    };
}

export function login(email, password) {

    return (dispatch) => {
        dispatch(loginLoading());

        return AccountService.loginUser(email, password)
            .then((response) => {
                dispatch(loginSuccess(response))
            })
            .catch((error) => {
                dispatch(loginErrored(true, error));
            });
    };

}

export function loginErrored(hasError, error) {
    return {
        type: SIGNIN_USER_FAILURE,
        haserror: hasError,
        error: error
    };
}

export function loginSuccess(response) {
    localStorage.setToken(response.token)

    return {
        type: SIGNIN_USER_SUCCESS,
        user: response.user,
        isAuthenticated: true
    };
}

export function logout() {
    localStorage.removeToken();

    return {
        type: LOGOUT_USER,
        isAuthenticated: false
    };
}

/************* get user from token ************/
export function getUserFromTokenErrored() {
    localStorage.removeToken();

    return {
        type: USER_FROM_TOKEN_FAILURE
    };
}
export function getUserFromTokenSuccess(response, token) {
    localStorage.setToken(token)

    return {
        type: USER_FROM_TOKEN_SUCCESS,
        user: response.user,
        isAuthenticated: true
    };
}

export function getUserFromTokenLoading() {
    return {
        type: USER_FROM_TOKEN
    };
}

export function getUserFromToken() {
    return (dispatch) => {
        const token = localStorage.getToken();

        dispatch(getUserFromTokenLoading());

        return AccountService.getUserFromToken(token)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseDecoded) => dispatch(getUserFromTokenSuccess(responseDecoded, token)))
            .catch((error) => {
                dispatch(getUserFromTokenErrored());
            });
    };
}


/************* start reset password process ************/
export function requestPasswordReset(email) {

    return (dispatch) => {
        dispatch({
            type: REQUESTING_RESET_PASSWORD
        });

        return AccountService.requestResetPassword(email)
            .then(response => {
                dispatch(requestPasswordResetSuccess(response))
            })
            .catch((error) => {
                dispatch(requestPasswordResetFailure(true, error));
            });
    };

}

export function requestPasswordResetFailure(hasError, error) {
    return {
        type: REQUESTING_RESET_PASSWORD_FAILURE,
        haserror: hasError,
        error: error
    };
}

export function requestPasswordResetSuccess(response) {
    return {
        type: REQUESTING_RESET_PASSWORD_SUCCESS,
        email: response.email
    };
}

/*********** RESET PASSWORD **************/
export function resetPassword(token, password) {

    return (dispatch) => {
        dispatch({
            type: RESETTING_PASSWORD
        });

        return AccountService.resetPassword(token, password)
            .then(response => {
                dispatch(resetPasswordSuccess(response))
            })
            .catch((error) => {
                dispatch(resetPasswordFailure(true, error));
            });
    };

}

export function resetPasswordFailure(hasError, error) {
    return {
        type: RESETTING_PASSWORD_FAILURE,
        haserror: hasError,
        error: error
    };
}

export function resetPasswordSuccess(response) {
    return {
        type: RESETTING_PASSWORD_SUCCESS,
    };
}
