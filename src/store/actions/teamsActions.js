import TeamsService from './../api/TeamsService';

import {
    FETCHING_TEAMS_SUCCESS,
    FETCHING_TEAMS_FAILURE
} from './actionTypes';

export function getTeams() {

    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");

        return TeamsService.getTeams()
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return dispatch(teamsFetchSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(teamsFetchFailure(true, error));
            });
    };

}


export function teamsFetchFailure(hasError, error) {
    return {
        type: FETCHING_TEAMS_FAILURE,
        haserror: hasError,
        error: error
    };
}

export function teamsFetchSuccess(response) {
    return {
        type: FETCHING_TEAMS_SUCCESS,
        teams: response
    };
}