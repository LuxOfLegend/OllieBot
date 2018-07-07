const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    var k=message.content;
    k=k.toUpperCase();
    if(k.includes('CHOATE')||k.includes('CHOAT')){
        message
        message.delete();
    }
});

bot.login('NDY0ODYwNzIyODIwODA4NzMy.DiFG9w.c6v7UQF-3ocnL30V3JwxDxWvzJ8');
