const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

client.on('message', async msg => {
  if (msg.mentions.users.has(client.user.id) && msg.content.match(/!ping/)) {
    msg.channel.send('Pong!')
  }
})

client.login('ODQ5NzQxMzQ1ODUzOTMxNTIy.YLflTA.E_GfxBbvVPVSRfWd12h79yYSBlo')