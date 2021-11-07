// Require the necessary discord.js classes
const fs = require('fs');
const { Client, Collection, Intents, Message, MessageEmbed } = require('discord.js');
const { token } = require('./config.json');
//const mesageREAD = fs.readdirSync('./events').filter(file => file.endsWith('Create.js'));


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.DIRECT_MESSAGE_REACTIONS],
    partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
 });

//coleccion de eventos
const eventFiles = fs.readdirSync('./events').filter(file => file.endsWith('.js'));

//coleccion de Slashcomandos
client.slashCommands = new Collection();
const commandFiles = fs.readdirSync('./slashCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const slashCommand = require(`./slashCommands/${file}`);
	client.slashCommands.set(slashCommand.data.name, slashCommand);


}


//coleccion de comandos
client.commands = new Collection();
const commandFiles2 = fs.readdirSync('./prefixCommands').filter(file => file.endsWith('.js'));

for (const file of commandFiles2) {
    const command = require(`./prefixCommands/${file}`);
	client.commands.set(command.name, command);


}
    
    //actualizacion de eventos
    for (const file of eventFiles) {
        const event = require(`./events/${file}`);
        if (event.once) {
            client.once(event.name, (...args) => event.execute(...args));
        } else {
            
            client.on(event.name, (...args) => event.execute(...args));
        }
    }

    client.on('message', Message=>{
        console.log('otia un mensaje de verdad?');
    });

// Login to Discord with your client's token
client.login(token);