const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    var k =message.toUpperCase();
    if(k.content.includes('CHOATE')||k.content.includes('CHOAT')){
        message.delete();
    }
});

bot.login('process.env.BOT_TOKEN');
