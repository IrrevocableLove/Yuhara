const Discord = require("discord.js");
var Webhook = require("webhook-discord")

var Hook = new Webhook("Webhook Link")
const client = new Discord.Client();


const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'member-logs');
  if (!channel) return;
  
  Hook.custom("Member-Logs", `Welcome To The Server ${member}`, "New Member", "#1df70d")
});


client.on('ready', () => {
   client.user.setPresence('dnd')
  client.user.setActivity(`Development`)
  console.log(`Logged In As ${client.user.tag}!`);
});


const prefix = "!";

client.on('message', message => {
  
  if(message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
 if (command === 'ping') {
  message.channel.sendMessage(`Pong \`${Date.now() - message.createdTimestamp}MS\``)
     }
  
  if (command === 'announce') {
    message.channel.sendMessage(message.content.substring('!announce '.length));
  }
  
});

client.login('YourTokenHere');
