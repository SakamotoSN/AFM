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
  date = text.split(",").slice(2);//.join(" ");
  message.channel.send(JSON.stringify(text)) 
  }











  if(message.content === "!tf"){
  const exampleEmbed = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Some title')
	.setURL('https://discord.js.org/')
	.setAuthor({ name: 'Some name', iconURL: 'https://i.imgur.com/AfFp7pu.png', url: 'https://discord.js.org' })
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.addFields(
		{ name: 'Regular field title', value: 'Some value here' },
		{ name: '\u200B', value: '\u200B' },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/AfFp7pu.png')
	.setTimestamp()
	.setFooter({ text: 'Some footer text here', iconURL: 'https://i.imgur.com/AfFp7pu.png' });

channel.send({ embeds: [exampleEmbed] });
  }





}
)
