const { Telegraf } = require('telegraf')
import * as fs from 'fs';

const BOT_TOKEN = fs.readFileSync('token.txt','utf8');
const bot = new Telegraf(BOT_TOKEN)


bot.start(ctx => {
    ctx.reply('start phrase')
})

bot.command('get_random', ctx => {
    ctx.reply(Math.floor(Math.random()*100))
})


bot.on('text', (ctx) => ctx.reply('Hello World'))


bot.launch()