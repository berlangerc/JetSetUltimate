/* eslint no-useless-escape: 0 */  // --> OFF
var validators = module.exports = {};

validators.validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let resultTest = re.test(email)
    let errorMessage

    if (resultTest) {
        errorMessage = ''
    } else {
        errorMessage = 'Geen geldig E-mailadres'
    }
    return { returnedErrorMessage: errorMessage, returnedSatisfied: resultTest };
}

validators.isNumber = function (number) {
    var pattern = /^\d*$/;
    let resultTest = pattern.test(number);
    let errorMessage
    if (resultTest) {
        errorMessage = ''
    } else {
        errorMessage = 'Incorrect number'
    }
    return { returnedErrorMessage: errorMessage, returnedSatisfied: resultTest };
}

validators.isTelephoneNumber = function (telephoneNumber) {
    var pattern = /^(\+(\d{10}|\d{11}))$|^(\d{9}|\d{10})$/;

    let resultTest = pattern.test(telephoneNumber)
    let errorMessage;

    if (resultTest) {
        errorMessage = ''
    }
    else {
        errorMessage = 'Incorrect phonenumber'
    }
    return { returnedErrorMessage: errorMessage, returnedSatisfied: resultTest };
}

validators.isJerseyNumber = function (number) {
    let errorMessage;
    let resultTest;
    if (number < 100 && number > 0) {
        errorMessage = ''
        resultTest = true;
    } else {
        errorMessage = 'Incorrect Jersey Number'
        resultTest = false;
    }
    return { returnedErrorMessage: errorMessage, returnedSatisfied: resultTest };
}