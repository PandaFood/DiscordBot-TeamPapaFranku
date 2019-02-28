"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
module.exports = {
    name: 'beep',
    description: 'Beep!',
    execute(message) {
        message.channel.send('Boop.');
    },
};
