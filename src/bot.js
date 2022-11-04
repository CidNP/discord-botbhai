require('dotenv').config();

const { Client, GatewayIntentBits } = require('discord.js')

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent ,GatewayIntentBits.DirectMessages] });



client.on('ready', () => {
    console.log(`${client.user.tag} Swagat Cha.`);
});

client.on('messageCreate', (message) => {
    console.log(message.author.username);
    console.log(`${message.author.tag}]: ${message.content}`);
    if (message.content === 'hello'){
        message.reply('hello there!');
    }
})

client.login(process.env.DISCORDJS_BOT_TOKEN);
