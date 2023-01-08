require('dotenv').config();
const { Client, GatewayIntentBits, Partials } = require('discord.js');
const dados = require("./dados.json");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildMembers,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessageReactions,
    ],
    partials: [
        Partials.Message,
        Partials.GuildMember,
        Partials.Reaction,
        Partials.User,
        Partials.Channel,
    ],
});


client.on('ready', () => {
    console.log('O bot está no ar!');
});

client.on('messageCreate', (message) => {
    
    if(message.author.bot) return;

    if(message.content === 'ping') message.channel.send(`O ping do bot é de estimados ${client.ws.ping}ms`);

    //gerador de piada aleatorias
    if(message.content === "!piada"){
        const random = Math.floor(Math.random() * dados.piada.length);
        message.channel.send(dados.piada[random])
    }

    if(message.content === "!frase"){
        const random = Math.floor(Math.random() * dados.frases.length);
        message.channel.send(dados.frases[random])
    }

});

client.login(process.env.TOKEN);