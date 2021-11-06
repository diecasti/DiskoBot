const { SlashCommandBuilder } = require('@discordjs/builders');
const wait = require('util').promisify(setTimeout);


module.exports = {
	data: new SlashCommandBuilder()
	.setName('echo')
	.setDescription('Replies with your input!')
	.addStringOption(option =>
		option.setName('mensaje')
			.setDescription('The input to echo back')
			.setRequired(true)
            ),
	async execute(interaction) {

		
		await interaction.reply(interaction.options.getString('mensaje'));
		await wait(500);
		await interaction.editReply('*' + interaction.options.getString('mensaje') + '*');
		await wait(500);
		await interaction.editReply('.');
		await wait(500);
				// const message = await interaction.fetchReply();
				// console.log(message);
		await interaction.deleteReply();
	},
};

