const { Client, Channel, GuildMember } = require('discord.js');
require('dotenv').config();
const testing = new Client({intents: ["GUILDS","GUILD_MESSAGES"]});

testing.once('ready', () => {
    testing.user.setStatus('idle')
    console.log('urmom');
});
testing.destroy();

