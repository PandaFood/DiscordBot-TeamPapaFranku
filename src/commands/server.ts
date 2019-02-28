import { Message } from "discord.js";

module.exports = {
	name: 'server',
	description: 'Display info about this server.',
	execute(message : Message) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};
