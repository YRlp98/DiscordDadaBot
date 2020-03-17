const Discord = require('discord.js');
const bot = new Discord.Client();

bot.login('Njg5NTM1MjAwNzQwMjQ1NjIy.XnE6fw.lvTV5y5_dKag1qjELNCUSRhTAyA');

bot.on('message', (message) => {

    switch (message.content) {
        case "hello":
            message.reply("bah salam dada!");
            break;
        case "dada":
            message.reply("bale dada?");
            break;
        case "ki koonie?":
            message.reply("khalat dada");
            break;

            // test
    }
});
