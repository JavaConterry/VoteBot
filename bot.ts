const { Telegraf } = require('telegraf')
import { pushUserIntoJSON } from './UserService'
import * as fs from 'fs';

const BOT_TOKEN = fs.readFileSync('token.txt','utf8');
const bot = new Telegraf(BOT_TOKEN)

//logic {{{{{{{{
bot.start(ctx => {
    ctx.reply('start phrase')
})

bot.command('get_random', ctx => {
    ctx.reply(Math.floor(Math.random()*100))
})

bot.command('register', ctx => {
    let log_result = pushUserIntoJSON({username : ctx.update.message.from.username})
    ctx.reply(log_result)
})


bot.on('text', (ctx) => {
    ctx.reply('Hello World')
})
//logic }}}}}}}}



bot.launch()