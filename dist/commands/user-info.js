"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'user-info',
    description: 'Display info about yourself.',
    execute(message) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    },
};
