
import Request from './Request';

export default class TournamentService {
    static serviceUrl = '/api/tournaments/';

    static getTournaments() {

        return Request.authGet(TournamentService.serviceUrl)
    }

    static getTournament(tournamentId) {
        return Request.authGet(TournamentService.serviceUrl + '/' + tournamentId);
    }

    static getTournamentsForUser() {
        return Request.authGet(TournamentService.serviceUrl + 'user')
    }

    static getTournamentInfoForUserAndSubscription(tournament) {
        return Request.authGet(TournamentService.serviceUrl + 'user/' + tournament)
    }

    static addTournament(newTournament) {
        return Request.authPost(TournamentService.serviceUrl + 'add', newTournament)
    }

    static updateTournament(updatedTournament) {
        return Request.authPost(TournamentService.serviceUrl + 'update', updatedTournament)
    }

    static subscribeForTournament(tournamentId, subscriptionData) {
        return Request.authPost(TournamentService.serviceUrl + 'subscribe/' + tournamentId, subscriptionData);
    }
    static unsubscribeForTournament(tournamentId, subscriptionData) {
        return Request.authPost(TournamentService.serviceUrl + 'unsubscribe/' + tournamentId, subscriptionData);
    }

    static getPlayerSubscriptions(tournamentId, subscriptionData) {
        return Request.authGet(TournamentService.serviceUrl + 'subscriptions/' + tournamentId);
    }
}