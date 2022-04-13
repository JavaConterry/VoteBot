"use strict";
exports.__esModule = true;
exports.pushUserIntoJSON = void 0;
var fs = require("fs");
function createUser(config) {
    var newUser = { username: "common username", vote_status: false };
    newUser.username = config.username;
    return newUser;
}
function pushUserIntoJSON(userToPush) {
    var data = JSON.parse(fs.readFileSync('datasource.json', 'utf8'));
    var usersDataLength = data.user.length;
    for (var i = 0; i < usersDataLength; i++) {
        if (data.user[i].username == userToPush.username) {
            return "username already exists";
        }
    }
    data.user[usersDataLength] = userToPush;
    fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
    return "registration seccess";
}
exports.pushUserIntoJSON = pushUserIntoJSON;
