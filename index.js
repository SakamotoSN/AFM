const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();


const parse = require('csv-parser');
const fs = require('fs');
var csvData = [];

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
    console.log("fichier importer");
  });

  console.log(dataRow[0]);             
  console.log(dataRow[1]);
  console.log(dataRow[2]);
  console.log(dataRow[3]);

bot.login(process.env.DISCORD_TOKEN);

bot.on('message', message => {


  if(message.content === "!ice-bot NotFunny"){ 
    message.channel.send({ 
      files: ["https://cdn.glitch.com/df793cf6-f71f-4846-9616-877b6c1bd870%2FFeistyHeftyAmericanbobtail-max-1mb.gif?v=1590688129485"]
  })
}



}
)
