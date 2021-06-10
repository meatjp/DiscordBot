const Discord = require('discord.js')
const client = new Discord.Client()

client.on('ready', () => {
  console.log(`${client.user.tag} でログインしています。`)
})

const champions = [
  {name: 'Ahri', q: '7', w: '9/8/7/6', e: '12', r: '90/75/60'},
  {name: 'Akali', q: '1.5', w:'18', e:'15/13/11/9', r: '90/70/50'},
  {name: 'Alistar' , q:'15/13.5/12/10.5', w:'14/12.5/11/9.5', e:'11.5/11/10.5/10', r:'90/75/60'},
  {name: 'Amumu', q: '14/12/10/8', w: '1', e: '9/8/7/6', r:'110/95/80'},
  {name: 'Annie', q:'4', w:'8', e:'12', r:'80/70/60' },
  {name: 'Ashe', q: '7/6/5/4', w:'13/10/7/4', e:'45/40/35/30', r:'65/60/55'},
  {name: 'Aurelion Sol', q:'11/10/9/8', w:'8/6/4/2', e:'70/60/50/40', r:'70/60/50/40'},
  {name: 'Blitzcrank', q:'20/19/18/17', w:'12', e:'10/9/8/7', r:'60/40/20'},
  {name: 'Braum', q:'10/9/8/7', w:'13/12/11/10', e:'16/14/12/10', r:'90/80/70'},
  {name: 'Camille', q:'9/8/7/6', w:'15/13/11/9', e:'16/14/12/10', r:'90/75/60'},
  {name: 'Corki', q:'8', w:'20/18/16/14', e:'16', r:'2(Recharge:12)'},
  {name: 'Darius', q:'9.5/8/6.5/5', w:'6.5/6/5.5/5', e:'18/16/14/12', r:'80/70/60'},
  {name: 'Diana', q:'9/8/7/6', w:'13/11.5/10/8.5', e:'22/20/18/16', r:'80/70/60'},
  {name: 'Draven', q:'10/9/8/7', w:'12', e:'18/16/14/12', r:'80/70/60'},
  {name: 'Dr.Mundo', q:'4', w:'4', e:'6/5.5/5/4.5', r:'70/65/60'},
  {name: 'Evelynn', q:'4(Barrage:2)', w:'14/13/12/11', e:'8', r:'120/95/70'},
  {name: 'Ezreal', q:'5.3/4.5/3.8/3', w:'12', e:'25/22/19/16', r:'80'},
  {name: 'Fiora', q:'14/12/10/8', w:'13/12/11/10', e:'11/9/7/5', r:'80/65/50'},
  {name: 'Fizz', q:'8/7.5/7/6.5', w:'10/9.5/9/8.5', e:'15.5/13.5/11.5/9.5', r:'65/55/45'},
  {name: 'Garen', q:'8', w:'18/16/14/12', e:'9', r:'80/70/60'},
  {name: 'Galio', q:'12/11/10/9', w:'18/17/16/15', e:'11/10/9/8', r:'120/100/80'},
  {name: 'Gragas', q:'9.5/8.5/7.5/6.5', w:'4.5', e:'15/14/13/12', r:'80/70/60'},
  {name: 'Graves', q:'12/11/10/9', w:'20/18/16/14', e:'15/14/13/12', r:'90/70/50'},
];

client.on('message', msg => {
  //メンションかどうかの判定
  if (msg.mentions.has(client.user)) {
    //本文からメンション情報を取り除く
    const msgContent = msg.content.replace('<@!849741345853931522> ','')
    //残った本文で配列を検索
    const result = champions.find(item => item.name === msgContent)
    //見つからない場合
    if (result === undefined) {
     msg.channel.send(`${msgContent}は無効なコマンドです。`)
     return;
    } else {
      //見つかった場合
      msg.channel.send(`${result.name} Q--${result.q}, W--${result.w}, E--${result.e}, R--${result.r}`)
      return;
    }
 }
})

client.login('ODQ5NzQxMzQ1ODUzOTMxNTIy.YLflTA.E_GfxBbvVPVSRfWd12h79yYSBlo')