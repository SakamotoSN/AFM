const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
var prefix = ("m!")
var statue = "idle" //online
var OnOff = false
bot.on('ready', function() {
  bot.user.setPresence({ game: { name: 'Quoiffer les client'}, status: `${statue}`})
    bot.user.setUsername("Quoifeur bot")
    console.log("Connected")
});


bot.login(process.env.DISCORD_TOKEN);


bot.on('message', message => {

 if(message.content === "Quoibot On"){
  if("234368202379886593".includes(message.author.id)){
    var OnOff = true
    var statue = "online" //online
    message.react('✔️');
  }else{
    message.react('⛔');
  }
}

  if(message.content === "Quoibot Off"){
    if("234368202379886593".includes(message.author.id)){
      var OnOff = false
      var statue = "idle" //online
      message.react('❌');
    }else{
      message.react('⛔');
    }
  }



  if (message.author.bot) return; //le bot ne peu pas prendre ces message
    let test = message.content.split(" ");
  console.log(`entrer ${test}`)
  var texte = test[test.length - 1];
  console.log(`dernier mot : ${texte}`) //prend que le dernier mots
  if((texte === ('?')) || (texte === ('!')) ||(texte === ('.') )){
    var texte = test[test.length - 2];
    console.log("un ? a etais detecter dans le code" )
    console.log(texte)
  } //si un ? est le dernier mots prend avant dernier
    if (texte === undefined) {
      return;
  }else{

    if (message.content.includes("@everyone")){
     return;

    }else{
      if(OnOff === true){
    if ( (texte.toLowerCase()).includes("quoi", (texte.lenght-4) ) ||  (texte.toLowerCase()).includes("quoi.", (texte.lenght-5) ) ||  (texte.toLowerCase()).includes("quoi?", (texte.lenght-5) )||  (texte.toLowerCase()).includes("quoi!", (texte.lenght-5) )){
    if ((message.content.length) > 200){
      message.channel.send('```Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}```', {
        files: [
          "./folder/feur.mp4"
        ]
      })}
      else{
        message.channel.send(` "${message}" ${message.author} `, {
          files: [
            "./folder/feur.mp4"
          ]
        })

      }
    }
    if ( (texte.toLowerCase()).includes("non", (texte.lenght-3) ) ||  (texte.toLowerCase()).includes("non.", (texte.lenght-4) ) ||  (texte.toLowerCase()).includes("non?", (texte.lenght-4) )||  (texte.toLowerCase()).includes("non!", (texte.lenght-4) )){
      if (message.content.length > 200){
        message.channel.send(`Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
            files: [
              "./folder/bril.mp4"
            ]
          })}
        else{
          message.channel.send(` "${message}" ${message.author} `, {
            files: [
              "./folder/bril.mp4"
            ]
          })

        }
      }
      if ( (texte.toLowerCase()).includes("oui", (texte.lenght-3) ) ||  (texte.toLowerCase()).includes("oui.", (texte.lenght-4) ) ||  (texte.toLowerCase()).includes("oui?", (texte.lenght-4) )||  (texte.toLowerCase()).includes("oui!", (texte.lenght-4) )){
      if (message.content.length > 200){
        message.channel.send('```Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}```', {
            files: [
              "./folder/stiti.mp4"
            ]
          })
        }else{
          message.channel.send(` "${message}" ${message.author} `, {
            files: [
              "./folder/stiti.mp4"
            ]
          })
        }
  }
}else{return;}
}
}
}
)
