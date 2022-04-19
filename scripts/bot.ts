const { Telegraf } = require('telegraf')
const { ethers } = require("hardhat")
import { pushUserIntoJSON } from './UserService'
import { findUserByUsername } from './UserService'
import * as fs from 'fs';

const BOT_TOKEN = fs.readFileSync('token.txt','utf8');
const bot = new Telegraf(BOT_TOKEN)

let deployAccount
deployAccount = ethers.getSigner()
const Token = ethers.getContractFactory("Token", deployAccount)
let token = Token.deploy();
token.deployed()

//logic {{{{{{{{
bot.start(ctx => {
    ctx.reply('start phrase')
})

bot.command('get_random', ctx => {
    ctx.reply(Math.floor(Math.random()*100))
})


bot.command('register', ctx => {
    let user = ethers.getSigner()
    let log_result = pushUserIntoJSON({username : ctx.update.message.from.username, vote_status: false, address: user.getAddress})
    ctx.reply(log_result)
})

bot.command('mytokenbalance', ctx => {
    ctx.reply('number of tokens: ' + token.balanceOf(findUserByUsername(ctx.update.message.from.username)))
})


bot.on('text', (ctx) => {
    ctx.reply('Hello World')
})
//logic }}}}}}}}



bot.launch()