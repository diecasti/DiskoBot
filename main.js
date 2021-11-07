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

    });


    client.on('messageReactionAdd', async (reaction, user) => {

        if (user.bot)
        return;
        // When a reaction is received, check if the structure is partial
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }


        if (reaction.message.embeds.length >= 1){
            if (reaction.message.embeds[0].title === 'Role Table'){
                if (reaction.emoji.name == '1️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Miembro');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '2️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Esport');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '3️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Valorant');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '4️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Cs go');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '5️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Warzone');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '6️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'TFT');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
                else 
                if (reaction.emoji.name == '7️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Rocket League');
                    await reaction.message.guild.members.cache.get(user.id).roles.add(mrole);
                }
            }
        }
    
        // // Now the message has been cached and is fully available
        // console.log(`${reaction.message.author}'s message "${reaction.message.embeds.length}" gained a reaction!`);
        // // The reaction is now also fully available and the properties will be reflected accurately:
        // console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
    });



    client.on('messageReactionRemove', async (reaction, user) => {

        if (user.bot)
        return;
        // When a reaction is received, check if the structure is partial
        if (reaction.partial) {
            // If the message this reaction belongs to was removed, the fetching might result in an API error which should be handled
            try {
                await reaction.fetch();
            } catch (error) {
                console.error('Something went wrong when fetching the message:', error);
                // Return as `reaction.message.author` may be undefined/null
                return;
            }
        }


        if (reaction.message.embeds.length >= 1){
            if (reaction.message.embeds[0].title === 'Role Table'){
                if (reaction.emoji.name == '1️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Miembro');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '2️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Esport');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '3️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Valorant');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '4️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Cs Go');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '5️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Warzone');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '6️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'TFT');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
                else 
                if (reaction.emoji.name == '7️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Rocket League');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
            }
        }
    
        // // Now the message has been cached and is fully available
        // console.log(`${reaction.message.author}'s message "${reaction.message.embeds.length}" gained a reaction!`);
        // // The reaction is now also fully available and the properties will be reflected accurately:
        // console.log(`${reaction.count} user(s) have given the same reaction to this message!`);
    });



    // })
    

// Login to Discord with your client's token
client.login(token);