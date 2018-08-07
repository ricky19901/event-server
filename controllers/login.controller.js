var loginService = require("./../services/login.service");

exports.login = (username, password) => {
    return loginService.login(username, password);
}

exports.logout = () => {
    return loginService.logout();
}