const Discord = require('discord.js');

exports.run = async (client, message, args, color, queue) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`You are\'nt have **MANAGE_MESSAGE** Permission\'s`)
  const code = args.join(" ");  
  message.channel.send(`${code}`)
  
  
  
}
exports.conf = {
    aliases: ["say"],
    cooldown: "0"
}

exports.help = {
    name: "say",
    description: "Talking",
    usage: "-say <text>"
}
