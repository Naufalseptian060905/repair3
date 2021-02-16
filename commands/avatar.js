const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let user;
  
  if (message.mentions.users.first()) {
    user = message.mentions.users.first();
  } else if (args[0]) {
    user = message.guild.members.cache.get(args[0]).user;
  } else {
    user = message.author;
  }
  
  let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
 
  const embed = new Discord.MessageEmbed()
  .setTitle(`${user.tag} avatar`)
  .setColor(`RANDOM`)
  .setDescription(`[URL Avatar **${user.tag}**](${avatar})`)
  .setColor("RANDOM")
  .setImage(avatar)
  
  return message.channel.send(embed);
}