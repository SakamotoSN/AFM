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
    message.channel.send({ embeds: [{
      color: 3447003,
      author: {
        name: "Author Name, it can hold 256 characters",
        icon_url: "https://i.imgur.com/lm8s41J.png"
      },
      thumbnail: {
        url: "http://i.imgur.com/p2qNFag.png"
      },
      image: {
        url: "http://i.imgur.com/yVpymuV.png"
      },
      title: "This is your title, it can hold 256 characters",
      url: "https://discord.js.org/#/docs/main/master/class/MessageEmbed",
      description: "This is the main body of text, it can hold 2048 characters.",
      fields: [{
        name: "This is a single field title, it can hold 256 characters",
        value: "This is a field value, it can hold 1024 characters.",
        inline: false
      },
      {
        name: "Inline fields",
        value: "They can have different fields with small headlines, and you can inline them.",
        inline: true
      },
      {
        name: "Masked links",
        value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.",
        inline: true
      },
      {
        name: "Markdown",
        value: "You can put all the *usual* **__Markdown__** inside of them.",
        inline: true
      },
      {
        name: "\u200b",
        value:"\u200b"
      }],
      timestamp: new Date(),
      footer: {
        icon_url: "http://i.imgur.com/w1vhFSR.png",
        text: "This is the footer text, it can hold 2048 characters"
      }
    }]});
}





}
)
