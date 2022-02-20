const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();


const parse = require('csv-parser');
const fs = require('fs');
const csvData = [];
var csv = [];
var array = [];
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

  if(message.content === "!rdm"){
  text = csv[0];



  array = JSON.parse("[" + text + "]");




   message.channel.send(JSON.stringify(array))  

   //let args = text.split(",").slice(1)

   //message.channel.send(args[1])  



  }



}
)
