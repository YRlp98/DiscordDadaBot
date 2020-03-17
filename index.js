const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message', (message) => {
    if (message.content == '!hello') {
        message.reply('bah salam dada!');
    }
});

bot.login('Njg5NTM1MjAwNzQwMjQ1NjIy.XnER9Q.CfYGprp-MtZxAsQlLlHURByQG9Q');
