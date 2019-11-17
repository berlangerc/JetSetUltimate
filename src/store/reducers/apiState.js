import {
    CLEAR_API_STATES,
    CLEAR_OTHER_API_STATES,
    REQUEST_DONE,
    REQUEST_FAILED,
    REQUEST_LOADING
} from '../actions/actionTypes';
import { cloneDeep, get, set } from 'lodash';

const INITIAL_STATE = {};

export default function (state = INITIAL_STATE, action) {

    const requestType = action.requestType;

    switch (action.type) {
        case REQUEST_LOADING:
            return updateState(state, { loading: true, success: false, requestType, error: null });
        case REQUEST_DONE:
            return updateState(state, { loading: false, success: true, requestType, error: null });
        case REQUEST_FAILED: {
            return updateState(state, { loading: false, success: false, requestType, error: action.error });
        }
        case CLEAR_OTHER_API_STATES:
            return removeOtherStates(state, requestType);
        case CLEAR_API_STATES:
            return {} //removeState(state, { loading: false, success: false, requestType, error: null });
        default:
            return state;
    }
}

function updateState(state, { requestType, ...status }) {
    const clonedState = cloneDeep(state);
    return set(clonedState, requestType, status);
}


// function removeState(state, { requestType, ...status }) {
//     const clonedState = _.cloneDeep(state);
//     return _.unset(clonedState, requestType);

// }

function removeOtherStates(state, requestType) {
    return set({}, requestType, get(state, requestType));
}