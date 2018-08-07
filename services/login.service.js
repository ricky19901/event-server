var loginLocator = require("./../locators/login.locator");

exports.login = (username, password) => {
    return loginLocator.login(username, password);
}

exports.logout = () => {
    return loginLocator.logout();
}

exports.tokenLogin = (token) => {
    return loginLocator.tokenLogin(token);
}