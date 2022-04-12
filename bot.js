"use strict";
exports.__esModule = true;
var Telegraf = require('telegraf').Telegraf;
var fs = require("fs");
var BOT_TOKEN = fs.readFileSync('token.txt', 'utf8');
var bot = new Telegraf(BOT_TOKEN);
var data = JSON.parse(fs.readFileSync('datasource.json', 'utf8'));
function createUser(config) {
    var newUser = { username: "common username", vote_status: false };
    newUser.username = config.username;
    return newUser;
}
var myUser = createUser({ username: "Fill" });
pushUserIntoJSON(myUser);
function pushUserIntoJSON(userToPush) {
    var usersDataLength = data.user.length;
    for (var i = 0; i < usersDataLength; i++) {
        if (data.user[i].username == userToPush.username) {
            console.log("username already exists");
            return;
        }
    }
    data.user[usersDataLength] = userToPush;
}
fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
console.log(data);
//logic {{{{{{{{
bot.start(function (ctx) {
    ctx.reply('start phrase');
});
bot.command('get_random', function (ctx) {
    ctx.reply(Math.floor(Math.random() * 100));
});
bot.command('register', function (ctx) {
    ctx.reply("registration seccess");
});
bot.on('text', function (ctx) { return ctx.reply('Hello World'); });
//logic }}}}}}}}
bot.launch();
