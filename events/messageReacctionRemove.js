module.exports = {
	name: 'messageReactionRemove',
	async execute(reaction, user) {

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
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Cs go');
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
                else 
                if (reaction.emoji.name == '8️⃣'){
                    const mrole = reaction.message.guild.roles.cache.find(role => role.name === 'Evento Esport');
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(mrole);
                }
            }
        }
    },
};