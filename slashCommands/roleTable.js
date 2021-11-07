const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageEmbed } = require('discord.js');


// inside a command, event listener, etc.
const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Role Table')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/AfFp7pu.png');


    
// inside a command, event listener, etc.
const welcomeEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Role Table')
.setAuthor('DiskoBot', 'https://i.imgur.com/AfFp7pu.png')
.setDescription('Bienvenido al Servidor de Diskobolo! \nEsperamos que disfrutes de nuestra comunidad como de los eventos que organizamos!')
.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.addFields(
    { name: 'Antes de comenzar', value: 'Elige raccionando a los roles para personalizar tu experiencia \n(puedes modificarlo en cualqueir momento)' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Miembro', value: 'reacciona con 1️⃣', inline: false },
    { name: 'Esport', value: 'reacciona con 2️⃣', inline: false },
)
.setTimestamp()
.setFooter('DiskoBot', 'https://i.imgur.com/AfFp7pu.png');


// inside a command, event listener, etc.
const eSportEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Role Table')
.setAuthor('DiskoBot', 'https://i.imgur.com/AfFp7pu.png')
.setDescription('Bienvenido al apartado de ESport! \nEsperamos que disfrutes de nuestra comunidad como de los eventos que organizamos!')
.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.addFields(
    { name: 'Antes de comenzar', value: 'Elige raccionando a los roles para personalizar tu experiencia \n(puedes modificarlo en cualqueir momento)' },
    { name: '\u200B', value: '\u200B' },
    { name: 'Valorant', value: 'reacciona con 3️⃣', inline: false },
    { name: 'Cs Go', value: 'reacciona con 4️⃣ ', inline: false },
    { name: 'Warzone', value: 'reacciona con 5️⃣', inline: false },
    { name: 'TFT', value: 'reacciona con 6️⃣', inline: false },
    { name: 'Rocket League', value: 'reacciona con 7️⃣', inline: false },
    { name: 'Eventos', value: 'reacciona con 8️⃣', inline: false },
)
.setTimestamp()
.setFooter('DiskoBot', 'https://i.imgur.com/AfFp7pu.png');


// inside a command, event listener, etc.
const EventoEsportEmbed = new MessageEmbed()
.setColor('#0099ff')
.setTitle('Role Table')
.setAuthor('DiskoBot', 'https://i.imgur.com/AfFp7pu.png')
.setDescription('Celebramos un evento reacciona para participar!')
.setThumbnail('https://i.imgur.com/AfFp7pu.png')
.addFields(
    { name: 'Antes de comenzar', value: 'Reacciona para participar \n(puedes modificarlo en cualqueir momento)' },
    { name: 'Evento', value: 'reacciona con 8️⃣', inline: false },
)
.setTimestamp()
.setFooter('DiskoBot', 'https://i.imgur.com/AfFp7pu.png');




module.exports = {
	data: new SlashCommandBuilder()
		.setName('roletable')
		.setDescription('saca la tabla de roles')
        .addStringOption(option =>
            option.setName('category')
                .setDescription('tablas con diferentes contenidos')
                .setRequired(true)
                .addChoice('Bienvenida', 'Bienvenida')
                .addChoice('Miembros', 'Miembros')
                .addChoice('Esports', 'Esports')
                .addChoice('Eventos', 'Eventos'))
        ,
	async execute(interaction) {
        const eleccion = interaction.options.getString('category');


        if (eleccion === 'Bienvenida'){
            const message = await interaction.channel.send({embeds: [welcomeEmbed] });
            message.react('1️⃣').then(() => message.react('2️⃣'));

        }else if (eleccion === 'Miembros'){
            const message = await interaction.channel.send({embeds: [welcomeEmbed] });
            message.react('1️⃣').then(() => message.react('2️⃣'));
        }
        else if (eleccion === 'Esports'){
            const message = await interaction.channel.send({embeds: [eSportEmbed] });
            message.react('3️⃣').then(() => message.react('4️⃣')).then(() => message.react('5️⃣')).then(() => message.react('6️⃣')).then(() => message.react('7️⃣')).then(() => message.react('8️⃣'));
        }
        else if (eleccion === 'Eventos'){
            const message = await interaction.channel.send({embeds: [EventoEsportEmbed] });
            message.react('8️⃣');
        }
        else{
            //also salio muy mal quejate
            console.log("Algo salio muy mal en este comando");
        }



	},
};