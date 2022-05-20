const { Client, Channel, GuildMember } = require('discord.js');
require('dotenv').config();
const bot = new Client({intents: ["GUILDS","GUILD_MESSAGES"]});

bot.once('ready', () => {
    console.log('sup hoes');
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: 'with depression',
            type: "PLAYING",
        }
    })
});
bot.on('message', (message) => {
    console.log(`[${message.author.tag}]: ${message.content}`) 
    GuildMember
}); 
bot.login(process.env.DISC_TOKEN);

