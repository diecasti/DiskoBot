const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('windows')
		.setDescription('aiba la comedia'),
	async execute(interaction) {
		await interaction.reply('Windows dias!');
	},
};