import _ from 'lodash';
import {
    SIGNIN_USER, SIGNIN_USER_SUCCESS, SIGNIN_USER_FAILURE,
    LOGOUT_USER,
    USER_FROM_TOKEN, USER_FROM_TOKEN_SUCCESS, USER_FROM_TOKEN_FAILURE,
    REQUESTING_RESET_PASSWORD, REQUESTING_RESET_PASSWORD_SUCCESS, REQUESTING_RESET_PASSWORD_FAILURE,
    RESETTING_PASSWORD, RESETTING_PASSWORD_SUCCESS, RESETTING_PASSWORD_FAILURE, ACCOUNT_UPDATE_BASIC_INFO, ACCOUNT_UPDATE_PLAYER_INFO
} from '../actions/actionTypes';

const INITIAL_STATE = { user: null, status: null, error: null, loading: false, isAuthenticated: false, password_reset_requested: null };

export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case SIGNIN_USER:
            return { ...state, user: null, status: 'signin', error: null, loading: true, isAuthenticated: false };
        case SIGNIN_USER_SUCCESS:
            return { ...state, user: action.user, status: 'authenticated', error: null, loading: false, isAuthenticated: action.isAuthenticated }; //<-- authenticated
        case SIGNIN_USER_FAILURE:// return error and make loading = false
            error = action.error || { message: action.payload.message };//2nd one is network or server down errors   
            return { ...state, user: null, status: 'signin', error: error, loading: false };
        case LOGOUT_USER:
            return { ...state, user: null, status: 'logout', error: null, loading: false, isAuthenticated: action.isAuthenticated };
        case USER_FROM_TOKEN:
            return { ...state, user: null, status: 'getUserFromToken', error: null, loading: true };
        case USER_FROM_TOKEN_SUCCESS:
            return { ...state, user: action.user, status: 'tokenToUserSuccesfull', error: null, loading: false, isAuthenticated: action.isAuthenticated }; //<-- authenticated
        case USER_FROM_TOKEN_FAILURE:
            return { ...state, user: null, status: 'tokenToUserFailed', error: null, loading: false };
        case REQUESTING_RESET_PASSWORD:
            return { ...state, password_reset_requested: null, error: null, loading: true };
        case REQUESTING_RESET_PASSWORD_SUCCESS:
            return { ...state, password_reset_requested: action.email, error: null, loading: false };
        case REQUESTING_RESET_PASSWORD_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, password_reset_requested: null, error: error, loading: false };
        case RESETTING_PASSWORD:
            return { ...state, password_reset_succeeded: null, error: null, loading: true };
        case RESETTING_PASSWORD_SUCCESS:
            return { ...state, password_reset_succeeded: true, loading: false };
        case RESETTING_PASSWORD_FAILURE:
            error = action.error || { message: action.payload.message };
            return { ...state, password_reset_succeeded: false, error, loading: false };
        case ACCOUNT_UPDATE_BASIC_INFO:
            return { ...state, user: updateBasicInfo(state.user, action.updatedbasicUserInfo) }
        case ACCOUNT_UPDATE_PLAYER_INFO:
            return { ...state, user: updatePlayerInfo(state.user, action.updatedPlayerUserInfo) }
        default:
            return state;
    }
}

const updateBasicInfo = (user, updatedbasicUserInfo) => {
    const clonedUser = _.cloneDeep(user);
    clonedUser.firstName = updatedbasicUserInfo.firstName;
    clonedUser.lastName = updatedbasicUserInfo.lastName;
    clonedUser.phoneNumber = updatedbasicUserInfo.phoneNumber;
    clonedUser.gender = updatedbasicUserInfo.gender;
    clonedUser.birthDay = updatedbasicUserInfo.birthDay;
    clonedUser.streetName = updatedbasicUserInfo.streetName;
    clonedUser.number = updatedbasicUserInfo.number;
    clonedUser.postalCode = updatedbasicUserInfo.postalCode;
    clonedUser.city = updatedbasicUserInfo.city;

    return clonedUser;
}

const updatePlayerInfo = (user, updatedPlayerUserInfo) => {
    const clonedUser = _.cloneDeep(user);

    clonedUser.playerInfo.team1 = updatedPlayerUserInfo.team1;
    clonedUser.playerInfo.team2 = updatedPlayerUserInfo.team2;
    clonedUser.playerInfo.jerseyNumber = updatedPlayerUserInfo.jerseyNumber;
    return clonedUser;

}