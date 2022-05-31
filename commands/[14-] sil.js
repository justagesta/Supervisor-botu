const { MessageEmbed } = require('discord.js');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.react(ayarlar.carpi)

let embed = new MessageEmbed().setColor("RED")

    if(!args[0] || (args[0] && isNaN(args[0])) || Number(args[0]) < 1 || Number(args[0]) > 100) return message.channel.send(embed.setDescription(`\`1-100\` arasında silinecek mesaj miktarı belirtmelisin!`)).then(x => x.delete({timeout: 3000 }));
    await message.delete().catch(c => console.log("[CLEAR] Unknown Message"));
    message.channel.bulkDelete(Number(args[0])).catch(c => console.log("[CLEAR] Unknown Message")).then(msjlar => message.channel.send(`Başarıyla <#${message.channel.id}> adlı kanalda **${msjlar.size}** adet mesaj silindi!`).then(x => x.delete({timeout: 5000 })))

}
exports.conf = {
    aliases: ['sil'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'sil',
    açıklama:"",
    komut: "[sil]",
    help: "sil ",
    cooldown: 0

  };