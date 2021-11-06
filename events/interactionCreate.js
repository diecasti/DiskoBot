module.exports = {
	name: 'interactionCreate',
	async execute(interaction) {

        
    console.log("analizando mensaje");
		
        if (!interaction.isCommand()) return;
    
        const command = interaction.client.slashCommands.get(interaction.commandName);

        if (!command) return;

        try {
            await command.execute(interaction);
        } catch (error) {
            console.error(error);
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
        
        //console.log(`${interaction.user.tag} in #${interaction.channel.name} triggered an interaction.`);
	},
};