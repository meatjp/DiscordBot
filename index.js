const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

const champions = [
  {name: 'Ahri', q: '7', w: '9/8/7/6', e: '12', r: '90/75/60'},
  {name: 'Akali', q: '1.5', w:'18', e:'15/13/11/9', r: '90/70/50'}
];

client.on('message', msg => {
  //メンションかどうかの判定
  if (msg.mentions.has(client.user)) {
    var msgContent = msg.content
    //本文からメンション情報を取り除く
    var reMsgContent = msgContent.replace('<@!849741345853931522> ','')
    //残った本文で配列を検索
    const result = champions.find(item => item.name === reMsgContent)
    if (result === undefined) {
     msg.channel.send(`${reMsgContent}は無効なコマンドです。`)
     return;
    } else {
      msg.channel.send(`${result.name} Q--${result.q}, W--${result.w}, E--${result.e}, R--${result.r}`)
      return;
    }
 }
})

client.login('ODQ5NzQxMzQ1ODUzOTMxNTIy.YLflTA.E_GfxBbvVPVSRfWd12h79yYSBlo')