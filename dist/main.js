"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Discord = __importStar(require("discord.js"));
var { prefix, token } = require("../Credentials.json");
var fs = require('fs');
const client = new Discord.Client();
client.commands = new Discord.Collection();
var commandFiles = fs.readdirSync('./commands').filter((file) => {
    return file.endsWith('.js');
});
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}
client.once('ready', () => {
    console.log('Ready!');
});
client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot)
        return;
    var args = message.content.slice(prefix.length).split(/ +/);
    var command = args.shift().toLowerCase();
    if (!client.commands.has(command))
        return;
    try {
        client.commands.get(command).execute(message, args, client);
    }
    catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});
client.login(token);
