const Discord = require('discord.js');
const bot = new Discord.Client();

// !Roles IDs
const Member_Role = '689209619234422942';
const Gamer_Role = '689208459463622680';

bot.login(/* Paste your token here */);

bot.on('message', (message) => {

    switch (message.content) {

        // !see roles
        case "!roles":
            console.log(message.guild.roles);
            break;

        // !assign role
        case "!Member":
            message.member.roles.add(Member_Role);
            break;
        case "!member":
            message.member.roles.add(Member_Role);
            break;
        case "!Gamer":
            message.member.roles.add(Gamer_Role);
            break;  
        case "!gamer":
            message.member.roles.add(Gamer_Role);
            break;

        // !Bot messages
        case "hello":
            message.reply("bah salam dada!");
            break;
        case "dada":
            message.reply("bale dada?");
            break;
        case "ki koonie?":
            message.reply("khalat dada");
            break;
    }
});
