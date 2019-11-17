import moment from 'moment';

export function ableToUnsubscribe(startDate) {
    const twoWeekEarlier = moment(startDate).subtract(14, 'days');
    const today = moment();

    return today.isBefore(twoWeekEarlier);
}

export function ableToSubscribe(startDate, openDate) {
    const openDateMoment = moment(openDate);
    const weekEarlier = moment(startDate).subtract(7, 'days');

    const today = moment();

    return today.isSameOrAfter(openDateMoment) && today.isBefore(weekEarlier);
}

export function substractDaysFrom(date, days) {
    return moment(date).subtract(days, 'days');
}

export function ableToUpdateSubscription(startDate) {
    return ableToUnsubscribe(startDate);
}


export function isSubscribedForTournament(tournament) {
    return getOpenSubscriptions(tournament).length > 0;
}

export function getOpenSubscriptions(tournament) {

    return tournament.Subscriptions.filter(tournament => { return tournament.Cost && !tournament.Refund });
}

export function getOpenSubscription(tournament) {

    const openSubscriptions = getOpenSubscriptions(tournament);

    if (openSubscriptions[0]) {
        return openSubscriptions[0];
    }
    return;
}

