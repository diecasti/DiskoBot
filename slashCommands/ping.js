const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('asi es me hice el tutorial'),
	async execute(interaction) {
		await interaction.reply(
            {
                content: 'Pong!',
                ephemeral: true
            }
            );
	},
};