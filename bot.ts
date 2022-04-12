const { Telegraf } = require('telegraf')
import { IUser } from './IUser'
import * as fs from 'fs';

const BOT_TOKEN = fs.readFileSync('token.txt','utf8');
const bot = new Telegraf(BOT_TOKEN)
let data = JSON.parse(fs.readFileSync('datasource.json','utf8'));

function createUser(config: IUser):{username:string; vote_status:boolean} {
    let newUser = {username:"common username", vote_status:false};
    newUser.username = config.username;
    return newUser;
}

let myUser = createUser({username:"Fill"})
pushUserIntoJSON(myUser)

function pushUserIntoJSON(userToPush:IUser){
    const usersDataLength = data.user.length
    for (let i = 0; i < usersDataLength; i++) {
        if(data.user[i].username==userToPush.username){
            console.log("username already exists")
            return
        }
    }
    data.user[usersDataLength] = userToPush
}

fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
console.log(data)

//logic {{{{{{{{
bot.start(ctx => {
    ctx.reply('start phrase')
})

bot.command('get_random', ctx => {
    ctx.reply(Math.floor(Math.random()*100))
})

bot.command('register', ctx => {
    ctx.reply("registration seccess")
})


bot.on('text', (ctx) => ctx.reply('Hello World'))
//logic }}}}}}}}



bot.launch()