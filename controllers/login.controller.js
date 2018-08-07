var loginService = require("./../services/login.service");

// Controllers handle Use Case Flows on the server project.
// Not much here, as this is a simple Login with credentials and/or tokens.

exports.login = (username, password) => {
    return loginService.login(username, password);
}

exports.logout = () => {
    return loginService.logout();
}

exports.tokenLogin = (token) => {
    return loginService.verifyToken(token);
}