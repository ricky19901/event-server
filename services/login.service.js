var loginLocator = require("./../locators/login.locator");

exports.login = (username, password) => {
    return loginLocator.login(username, password);
}

exports.logout = () => {
    return loginLocator.logout();
}