const tokenString = 'jwtToken';

exports.setToken = token => {
    localStorage.setItem(tokenString, token);
}

exports.removeToken = () => {
    localStorage.removeItem(tokenString);
}

exports.getToken = () => {
    return localStorage.getItem(tokenString);
}