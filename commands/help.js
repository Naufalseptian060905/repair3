const Discord = require('discord.js');


module.exports.run = async (client, message, args) => {
  
  
  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")  
  .setAuthor("WARKOP")
  .addField("PREFIX =",`|\`+\`|
  **PREFIX MUSIC =** |sx.|`)
  .addField("━━━━━━[ CMD ]━━━━━━",`|Ping = Untuk mengecek ping anda|
|Snipe = Untuk melihat pesan yang telah dihapus|
|Avatar = Untuk melihat profile member|
|invite = untuk mengundang bot|
|server = untuk join server owner|
|Sx.help = Untuk melihat command music|
|Kick = Mengeluarkan orang (coming soon)|
|Ban = Memusnahkan orang (coming soon)|`)
  .addField("━━━━━━[ AUTO RESPON ]━━━━━━",`**WELCOME**:
|Welcome/welcome|,|Welkam/welkam|,
|Welkom|,|Welcrot/welcrot|
**UMUM**:
|Duar/duar|,|Warkop|,|Run/run|,
|Parming kuy/parming kuy|,|Nonong|,
|Yeuu/yeuu|,|Huak/huak|,|Hadeh/hadeh|,
|Dahlah|,|Pudidi|,|Makasih/makasih|`) 
  
  message.channel.send(embed);
  
  }

//  .setThumbnail(message.author.displayAvatarURL())