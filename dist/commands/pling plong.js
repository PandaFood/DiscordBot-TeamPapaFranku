"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'ping',
    description: 'Ping!',
    execute(message) {
        message.channel.send('Pong.');
    },
};
