"use strict";
exports.__esModule = true;
var Telegraf = require('telegraf').Telegraf;
var fs = require("fs");
var BOT_TOKEN = fs.readFileSync('token.txt', 'utf8');
var bot = new Telegraf(BOT_TOKEN);
function createUser(config) {
    var newUser = { username: "common username", vote_status: false };
    newUser.username = config.username;
    return newUser;
}
// let myUser = createUser({username:"Fill"})
// pushUserIntoJSON(myUser)
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
//logic {{{{{{{{
bot.start(function (ctx) {
    ctx.reply('start phrase');
});
bot.command('get_random', function (ctx) {
    ctx.reply(Math.floor(Math.random() * 100));
});
bot.command('register', function (ctx) {
    var log_result = pushUserIntoJSON({ username: ctx.update.message.from.username });
    ctx.reply(log_result);
});
bot.on('text', function (ctx) {
    ctx.reply('Hello World');
});
//logic }}}}}}}}
bot.launch();
