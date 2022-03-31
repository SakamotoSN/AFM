const talkedRecently = new Set();
const Discord = require('discord.js');
const bot = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const parse = require('csv-parser');
const fs = require('fs');




//bot
var OP = "234368202379886593 305758596971626498 330676716676710400 435125705907503105 424677919512723466 773582054880182282 434070408501919745 434070408501919745 371653593473744896"
var prefix = ","
var nom = ("Ice-Bot")      //speudo
var jeu = ("Smash Ultimate")//jeu
var OnOff = false



//,wtf
var csv = [];
const csvData = [];
var stats_wtf = 0; //oeoe update du 01/03/22



bot.on('ready', function() {
    bot.user.setUsername(nom)
    bot.user.setActivity(jeu)
    console.log("Connected")});
bot.login(process.env.TOKEN);





fs.createReadStream('./folder/Aquali.csv')
  .pipe(
    parse({
      delimiter: ','
    })
  )
  .on('data', function (dataRow) {
    csvData.push(dataRow);
  })
  .on('end', function () {
    //console.log("teste");
    csv = csvData;
    //console.log(csv);
  });





bot.on('message', message => {







  
    if (message.content.toLowerCase().startsWith("ratio")) {
      message.react('😄');
    }








  if(message.content.toLowerCase().startsWith(prefix + ("wtf"))){
    



    if (message.channel.id === '458959804388343810') {

        let args = message.content.split(" ").slice(1)
  
  if (args >= 1 && args <= (csv.length) ){ //verif si nombre, sinon random
    var text = csv[parseInt(args[0])-1]
    num = args[0]
  }else{
    rdm = Math.floor(Math.random() * csv.length);
    var text = csv[rdm]
    num = rdm
  }


    let split = JSON.stringify(text).split(`","`);


    /* anti crash aquali
    var ID = JSON.stringify(split[0]).slice('17','-1') 
    var auteur = JSON.stringify(split[1]).slice('12','-1')
    var date = JSON.stringify(split[2]).slice('10','-1')
    var mess = JSON.stringify(split[3]).slice('13','-1')
    var image = JSON.stringify(split[4]).slice('17','-1')
    var react = JSON.stringify(split[5]).slice( '15','-4')
  */


    //sans reaction






    //aquali troll
    if("330676716676710400 396423644794060800 394603568373694474 305758596971626498 434070408501919745".includes(message.author.id)){
    console.log("NoU")
    }else{
        message.author.send(JSON.stringify(split[0]).slice('17','-1') )
    }

//aquali troll

  
  
  
  
   /*
   if(react === ""){
      const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor('De ' + auteur)
      .setDescription((((mess.replace(/(?:\\[rn]|[\r\n]+)+/g, "\n")).replace("\\", "").replaceAll("\\", ""))))
      .setImage(image)
      .setFooter(date + ' || ' + num +  ' || '+ ID);
      message.channel.send(embed)
    }
    //avec reaction
    else{

      const embed = new MessageEmbed()
      .setColor('#0099ff')
      .setAuthor('De ' + auteur)
      .setDescription((((mess.replace(/(?:\\[rn]|[\r\n]+)+/g, "\n")).replace("\\", "").replaceAll("\\", ""))))
      .addFields(
        {name: "Reaction" , value: react}
      )
      .setImage(image)
      .setFooter(date + ' || ' + num +  ' || '+ ID);
      message.channel.send(embed)
    }


  stats_wtf = stats_wtf + 1
*/  
}
}











//info


if(message.content.toLowerCase().startsWith(prefix + ("info wtf").toLowerCase())){

  const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`info sur la commande "wtf"`)
  .addFields(
    { name: "Nombre d'utilisation", value: stats_wtf},
    { name: "Dernière mises à jour des messages", value: (fs.statSync('./folder/Dekuali.csv').mtime)},
    { name: "Message enregistré", value: csv.length},
    { name: ",wtf", value: "avoir un message random"},
    { name: ",wtf (numero)", value: "avoir un message spécifique via le numéro donner en bas au centre de la commande"},
)
  message.channel.send(embed)
}






//help
if(message.content.toLowerCase().startsWith(prefix + ("help").toLowerCase())){

  const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setDescription(`info sur Ice-bot`)
  .addFields(
    { name: ",info (commmande)", value: "donne des infos sur la commande comme son utilisation"},
    { name: ",wtf", value: "Donne un message du salon <#487918136650366976>"},
)
  message.channel.send(embed)
}
  
    
    
    


//   if(message.content.toLowerCase() === (prefix + "say")){
//     if("234368202379886593 330676716676710400 396423644794060800 394603568373694474 305758596971626498 434070408501919745".includes(message.author.id)){
//     let args = message.content.split(" ").slice(1)
//     let thingToEcho = args.join(" ")
//     message.delete();
//     if (message.content === null){
//       message.delete();
//     }else{
//       message.channel.send(`${thingToEcho}`) 
//     }   
// }else{
    
//     message.delete();
// }
// }







    
    
    
    
    
    
    
    
    
    
    
    


  




//   if(message.content.startsWith('!mp')) {

//     if (message.channel.id === '715969826551627897') {



//     if(message.mentions.users.first()){
//      if (message.attachments.size > 0) {
//       message.delete();
//       message.channel.send(`:x: Impossible d'envoyer un fichier avec le message ${message.author} :x:`)
//       .then(message => {
//         message.delete({ timeout: 10000 /*temps en MS*/});
//       })
//       .catch();
//      }else{
//       if (talkedRecently.has(message.author.id)) {
//         message.channel.send(`Attent un peu avant d'envoyer des MP ${message.author}, le temps a atendre est de 2 minutes apres la commande`)
//         .then(message => {
//           message.delete({ timeout: 10000 /*temps en MS*/});
//         })
//         .catch();
//     } else { 
//     let messageToSend = message.content.split(" ").slice(2).join(" ");
//     let userToSend = message.mentions.users.first();
//     if((messageToSend.length) > 1800){ 
//       message.delete();

//       message.channel.send(`:x: Le message est trop long ${message.author} (${messageToSend.length} charactere, tu ecrit une mini fanfic ? :KAPPA: ):x:`)
//       .then(message => {
//         message.delete({ timeout: 10000 /*temps en MS*/});
//       })
//       .catch();

//     }else{
//     userToSend.send(`🧊 ${message.author.username} vous à envoyer un message! 🧊\n\n${messageToSend}`);
//     message.delete();
//     message.channel.send(`**${message.author}** , votre message a bien été envoyer à **${message.mentions.users.first().username}**`)
//     talkedRecently.add(message.author.id);
// setTimeout(() => {
//   // Removes the user from the set after a minute
//   talkedRecently.delete(message.author.id);
// }, 120000);
//     }
//   }   
//   }
//   }else{
// message.delete();
// message.channel.send(`:x: Impossible de trouver la personne ${message.author} :x:`)
// .then(message => {
//   message.delete({ timeout: 10000 /*temps en MS*/});
// })
// .catch();
// }
// }else{
//   message.delete();
//   message.channel.send(`Tu est actuelement dans <#${message.channel.id}> ${message.author}, essaye de le faire dans le bon salon`)
//   .then(message => {
//     message.delete({ timeout: 10000 /*temps en MS*/});
//   })
//   .catch();
// }

// }








  //debut AFM
  if(message.content === "Quoiffeurbot On"){
    if(OP.includes(message.author.id) ){
      OnOff = true;
      message.react('✅')
    }else{
      message.react('⛔')
    }
  }
  
    if(message.content === "Quoiffeurbot Off"){
      if(OP.includes(message.author.id)){
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
  
      if ( message.content.includes("@everyone")  || message.content.includes("@here")){
        //console.log("Everyone dedected")
       return;
  
      }else{
        //console.log("pas de everyone")
  
  
          //console.log("passage !")
      if ( (texte.toLowerCase()).includes("quoi", (texte.length-4) ) ||  (texte.toLowerCase()).includes("quoi.", (texte.length-5) ) ||  (texte.toLowerCase()).includes("quoi?", (texte.length-5) )||  (texte.toLowerCase()).includes("quoi!", (texte.length-5) )){
      if ((message.content.length) > 200){
        message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
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
          message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
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
          message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
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
          if ( (texte.toLowerCase()).includes("ouais", (texte.length-5) ) ||  (texte.toLowerCase()).includes("ouais.", (texte.length-6) ) ||  (texte.toLowerCase()).includes("ouais?", (texte.length-6) )||  (texte.toLowerCase()).includes("ouais!", (texte.length-6) )   ||      (texte.toLowerCase()).includes("ouai", (texte.length-4) ) ||  (texte.toLowerCase()).includes("ouai.", (texte.length-5) ) ||  (texte.toLowerCase()).includes("ouai?", (texte.length-5) )||  (texte.toLowerCase()).includes("ouai!", (texte.length-5) )   ||   (texte.toLowerCase()).includes("oe", (texte.length-2) ) ||  (texte.toLowerCase()).includes("oe.", (texte.length-3) ) ||  (texte.toLowerCase()).includes("oe?", (texte.length-3) )||  (texte.toLowerCase()).includes("oe!", (texte.length-3) )  ){
            if (message.content.length > 200){
              message.channel.send(`"Pour éviter de flood le salon nous avons decider de ne pas citer le message, merci de votre compréhension"\n${message.author}`, {
                  files: [
                    "./folder/sternn.mp4"
                  ]
                })
              }else{
                message.channel.send(` "${message}" ${message.author} `, {
                  files: [
                    "./folder/sternn.mp4"
                  ]
                })
              }
            }}
          }
        }
            
          else{//console.log("OFF") 
  return;}
  //fin AFM
    

// if(message.content.startsWith("!(S)MP")) {
//     if("234368202379886593".includes(message.author.id)){
//     if(message.mentions.users.first()){
//     let messageToSend = message.content.split(" ").slice(2).join(" ");
//     let userToSend = message.mentions.users.first();
//     userToSend.send(`${messageToSend}`);
//     message.delete();
// }else{
// message.delete();
// }
// }else{
//     console.log("WII")
//     }
// }



  
  
}
)
