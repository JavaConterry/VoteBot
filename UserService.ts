import { IUser } from './IUser'
import * as fs from 'fs';


function createUser(config: IUser):{username:string; vote_status:boolean} {
    let newUser = {username:"common username", vote_status:false};
    newUser.username = config.username;
    return newUser;
}

export function pushUserIntoJSON(userToPush:IUser){
    let data = JSON.parse(fs.readFileSync('datasource.json','utf8'));
    const usersDataLength = data.user.length
    for (let i = 0; i < usersDataLength; i++) {
        if(data.user[i].username==userToPush.username){
            return "username already exists"
        }
    }
    data.user[usersDataLength] = userToPush
    fs.writeFileSync('datasource.json', JSON.stringify(data, null, 2));
    return "registration seccess"
}