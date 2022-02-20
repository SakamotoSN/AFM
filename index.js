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
    const embed = new Discord.MessageEmbed()
    /*
     * Alternatively, use "#3498DB", [52, 152, 219] or an integer number.
     */
    .setColor(0x3498DB)
    .setAuthor("Author Name, it can hold 256 characters", "https://i.imgur.com/lm8s41J.png")
    .setTitle("This is your title, it can hold 256 characters")
    .setURL("https://discord.js.org/#/docs/main/stable/class/MessageEmbed")
    .setDescription("This is the main body of text, it can hold 4096 characters.")
    .setImage("http://i.imgur.com/yVpymuV.png")
    .setThumbnail("http://i.imgur.com/p2qNFag.png")
    .addField("This is a single field title, it can hold 256 characters", "This is a field value, it can hold 1024 characters.")
    /*
     * Inline fields may not display as inline if the thumbnail and/or image is too big.
     */
    .addFields(
      { name: "Inline fields", value: "They can have different fields with small headlines, and you can inline them.", inline: true },
      { name: "Masked links", value: "You can put [masked links](https://discord.js.org/#/docs/main/master/class/MessageEmbed) inside of rich embeds.", inline: true },
      { name: "Markdown", value: "You can put all the *usual* **__Markdown__** inside of them.", inline: true }
    )
    /*
     * Blank field, useful to create some space.
     */
    .addField("\u200b", "\u200b")
    /*
     * Takes a Date object, defaults to current date.
     */
    .setTimestamp()
    .setFooter("This is the footer text, it can hold 2048 characters", "http://i.imgur.com/w1vhFSR.png");
    /*
     * With Discord now allowing messages to contain up to 10 embeds, we need to put it in an array.
     */
    message.channel.send({ embeds: [embed] });
}





}
)
