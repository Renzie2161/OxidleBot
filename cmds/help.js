const Discord = require('discord.js');
const { blue } = require("../config.json");

module.exports.run = async (client, message, args, color, queue) => {
  if(message.author.id !== "663266908342190090"){
  let embed = new Discord.RichEmbed()
.setColor(blue)
.setAuthor(`${client.user.username} Commands`, client.user.displayAvatarURL)
.setDescription(`To use the command, type -<commands>`)
.addField(`:nazar_amulet:|**Premier**`,`\`web [Beta]\``)
.addField(`**:hammer:| Admin**`,`\`createchannel\`,\`createcategory\`,\`createrole\`,\`removerole\`,\`removechannel\`,\`ban\`,\`tempmute\`,\`kick\`,\`say\`,\`mute\`,\`unmute\`,\`purge\`,\`unban\``)
.addField(`**??| Information**`,`\`help\`,\`botinfo\`,\`roleinfo\`,\`serverinfo\`,\`userinfo\`,\`viewpermission\`,\`serverroles\``)
.addField(`**??| Fun**`,`\`smoke\`,\`joke\`,\`kill\`,\`peepee\`,\`mock\`,\`yomama\`,\`slots\`,\`rps\`,\`cat\`,\`hack\`,\`meme\``)
.addField(`**:notes:| Music**`,`\`p\`,\`play\`,\`np\`,\`volume\`,\`queue\`,\`leaves\`,\`stop\`,\`skip\`,\`pause\`,\`resume\``)
.addField(`**??| Utility**`,`\`invite\`,\`avatar\`,\`emojilist\`,\`time\`,\`changename\`,\`stats\`,\`ping\`,\`reverse\`,\`weather\`,\`embed\``)
.addField(`**:question:| +help**`,`\`helps createchannel\`,\`helps createcategory\``)
.addField(`**???| Support Server**`,`[Click Here](https://discord.gg/hGvurHA)`)
.setImage('https://cdn.discordapp.com/attachments/519028852647919648/542879692622004245/multicolours_1.gif')
  
  .setThumbnail(client.user.displayAvatarURL)
  .setFooter(`Don't include <> or [], it's mean <> is required and [] is optional`)
message.channel.send(embed)
  } else {
      let embed = new Discord.RichEmbed()
.setColor(blue)
.setAuthor(`${client.user.username} Commands`, client.user.displayAvatarURL)
.setDescription(`To use the command, type -<commands>`)
.addField(`:nazar_amulet:|**Premier**`,`\`web [Beta]\``)
.addField(`**:hammer:| Admin**`,`\`createchannel\`,\`createcategory\`,\`createrole\`,\`removerole\`,\`removechannel\`,\`ban\`,\`tempmute\`,\`kick\`,\`say\`,\`mute\`,\`unmute\`,\`clear\`,\`unban\`\`nuke\``)
.addField(`**??| Information**`,`\`help\`,\`botinfo\`,\`roleinfo\`,\`serverinfo\`,\`userinfo\`,\`viewpermission\`,\`serverroles\``)
.addField(`**??| Fun**`,`\`smoke\`,\`joke\`,\`kill\`,\`peepee\`,\`mock\`,\`yomama\`,\`slots\`,\`rps\`,\`cat\`,\`hack\`,\`meme\``)
.addField(`**:notes:| Music**`,`\`p\`,\`play\`,\`np\`,\`volume\`,\`queue\`,\`leaves\`,\`stop\`,\`skip\`,\`pause\`,\`resume\``)
.addField(`**??| Utility**`,`\`invite\`,\`avatar\`,\`emojilist\`,\`time\`,\`changename\`,\`stats\`,\`ping\`,\`reverse\`,\`weather\`,\`embed\``)
.addField(`**:question:| +help**`,`\`helps createchannel\`,\`helps createcategory\``)
.addField(`**??| Owner Tools**`,`\`reboot\`,\`dm\`,\`finduser\`,\`setstatus\`,\`takerole\`,\`delall\``)
.addField(`**???| Support Server**`,`[Click Here](https://discord.gg/hGvurHA)`)
.setImage('https://cdn.discordapp.com/attachments/519028852647919648/542879692622004245/multicolours_1.gif')
  
  .setThumbnail(client.user.displayAvatarURL)
  .setFooter(`Don't include <> or [], it's mean <> is required and [] is optional`)
message.channel.send(embed)
  }
  
}
