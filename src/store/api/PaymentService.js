
import Request from './Request';

export default class PaymentService {
    static serviceUrl = '/api/payments/';

    static getPayments(token) {

        return Request.authGet(PaymentService.serviceUrl)
    }
}