const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();


const parse = require('csv-parser');
const fs = require('fs');
const csvData = [];
var csv = [];
var statue = "idle" //online
bot.on('ready', function() {
  bot.user.setPresence({ game: { name: 'Test'}, status: `${statue}`})
    bot.user.setUsername("Quoifeur bot")
    console.log("Connected")
});

fs.createReadStream('./folder/Dekuali.csv')
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


  console.log("LOGIN");
bot.login(process.env.DISCORD_TOKEN);

bot.on('message', message => {
  var text = csv[0]//mess brute



  if(message.content === "!rdm"){
   message.channel.send(JSON.stringify(text))  
  }




  if(message.content === "!date"){
  let date = JSON.stringify(text).split(`","`);
  message.channel.send(JSON.stringify(date[0])) 
  message.channel.send(JSON.stringify(date[1])) 
  message.channel.send(JSON.stringify(date[2]))
  message.channel.send(JSON.stringify(date[3]))
  message.channel.send(JSON.stringify(date[4]))
  }











  if(message.content === "!tf"){

    const embed = new Discord.RichEmbed()
    .setTitle("commande pour les gif")
    .setColor(0x0086AE)
    .setDescription("voila les gif et image que Madame Pouf posséde")
    .setThumbnail("https://cdn.discordapp.com/attachments/432275341202030614/435096117504638986/unknown.png")
    .setFooter("pour plus d'info demander a sig :D")
    .addField("gif",
      "Lucas!KC\nLucas!FTW\Lucas!MrPuel\nLucas!MrPuel")
      .addField("image",
      "rien") 

    message.channel.send({embed});
}





}
)
