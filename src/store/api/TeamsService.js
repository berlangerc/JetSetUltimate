
import Request from './Request';

export default class TeamsService {
    static serviceUrl = '/api/teams/';

    static getTeams() {

        return Request.authGet(TeamsService.serviceUrl)
    }
}