const Discord = require('discord.js');
const bot = new Discord.Client();
var addresses=new Array("CHOATE", "SCHRAED", "SCARBOROUGH","LUXBOTISGAY");
var admins = new Array();
var filePath = "List.txt";
admins.push("Lux💜#9030");

var fuckers = new Array();


bot.on('message', (message) => {
    var k=message.content;
    var adminIs=false;
    if (message.author.bot){
        return;
    } 
    if(addressC(k)&&k.length>1&&!(k.substring(0,1).includes("+"))){
        message.delete();
    }
    else if(k.length>1){
        if(k.substring(0,1).includes("+")){
        if(adminCheck(message)){
            if(k.includes("help")){
                message.channel.send("If you don't know the commands you probably shouldn't :purple_heart: :wink: ");
            }
            else if(k.includes("version")){
                message.channel.send("LuxBot v1.13[Beta] \nDon't worry, I'm working on acheiving sentience! :information_desk_person: ");
            }
            else if(k.includes("addAddress")){
                var tempA=k.substring(12,k.length);
                addresses.push(tempA.toUpperCase());
                message.channel.send("Done :purple_heart:");
            }
            else if(k.includes("removeAddress")){
                var tempA=k.split(" ");
                var tempB=tempA[1];
                var temp1=Number(tempB);
                if(tempB!="NaN"){
                    addresses.splice(temp1,temp1+1);
                    message.channel.send("But what if they still wanted protection!? :confounded: :sweat: ");
                }
            }
            else if(k.includes("addAdmin")){
                var tempA=k.substring(10,k.length);
                admins.push(tempA);
                message.channel.send("Done :purple_heart:");
            }
            else if(k.includes("addresses")){
                var tempM="";
                for(var n=0;n<addresses.length;n++){
                    tempM+=n+": "+addresses[n]+"\n";
                }
                message.channel.send(tempM);
            }

            else{
               message.channel.send("Invalid command :sweat_smile:");
               
            }
        }
        else{
            for(var n=0;n<fuckers.length;n++){
                if(message.author=fuckers[n]){

                }
            }
            message.channel.send("Invalid permissions, please stop trying :cold_sweat: ");
            fuckers.push(message.author);
        }
        }
    }
});
function addressC(k){
    var temp1 = k.toUpperCase();
    for(var n=0;n<addresses.length;n++){
        var temp2 = addresses[n].toUpperCase();
        if(temp1.includes(temp2,0)){
            return true;
        }
    }
    return false;
}

function adminCheck(str){
    var username=str.author;
    for(var i=0;i<admins.length;i++){
        var temp=admins[i].split("#");
        if(str.author.username=temp[0]){
            if(str.author.discriminator=temp[1]){
                return true;
            }
        }
    }
    return false;
}

bot.on('messageUpdated', (oldMessage, newMessage) => {
    var k=newMessage.content;
    k=k.toUpperCase();
    if(addressC(k)){
        message.delete();
    }
});

bot.login(process.env.BOT_TOKEN);
