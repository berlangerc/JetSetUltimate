import url from 'url-join';
import Request from './Request';

export default class ProfileService {
    static serviceUrl = '/api/account/profile/';

    static updateBasicInfo(updatedBasicInfo) {
        return Request.authPost(url(ProfileService.serviceUrl, 'info'), updatedBasicInfo);
    }

    static updatePlayerInfo(updatedPlayerInfo) {
        return Request.authPost(url(ProfileService.serviceUrl, 'player'), updatedPlayerInfo);
    }
}