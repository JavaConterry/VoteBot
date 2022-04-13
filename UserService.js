"use strict";
exports.__esModule = true;
exports.showUserTokensByUsername = exports.pushUserIntoJSON = void 0;
var fs = require("fs");
function createUser(config) {
    var newUser = { username: "common username", vote_status: false, tokens: 100 };
    newUser.username = config.username;
    return newUser;
}
function pushUserIntoJSON(userToPush) {
    var data = JSON.parse(fs.readFileSync('datasource.json', 'utf8'));
    var user = findUserByUsername(userToPush.username);
    if (user === null) {
        data.user[data.user.length] = userToPush;
        fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
        return "registration seccess";
    }
    else
        return "user already exists";
}
exports.pushUserIntoJSON = pushUserIntoJSON;
function showUserTokensByUsername(username) {
    var data = JSON.parse(fs.readFileSync('datasource.json', 'utf8'));
    var user = findUserByUsername(username);
    if (user !== null)
        return user.tokens;
    else
        return null;
}
exports.showUserTokensByUsername = showUserTokensByUsername;
function findUserByUsername(username) {
    var data = JSON.parse(fs.readFileSync('datasource.json', 'utf8'));
    var usersDataLength = data.user.length;
    for (var i = 0; i < usersDataLength; i++) {
        if (data.user[i].username == username) {
            return data.user[i];
        }
    }
    fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
    return null;
}
