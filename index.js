const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();
var statue = "idle" //online
var OnOff = false;
bot.on('ready', function() {
  bot.user.setPresence({ game: { name: 'Quoiffer les client'}, status: `${statue}`})
    bot.user.setUsername("Quoifeur bot")
    console.log("Connected")
});


bot.login(process.env.DISCORD_TOKEN);


bot.on('message', message => {

 if(message.content === "Quoibot On"){
  let role = message.guild.roles.cache.get("459383622533775360");
  if(message.member.role.cache.has(role.id)){ //("234368202379886593".includes(message.author.id)
    OnOff = true;
    message.react('✅')
  }else{
    message.react('⛔')
  }
}

  if(message.content === "Quoibot Off"){
    if("234368202379886593".includes(message.author.id)){
      OnOff = false;
      message.react('❌')
    }else{
      message.react('⛔')
    }
}



if (OnOff === true){
  if (message.author.bot) return; //le bot ne peu pas prendre ces message
    let test = message.content.split(" ");
  //console.log(`entrer ${test}`)
  var texte = test[test.length - 1];
  //console.log(`dernier mot : ${texte}`) //prend que le dernier mots
  if((texte === ('?')) || (texte === ('!')) ||(texte === ('.') )){
    var texte = test[test.length - 2];
    //console.log("un ? a etais detecter dans le code" )
    //console.log(texte)
  } //si un ? est le dernier mots prend avant dernier
    if (texte === undefined) {
      return;
  }else{

    if (message.content.includes("@everyone")){
      //console.log("Everyone dedected")
     return;

    }else{
      //console.log("pas de everyone")


        //console.log("passage !")
    if ( (texte.toLowerCase()).includes("quoi", (texte.length-4) ) ||  (texte.toLowerCase()).includes("quoi.", (texte.length-5) ) ||  (texte.toLowerCase()).includes("quoi?", (texte.length-5) )||  (texte.toLowerCase()).includes("quoi!", (texte.length-5) )){
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
    if ( (texte.toLowerCase()).includes("non", (texte.length-3) ) ||  (texte.toLowerCase()).includes("non.", (texte.length-4) ) ||  (texte.toLowerCase()).includes("non?", (texte.length-4) )||  (texte.toLowerCase()).includes("non!", (texte.length-4) )){
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
      if ( (texte.toLowerCase()).includes("oui", (texte.length-3) ) ||  (texte.toLowerCase()).includes("oui.", (texte.length-4) ) ||  (texte.toLowerCase()).includes("oui?", (texte.length-4) )||  (texte.toLowerCase()).includes("oui!", (texte.length-4) )){
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
}
}
}else{//console.log("OFF") 
return;}
}
)
