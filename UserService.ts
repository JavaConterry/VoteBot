import { IUser } from './IUser'
import * as fs from 'fs';


function createUser(config: IUser):{username:string; vote_status:boolean; tokens:number} {
    let newUser = {username:"common username", vote_status:false, tokens:100};
    newUser.username = config.username;
    return newUser;
}

export function pushUserIntoJSON(userToPush:IUser){
    let data = JSON.parse(fs.readFileSync('datasource.json','utf8'));
    let user = findUserByUsername(userToPush.username)
    if(user===null)
    {
        data.user[data.user.length] = userToPush
        fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
        return "registration seccess"
    }
    else return "user already exists"
}

export function showUserTokensByUsername(username:string){
    let data = JSON.parse(fs.readFileSync('datasource.json','utf8'));
    var user = findUserByUsername(username)
    if(user !== null) return user.tokens
    else return null
}

function findUserByUsername(username:string){
    let data = JSON.parse(fs.readFileSync('datasource.json','utf8'));
    const usersDataLength = data.user.length
    for (let i = 0; i < usersDataLength; i++) {
        if(data.user[i].username==username){
            return data.user[i]
        }
    }
    fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
    return null
}