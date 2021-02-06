const Discord = require("discord.js");

const { owner } = require("../config.json");

exports.run = async (client, message, args, color, queue) => {
  if(message.author.id !== owner) return message.reply(`:x: Only Owner can use this Command ! :no_entry_sign:`).then(() => {
    console.log(`${message.author.username} Tried to Use command dm `)
    setTimeout(() => {message.reply(`:x: No Permission :no_entry_sign:`)
    }, 2500)
    
  })
  
                                                                                                                             
 let user = message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);
  if(!user) return message.channel.send(":x: Mention Or Give Me The Users ID! :no_entry_sign:")
  let args1 = args.slice(1).join(" ")
  if(!args1) return message.channel.send(":x: Please Give Me A Message!")
  user.send(args1).then
  message.channel.send(":white_check_mark: Succesfuly Send Message!").then(m => message.delete(1))
}
