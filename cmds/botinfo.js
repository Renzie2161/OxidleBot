const Discord = require("discord.js");

module.exports.run = async (client, message, args, color, queue) => {
    let inline = true
    let bicon = client.user.displayAvatarURL;
    let usersize = client.users.size
    let chansize = client.channels.size
    let uptimxd = client.uptime 
    let servsize = client.guilds.size
    let botembed = new Discord.RichEmbed()
    .setColor("#00ff00")
    .setThumbnail(bicon)
    .addField("Bot Name", `${client.user.username}`, inline)
    .addField("Bot Owner", "<@663266908342190090>", inline )
    .addField("Servers", `?? ${servsize} Servers`, inline)
    .addField("Channels", `?? ${chansize} Channels`, inline)
    .addField("Users", `${usersize} Users`, inline)
    .addField("Bot Library", "Discord.js", inline)
    .addField("Created On", client.user.createdAt)
    .setFooter(`Information about: ${client.user.username}. Developed by: IFlixQ`)
    .setTimestamp()
    
    message.channel.send(botembed);

}

module.exports.help = {
  name:"botinfo"
}
