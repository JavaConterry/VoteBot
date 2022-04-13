"use strict";
exports.__esModule = true;
var Telegraf = require('telegraf').Telegraf;
var UserService_1 = require("./UserService");
var UserService_2 = require("./UserService");
var fs = require("fs");
var BOT_TOKEN = fs.readFileSync('token.txt', 'utf8');
var bot = new Telegraf(BOT_TOKEN);
//logic {{{{{{{{
bot.start(function (ctx) {
    ctx.reply('start phrase');
});
bot.command('get_random', function (ctx) {
    ctx.reply(Math.floor(Math.random() * 100));
});
bot.command('register', function (ctx) {
    var log_result = (0, UserService_1.pushUserIntoJSON)({ username: ctx.update.message.from.username, vote_status: false, tokens: 100 });
    ctx.reply(log_result);
});
bot.command('mytokenbalance', function (ctx) {
    var tokenBalance = 100;
    ctx.reply('number of tokens: ' + (0, UserService_2.showUserTokensByUsername)(ctx.update.message.from.username));
});
bot.on('text', function (ctx) {
    ctx.reply('Hello World');
});
//logic }}}}}}}}
bot.launch();
