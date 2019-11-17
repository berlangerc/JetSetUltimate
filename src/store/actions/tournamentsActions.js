import TournamentService from './../api/TournamentsService';

import {
    FETCHING_TOURNAMENTS_SUCCESS,
    FETCHING_TOURNAMENTS_FAILURE,
    FETCHING_USER_TOURNAMENTS,
    FETCHING_USER_TOURNAMENTS_SUCCESS,
    FETCHING_USER_TOURNAMENTS_FAILURE,
    ADDDING_TOURNAMENT_SUCCESS,
    ADDDING_TOURNAMENT_FAILURE,
    ADDDING_TOURNAMENT,
    UPDATING_TOURNAMENT_SUCCESS,
    UPDATING_TOURNAMENT_FAILURE,
    UPDATING_TOURNAMENT,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_SUCCESS,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_FAILURE,
    SUBSCRIBING_FOR_TOURNAMENT_FAILURE,
    SUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    SUBSCRIBING_FOR_TOURNAMENT,
    UNSUBSCRIBING_FOR_TOURNAMENT_FAILURE,
    UNSUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    UNSUBSCRIBING_FOR_TOURNAMENT,
    FETCHING_PLAYER_SUBSCRIPTIONS_SUCCESS,
    FETCHING_PLAYER_SUBSCRIPTIONS_FAILURE,
    FETCHING_PLAYER_SUBSCRIPTIONS,
} from './actionTypes';

/**
 * GET tournament
 */

export function getTournaments() {

    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");

        return TournamentService.getTournaments()
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return dispatch(tournamentsFetchSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(tournamentsFetchFailure(true, error));
            });
    };

}


function tournamentsFetchFailure(hasError, error) {
    return {
        type: FETCHING_TOURNAMENTS_FAILURE,
        haserror: hasError,
        error: error
    };
}

function tournamentsFetchSuccess(response) {
    return {
        type: FETCHING_TOURNAMENTS_SUCCESS,
        tournaments: response
    };
}

/**
 * GET tournamentsForUser
 */
export function getTournamentsForUser() {

    return (dispatch) => {
        dispatch(userTournamentsFetching());

        return TournamentService.getTournamentsForUser()
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return dispatch(userTournamentsFetchSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(userTournamentsFetchFailure(true, error));
            });
    };
}

function userTournamentsFetching() {
    return {
        type: FETCHING_USER_TOURNAMENTS
    };
}

function userTournamentsFetchFailure(hasError, error) {
    return {
        type: FETCHING_USER_TOURNAMENTS_FAILURE,
        haserror: hasError,
        error: error
    };
}

function userTournamentsFetchSuccess(response) {
    return {
        type: FETCHING_USER_TOURNAMENTS_SUCCESS,
        tournaments: response
    };
}

/**
 * GET tournament Info ForUser and subscription
 */
export function getTournamentInfoForUserAndSubscription(tournamentId) {

    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");

        dispatch(gettingTournamentInfoForUserAndSubscription())

        return TournamentService.getTournamentInfoForUserAndSubscription(tournamentId)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return dispatch(getTournamentInfoForUserAndSubscriptionSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(getTournamentInfoForUserAndSubscriptionFailure(true, error));
            });
    };
}

function gettingTournamentInfoForUserAndSubscription() {
    return {
        type: FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION
    };
}

function getTournamentInfoForUserAndSubscriptionFailure(hasError, error) {
    return {
        type: FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_FAILURE,
        haserror: hasError,
        error: error
    };
}

function getTournamentInfoForUserAndSubscriptionSuccess(response) {
    return {
        type: FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_SUCCESS,
        tournamentSubscription: response
    };
}

/**
 * ADD tournament
 */
export function addTournament(tournament) {
    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");
        dispatch(tournamentAddding());

        return TournamentService.addTournament(tournament)
            .then((response) => {
                if (!response.success) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((responseJson) => {
                return dispatch(tournamentAddSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(tournamentAddFailure(true, error));
            });
    };
}
function tournamentAddding(hasError, error) {
    return {
        type: ADDDING_TOURNAMENT
    };
}

function tournamentAddFailure(hasError, error) {
    return {
        type: ADDDING_TOURNAMENT_FAILURE,
        haserror: hasError,
        error: error
    };
}

function tournamentAddSuccess(response) {
    return {
        type: ADDDING_TOURNAMENT_SUCCESS,
    };
}

/********** TOURNAMENT UPDATE ***************/
export function updateTournament(tournament) {
    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");
        dispatch(tournamentUpdating());

        return TournamentService.updateTournament(tournament)
            .then((response) => {
                if (!response.success) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((responseJson) => {
                return dispatch(tournamentUpdateSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(tournamentUpdateFailure(true, error));
            });
    };
}
function tournamentUpdating(hasError, error) {
    return {
        type: UPDATING_TOURNAMENT
    };
}

function tournamentUpdateFailure(hasError, error) {
    return {
        type: UPDATING_TOURNAMENT_FAILURE,
        haserror: hasError,
        error: error
    };
}

function tournamentUpdateSuccess(response) {
    return {
        type: UPDATING_TOURNAMENT_SUCCESS,
    };
}

/**
 * subscribe for tournament
 */
export function subscribeForTournament(tournamentId, subscriptionData) {
    return (dispatch) => {
        dispatch(tournamentSubscribing());
        return TournamentService.subscribeForTournament(tournamentId, subscriptionData)
            .then((response) => {
                if (!response.success) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((responseJson) => {
                return dispatch(tournamentSubscriptionSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(tournamentSubscriptionFailure(true, error));
            });
    };
}

function tournamentSubscribing() {
    return {
        type: SUBSCRIBING_FOR_TOURNAMENT
    };
}

function tournamentSubscriptionSuccess(response) {
    return {
        type: SUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    };
}

function tournamentSubscriptionFailure(hasError, error) {
    return {
        type: SUBSCRIBING_FOR_TOURNAMENT_FAILURE,
        haserror: hasError,
        error: error
    };
}

/**
 * subscribe for tournament
 */
export function unsubscribeForTournament(tournamentId, subscriptionData) {
    return (dispatch) => {
        dispatch(tournamentUnsubscribing());
        return TournamentService.unsubscribeForTournament(tournamentId, subscriptionData)
            .then((response) => {
                if (!response.success) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((responseJson) => {
                return dispatch(tournamentUnsubscriptionSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(tournamentUnsubscriptionFailure(true, error));
            });
    };
}

function tournamentUnsubscribing() {
    return {
        type: UNSUBSCRIBING_FOR_TOURNAMENT
    };
}

function tournamentUnsubscriptionSuccess(response) {
    return {
        type: UNSUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    };
}

function tournamentUnsubscriptionFailure(hasError, error) {
    return {
        type: UNSUBSCRIBING_FOR_TOURNAMENT_FAILURE,
        haserror: hasError,
        error: error
    };
}

/************************** GETTING PLAYER SUBSCRIPTIONS *********************/
export function getPlayerSubscriptions(tournamentId) {

    return (dispatch) => {
        // const token = localStorage.getItem("jwtToken");

        dispatch(gettingPlayerSubscriptions())

        return TournamentService.getPlayerSubscriptions(tournamentId)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => response.json())
            .then((responseJson) => {
                return dispatch(getPlayerSubscriptionsSuccess(responseJson))
            })
            .catch((error) => {
                dispatch(getPlayerSubscriptionsFailure(true, error));
            });
    };
}

function gettingPlayerSubscriptions() {
    return {
        type: FETCHING_PLAYER_SUBSCRIPTIONS
    };
}

function getPlayerSubscriptionsFailure(hasError, error) {
    return {
        type: FETCHING_PLAYER_SUBSCRIPTIONS_FAILURE,
        haserror: hasError,
        error: error
    };
}

function getPlayerSubscriptionsSuccess(response) {
    return {
        type: FETCHING_PLAYER_SUBSCRIPTIONS_SUCCESS,
        players: response
    };
}
