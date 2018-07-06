const Discord = require('discord.js');
const bot = new Discord.Client();
var addresses= new Array();
var admins = new Array();
var filePath = "List.txt";
admins.push("Lux💜#9030")
addresses.push(CHOATE);


bot.on('message', (message) => {
    var k=message.content;
    var command=false;
    if(adress(k)){
        message.delete();
    }
    if(message.content.includes("+")){
        if(adminCheck(message)){
            command=true;
        }
    }
    if(command){
        if(message.content.includes("help")){
            message.channel.send("If you don't know the commands you probably shouldn't :purple_heart: ;)")
        }
        else if(message.content.includes("addAddress")){
            var tempA=message.content.split(" ");
            var tempB=tempA[1];
            addresses.push(tempB.toUpperCase());
            message.channel.send("Done :purple_heart:")
        }
        else if(message.content.includes("addAddress")){
            var tempA=message.content.split(" ");
            var tempB=tempA[1];
            admins.push(tempB);
            message.channel.send("Done :purple_heart:")
        }
        else if(message.content.includes("addresses")){
            var tempM="";
            for(var n=0;n<address.length;n++){
                tempM+=addresses[n]+"\n";
            }
            message.channel.send(tempM);
        }
        else{
            message.channel.send("Invalid command :sweat_smile:")
        }
    }
});

bot.login('NDY0ODYwNzIyODIwODA4NzMy.DiFG9w.c6v7UQF-3ocnL30V3JwxDxWvzJ8');

function address(k){
    for(var n;n<addresses.length;n++){
        if(k.toUppercase().includes(adresses[n].toUppercase())){
            return true;
        }
    }
    return false;
}

function adminCheck(str){
    var username=str.author;
    for(var i=0;i<admins.length;i++){
        var temp=admins[i].split("#");
        if(str.author=temp[0]){
            if(str.discriminator=temp[1]){
                return true;
            }
        }
    }
    return false;
}
