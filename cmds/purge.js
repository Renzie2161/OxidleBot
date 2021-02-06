const Discord = require('discord.js')

exports.run = async (client, message, args, color, queue) => {
	if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Sorry you can't use \`purge\` command").then(msg=>msg.delete(3000));
	if (!args[0]) return message.channel.send("Please input amount message you want delete");
	if (args[0] > 100) return message.channel.send("You only can delete below 100 messages").then(msg => msg.delete(3000));
	let x = parseInt(args[0]);

	await message.delete().catch(O_o=>{});
	message.channel.bulkDelete(x);
	message.channel.send(`**:put_litter_in_its_place: Cleared ${args[0]} message.**`).then(msg => msg.delete(2000));
}

exports.help = {
  name: "purge",
	description: 'Clear all messages up to 100 messages.',
	usage: '-purge <message_delete_amount>'
}
