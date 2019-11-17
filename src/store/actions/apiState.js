import { REQUEST_LOADING, REQUEST_FAILED, REQUEST_DONE, CLEAR_API_STATES, CLEAR_OTHER_API_STATES } from "./actionTypes";

export const isLoading = (requestType) => {
    return (dispatch) => {
        dispatch({ requestType, type: REQUEST_LOADING });
    };
};

export const isDone = (requestType) => {
    return (dispatch) => {
        dispatch({ requestType, type: REQUEST_DONE });
    };
};

export const isFailed = (requestType, error) => {
    return (dispatch) => {
        dispatch({ requestType, type: REQUEST_FAILED, error });
    };
};

export const clearApiState = () => {
    return (dispatch) => {
        dispatch({ type: CLEAR_API_STATES });
    };
}

export const resetOthers = (requestType) => {
    return (dispatch) => {
        dispatch({ type: CLEAR_OTHER_API_STATES, requestType });
    };
}