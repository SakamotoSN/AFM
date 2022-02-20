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
  message.channel.send(JSON.stringify(date[1])) 
  message.channel.send(JSON.stringify(date[2]))
  message.channel.send(JSON.stringify(date[3]))
  message.channel.send(JSON.stringify(date[4]))
  }









 



  if(message.content === "!tf"){
    let split = JSON.stringify(text).split(`","`);
    var ID = JSON.stringify(split[0]).slice('10','-1') 
    var auteur = JSON.stringify(split[1]).slice('17','-1')
    var date = JSON.stringify(split[2]).slice('8','-1')
    var mess = JSON.stringify(split[3]).slice('11','-1')
    var image = JSON.stringify(split[4]).slice('15','-1')

    const embed = new MessageEmbed()
	.setColor('#0099ff')
	.setAuthor('De ' + auteur)
	.setDescription(mess)
	.setImage(image)
	.setFooter(date + "||" + ID);

  message.channel.send(embed)
}

if(message.content === "!debug"){
  let split = JSON.stringify(text).split(`","`);
  var ID = JSON.stringify(split[0]).slice('10','-1') 
  var auteur = JSON.stringify(split[1]).slice('17','-1')
  var date = JSON.stringify(split[2]).slice('8','-1')
  var mess = JSON.stringify(split[3]).slice('11','-1')
  var image = JSON.stringify(split[4]).slice('15','-1')


  message.channel.send(ID)
  message.channel.send(auteur)
  message.channel.send(date)
  message.channel.send(mess)
  message.channel.send(image)
}



}
)
