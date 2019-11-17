import {
    FETCHING_TEAMS_SUCCESS,
    FETCHING_TEAMS_FAILURE
} from '../actions/actionTypes';

const INITIAL_STATE = { teams: [], status: null, error: null, loading: false };

export default function (state = INITIAL_STATE, action) {
    let error;

    switch (action.type) {
        case FETCHING_TEAMS_SUCCESS:
            return { ...state, teams: action.teams, status: 'teamsFetched', error: null };
        case FETCHING_TEAMS_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, teams: [], status: 'teamsFetchedFailure', error: error };
        default:
            return state;
    }
}