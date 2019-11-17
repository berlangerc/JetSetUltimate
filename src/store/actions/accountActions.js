import ProfileService from '../api/ProfileService';
import { ACCOUNT_UPDATE_PLAYER_INFO, ACCOUNT_UPDATE_BASIC_INFO } from './actionTypes';
import { isLoading, isDone, isFailed } from './apiState';
import { MYPROFILE_BASIC, MYPROFILE_PLAYER } from '../api/apiStates';

export const updateBasicInfo = (updatedbasicUserInfo) => {
    return (dispatch) => {
        dispatch(isLoading(MYPROFILE_BASIC));

        return ProfileService.updateBasicInfo(updatedbasicUserInfo)
            .then((response) => {
                dispatch(isDone(MYPROFILE_BASIC));

                dispatch({
                    type: ACCOUNT_UPDATE_BASIC_INFO,
                    updatedbasicUserInfo
                });


            })
            .catch((error) => {
                dispatch(isFailed(MYPROFILE_BASIC, (error && error.message || true)));
            });
    };
}

export const updatePlayerInfo = (updatedPlayerUserInfo) => {
    return (dispatch) => {
        dispatch(isLoading(MYPROFILE_PLAYER));

        return ProfileService.updatePlayerInfo(updatedPlayerUserInfo)
            .then(() => {
                dispatch(isDone(MYPROFILE_PLAYER));

                dispatch({
                    type: ACCOUNT_UPDATE_PLAYER_INFO,
                    updatedPlayerUserInfo
                });
            })
            .catch((error) => {
                dispatch(isFailed(MYPROFILE_PLAYER, (error && error.message || true)));
            });
    };
}