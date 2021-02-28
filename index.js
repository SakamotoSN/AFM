const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

var prefix = ("m!")

bot.on('ready', function() {
    bot.user.setUsername("Salut")
    bot.user.setPresence({ game: { name: ''}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.DISCORD_TOKEN);


bot.on('message', message => {
  
if (message.author.bot) return; //le bot ne peu pas prendre ces message

    let test = message.content.split(" ");
  console.log(`entrer ${test}`)
  var texte = test[test.length - 1];
  console.log(`dernier mot : ${texte}`) //prend que le dernier mots
  
  
  if((texte.toLowerCase().includes('?')) || (texte.toLowerCase().includes('!')) ||(texte.toLowerCase().includes('.')) ){
    var texte = test[test.length - 2];
    console.log("un ? a etais detecter dans le code" )
    console.log(texte)
  } //si un ? est le dernier mots prend avant dernier
  
  
    if (texte === undefined) {
      return;
  }else{
    
  if ( (texte.toLowerCase()) === ('quoi') || (texte.toLowerCase()) === ('quoi?') || (texte.toLowerCase()) === ('quoi!') || (texte.toLowerCase()) === ('quoi.') ){
      console.log("sa marche ici")
    message.channel.send(`> "${message}" ${message.author} \nhttps://cdn.discordapp.com/attachments/815579872390414339/815581619138068511/feur4k-1.mp4`);
    } //si quoi a etais detecter (meme avec des point) alors il envois feur
  
    if ( (texte.toLowerCase()) === ('non') || (texte.toLowerCase()) === ('non?') || (texte.toLowerCase()) === ('non!') || (texte.toLowerCase()) === ('non.') ){
    message.channel.send(`> "${message}" ${message.author} \nhttps://cdn.discordapp.com/attachments/815579872390414339/815581691195162627/video_1.mp4`);
    }
  
    if ( (texte.toLowerCase()) === ('oui') || (texte.toLowerCase()) === ('oui?') || (texte.toLowerCase()) === ('oui!') || (texte.toLowerCase()) === ('oui.') ){
    message.channel.send(`> "${message}" ${message.author} \n https://cdn.discordapp.com/attachments/815579872390414339/815581559376576522/stiti.mp4`);
    }
  }
  
 }
)
