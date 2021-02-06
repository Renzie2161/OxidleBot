const Discord = require("discord.js");

module.exports.run = async (client, message, args, color, queue) => {
message.channel.send('Pong! `' + Math.floor(Math.round(client.ping)) + '`ms')

message.delete();

}
  module.exports.help = {
    name: "ping"
  }
