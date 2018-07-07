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

bot.on('messageUpdated', (oldMessage, newMessage) => {
    var k=newMessage.content;
    k=k.toUpperCase();
    if(k.includes('CHOATE')||k.includes('CHOAT')){
        message
        message.delete();
    }
});

bot.login(process.env.BOT_TOKEN);
