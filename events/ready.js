module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`DiskoBot esta en linea! Logged in as ${client.user.tag}`);
	},
};