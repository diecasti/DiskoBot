const client = require("../main");

const { prefix } = require('./../config.json');

// client.on("messageCreate", async (message) => {
//     if (
//         message.author.bot ||
//         !message.guild ||
//         !message.content.toLowerCase().startsWith(client.config.prefix)
//     )
//         return;

//     const [cmd, ...args] = message.content
//         .slice(client.config.prefix.length)
//         .trim()
//         .split(/ +/g);

//     const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));

//     if (!command) return;
//     await command.run(client, message, args);
// });

module.exports = {
	name: 'messageCreate',
	async execute(message) {

    console.log("analizando mensaje");

		if (
            message.author.bot ||
            !message.content.toLowerCase().startsWith(prefix)
        )
            return;
    
        const [cmd, ...args] = message.content
            .slice(client.config.prefix.length)
            .trim()
            .split(/ +/g);
    
        const command = client.commands.get(cmd.toLowerCase()) || client.commands.find(c => c.aliases?.includes(cmd.toLowerCase()));
    

        if (!command) return;
        await command.run(client, message, args);
    },
};