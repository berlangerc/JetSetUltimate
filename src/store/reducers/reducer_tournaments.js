import {
    FETCHING_TOURNAMENTS,
    FETCHING_TOURNAMENTS_FAILURE,
    FETCHING_TOURNAMENTS_SUCCESS,
    ADDDING_TOURNAMENT,
    ADDDING_TOURNAMENT_SUCCESS,
    ADDDING_TOURNAMENT_FAILURE,
    FETCHING_USER_TOURNAMENTS,
    FETCHING_USER_TOURNAMENTS_SUCCESS,
    FETCHING_USER_TOURNAMENTS_FAILURE,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_FAILURE,
    FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_SUCCESS,
    SUBSCRIBING_FOR_TOURNAMENT,
    SUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    SUBSCRIBING_FOR_TOURNAMENT_FAILURE,
    UNSUBSCRIBING_FOR_TOURNAMENT,
    UNSUBSCRIBING_FOR_TOURNAMENT_SUCCESS,
    UNSUBSCRIBING_FOR_TOURNAMENT_FAILURE,
    FETCHING_PLAYER_SUBSCRIPTIONS,
    FETCHING_PLAYER_SUBSCRIPTIONS_FAILURE,
    FETCHING_PLAYER_SUBSCRIPTIONS_SUCCESS,
    UPDATING_TOURNAMENT,
    UPDATING_TOURNAMENT_SUCCESS,
    UPDATING_TOURNAMENT_FAILURE
} from '../actions/actionTypes';

const INITIAL_STATE = {
    tournaments: []
    , error: null
    , loading: false
    , add_tournament_success: false
    , update_tournament_success: false
    , userTournaments: []
    , tournamentSubscription: null
    , subscribedPlayers: []
};

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {

        case FETCHING_TOURNAMENTS:
            return { ...state, tournaments: [], error: null, loading: true };
        case FETCHING_TOURNAMENTS_SUCCESS:
            return { ...state, tournaments: action.tournaments, error: null, loading: false };
        case FETCHING_TOURNAMENTS_FAILURE:// return error and make loading = false
            error = action.error || { message: action.payload.message };//2nd one is network or server down errors   
            return { ...state, tournaments: [], error: error, loading: false };

        case FETCHING_USER_TOURNAMENTS:
            return { ...state, error: null, loading: true };
        case FETCHING_USER_TOURNAMENTS_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, userTournaments: [], loading: false }
        case FETCHING_USER_TOURNAMENTS_SUCCESS:
            return { ...state, userTournaments: action.tournaments, error: null, loading: false };

        case FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION:
            return { ...state, error: null, loading: true, tournamentSubscription: null };
        case FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, tournamentSubscription: null, loading: false }
        case FETCHING_TOURNAMENT_INFO_AND_SUBSCRIPTION_SUCCESS:
            return { ...state, tournamentSubscription: action.tournamentSubscription, error: null, loading: false };

        case FETCHING_PLAYER_SUBSCRIPTIONS:
            return { ...state, error: null, loading: true, subscribedPlayers: null };
        case FETCHING_PLAYER_SUBSCRIPTIONS_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, subscribedPlayers: null, loading: false }
        case FETCHING_PLAYER_SUBSCRIPTIONS_SUCCESS:
            return { ...state, subscribedPlayers: action.players, error: null, loading: false };


        case ADDDING_TOURNAMENT:
            return { ...state, add_tournament_success: false, error: null, loading: true };
        case ADDDING_TOURNAMENT_SUCCESS:
            return { ...state, add_tournament_success: true, error: null, loading: false };
        case ADDDING_TOURNAMENT_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, add_tournament_success: false, loading: false };


        case UPDATING_TOURNAMENT:
            return { ...state, update_tournament_success: false, error: null, loading: true };
        case UPDATING_TOURNAMENT_SUCCESS:
            return { ...state, update_tournament_success: true, error: null, loading: false };
        case UPDATING_TOURNAMENT_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, update_tournament_success: false, loading: false };


        case SUBSCRIBING_FOR_TOURNAMENT:
            return { ...state, subscribe_tournament_success: false, error: null, loading: true };
        case SUBSCRIBING_FOR_TOURNAMENT_SUCCESS:
            return { ...state, subscribe_tournament_success: true, error: null, loading: false };
        case SUBSCRIBING_FOR_TOURNAMENT_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, subscribe_tournament_success: false, loading: false };


        case UNSUBSCRIBING_FOR_TOURNAMENT:
            return { ...state, unsubscribe_tournament_success: false, error: null, loading: true };
        case UNSUBSCRIBING_FOR_TOURNAMENT_SUCCESS:
            return { ...state, unsubscribe_tournament_success: true, error: null, loading: false };
        case UNSUBSCRIBING_FOR_TOURNAMENT_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, error: error, unsubscribe_tournament_success: false, loading: false };
        default:
            return state;
    }
}