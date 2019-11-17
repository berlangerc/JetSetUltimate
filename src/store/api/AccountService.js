import url from 'url-join';
import Request from './Request';

export default class AccountService {
    static serviceUrl = '/api/account/';

    static loginUser(email, password) {

        // return this.getMockedUser();

        return Request.post(
            AccountService.serviceUrl + `login`,
            {
                email: email,
                password: password
            }
        )
    }

    static getMockedUser() {
        return new Promise((resolve, reject) => {
            let mockedUser = {
                user: {
                    firstName: "mockedFirst",
                    lastName: "mockedLast",
                    email: "mocked@emailaddress.be",
                    roles: ["trainer"]
                }
            }
            return resolve(mockedUser);
        })
    }

    static requestResetPassword(email) {
        return Request.post(this.serviceUrl + 'resetpassword', { email })
    }

    static resetPassword(token, password) {
        return Request.post(
            AccountService.serviceUrl + `resetpasswordcomplete`,
            {
                token,
                password
            }
        )
    }

    static getUserFromToken(token) {
        // return this.getMockedUser();
        return Request.authGet(AccountService.serviceUrl + `getUserFromToken`)
    }
}