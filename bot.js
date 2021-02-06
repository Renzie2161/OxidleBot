////////////// UP TIME BOT//////////////////////
const http = require('http');
const express = require('express');
const { Canvas } = require('canvas-constructor');
const { resolve, join } = require('path');
const { get } = require('snekfetch');
const fs = require('fs');
const superagent = require('superagent');
const { color } = require('./config.json');
const queue = new Map();
const { logintoken } = require("./config.json");

const app = express();
app.get("/", (request, response) => {
  console.log('Auto UP');
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);
////////////// UP TIME BOT//////////////////////

////////////// HOST BOT//////////////////////

const Discord = require('discord.js');
const client = new Discord.Client();

///////////// Custom ////////////////////////

const { owner } = require("./config.json");
const { prefix } = require("./config.json");
const { purple } = require("./config.json");
const { blue } = require("./config.json");
const ytdl = require('ytdl-core');
const opus = require('opusscript');

// client //

client.on("ready", async () => {
  client.user.setActivity('everyone | -help', {type: 'LISTENING'})
  client.user.setStatus('online')
  console.log
 (`Informasi Bot
-> Nama Bot : ${client.user.username}
-> Discriminator : ${client.user.discriminator}
-> Tag : ${client.user.tag}
-> Jumlah Server : ${client.guilds.size}
-> Jumlah User: ${client.users.size}`)
})

client.on("message", async message => {

  if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
  let msg = message.content.toLowerCase();
  let args = message.content.slice(prefix.length).trim().split(" ");
  let cmd = args.shift().toLowerCase();
  let orangmsg = args.join(" ");
      const status = {
        online: ":green_circle: Online",
        idle: ":crescent_moon: Idle",
        dnd: ":no_entry: Do Not Disturb",
        offline: ":black_circle: Offline/Invisible"
      }
  
const member = message.member;

  let region = {
        "eu-central": ":flag_eu: Central Europe",
        "singapore": ":flag_sg: Singapore",
        "us-central": ":flag_us: U.S. Central",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: U.S. East",
        "us-south": ":flag_us: U.S. South",
        "us-west": ":flag_us: U.S. West",
        "eu-west": ":flag_eu: Western Europe",
        "vip-us-east": ":flag_us: VIP U.S. East",
        "london": ":flag_gb: London",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Russia",
        "southafrica": ":flag_za:  South Africa"
  }
  
  let inline = true
  const verlvl = {
    0: "None",
    1: "Low",
    2: "Medium",
    3: "(?°?°)?? ???",
    4: "(????)?????"
  }
  let logs2 = client.guilds.find("id","676057228855345162").channels.find("name","owner-bot-logs")
  let logs = new Discord.RichEmbed()
  .setAuthor("Direct Message Logs", message.guild.iconURL)
  .setColor("#00f0ff")
  .addField("??| Full Username", `${member.user.tag}`, inline)
  .addField("??| ID", member.user.id, inline)
  .addField("Bannable", `${message.member.bannable}`, inline)
  .addField("Kickable", `${message.member.kickable}`, inline)
  .addField("??| Nickname", `${member.nickname !== null ? ` ${member.nickname}` : " None"}`, true)
  .addField("Status", `${status[member.user.presence.status]}`, inline, true)
  .addField("Playing", `${member.user.presence.game ? `?? ${member.user.presence.game.name}` : "Not playing"}`,inline, true)
  .addField("Roles", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `${roles.name}`).join(" **|** ") || "No Roles"}`, true)
  .addField("??| Joined Discord At", member.user.createdAt)
  .setDescription("Guild Information")
  .addField("??| Name", message.guild.name, inline)
  .addField("??| ID", message.guild.id, inline)
  .addField("Owner", message.guild.owner, inline)
  .addField("Region", region[message.guild.region], inline)
  .addField("Verification Level", verlvl[message.guild.verificationLevel],inline)
  .addField("??| Users in Server", `${message.guild.memberCount} Users`, inline)
  .addField("??| Roles", message.guild.roles.size, inline)
  .addField("??| Channels", message.guild.channels.size, inline)
  .addField("??| Server CreatedAt", `CreatedAt ${message.guild.createdAt}`)
  .addField("Commands", `${prefix}${cmd}`)
  .setThumbnail(message.author.displayAvatarURL)
  .setImage('https://cdn.discordapp.com/attachments/519028852647919648/542879692622004245/multicolours_1.gif')
  
  if(!message.content.startsWith(prefix)) return undefined;
  
  message.prefix = prefix;
  
  if(!msg.startsWith (prefix)) return;
  
  try {
    let commandFile = require(`./cmds/${cmd}.js`);
    commandFile.run(client, message, args, color, queue)
  } catch (err) {
   
  } finally { 
    logs2.send(logs)
  }
  
//client.on('voiceStateUpdate', (oldMember, newMember) => {
  
//  const category = '678535617612611585'
//  const voice = '678536972712804372'
  
//  if(newMember.voiceVoiceChannelID === voice){
    
//    newMember.guild.createChannel(`${newMember.user.username}`, 'voice')
//    .then(tempChannel => {
//      tempChannel.setParent(category);
//      newMember.setVoiceChannel(tempChannel.id);
//    tempChannel.setUserLimit('10');
     //     newMember.voiceChannel.join() // bot join
    // .then(connection => {
    //   const dispatcher = connection.playStream(`https://d.top4top.io/m_1502bcn8p1.mp3`) // Suara
    //   connection.dispatcher.setVolumeLogarithmic(1);
    //});
//    })
//    .catch(console.error)
    
//  }
  
//  if(oldMember.voiceChannelID) {
    
//    const voicelama = oldMember.guild.channels.get(oldMember.voiceChannelID);
    
//    if(voicelama.name.startsWith(`${newMember.user.username}`)) {
 //     voicelama.delete()
  //    .then(function() {
  //    }) // function
//      .catch(console.error);
//    }
    
//  }
  
//})      
    // ( docs : https://discord.js.org/#/docs/main/stable/class/Game?scrollTo=streaming)
    
})

client.login(logintoken)
