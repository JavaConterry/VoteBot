"use strict";
exports.__esModule = true;
var Telegraf = require('telegraf').Telegraf;
var fs = require("fs");
var BOT_TOKEN = fs.readFileSync('token.txt', 'utf8');
console.log(BOT_TOKEN);
var bot = new Telegraf(BOT_TOKEN);
bot.start(function (ctx) {
    ctx.reply('start phrase');
});
bot.command('get_random', function (ctx) {
    ctx.reply(Math.floor(Math.random() * 100));
});
bot.on('text', function (ctx) { return ctx.reply('Hello World'); });
bot.launch();
