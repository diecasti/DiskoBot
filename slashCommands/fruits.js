const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('fruits')
		.setDescription('asi es me hice el tutorial'),
	async execute(interaction) {
		interaction.reply('Reacting with fruits!');
		const message = await interaction.fetchReply();
		message.react('🍎')
			.then(() => message.react('🍊'))
			.then(() => message.react('🍇'))
			.catch(error => console.error('One of the emojis failed to react:', error));
	},

//si el orden no importase
// Promise.all([
//     message.react('🍎'),
//     message.react('🍊'),
//     message.react('🍇'),
// ])
//     .catch(error => console.error('One of the emojis failed to react:', error));

};