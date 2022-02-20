const Discord = require('discord.js');
const bot = new Discord.Client();
const client = new Discord.Client();

const { MessageEmbed } = require('discord.js');
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

    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/AfFp7pu.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setFooter(message.channel.send(JSON.stringify(date[3])));

  message.channel.send(embed)
}





}
)
