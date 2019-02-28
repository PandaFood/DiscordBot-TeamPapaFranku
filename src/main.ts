import * as Discord from 'discord.js';
var { prefix, token }  = require("../Credentials.json");
var fs = require('fs');
const client = new Discord.Client();

client.commands = new Discord.Collection();

var commandFiles = fs.readdirSync('./commands').filter((file: any) => {
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
	
	if (!message.content.startsWith(prefix) || message.author.bot) return;
	
	var args = message.content.slice(prefix.length).split(/ +/);
	var command = args.shift()!.toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command)!.execute(message, args, client);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
}
	
});



client.login(token);
