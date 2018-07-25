const bot = new global.module.discord.Client();

bot.on('ready', function () {
    global.mymodule.logmanager.addLog('Bot Discord Ready', global.enum.type.info, global.enum.context.discordjs);
});
bot.login(global.setting.discordToken);


//Router message
bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong !');
        discordEmbed('pong', 0x42c2f4, "test", fields, message.channel);
    }
});

/**
 * Send embed discord message
 * @param title title of the embed
 * @param color color of teh embed
 * @param description description of the embed
 * @param fields fileds off the embed field = {name,value}
 * @param channel channel where message send
 */
function discordEmbed(title, color, description, fields, channel) {
    let embed = new global.module.discord.RichEmbed()
        .setTitle("   ❓   " + title + ":   ❓   ")
        .setColor(color)
        .setDescription(description)
        .setFooter('© 3DBOT copyright Dream')
        .setTimestamp()

        .addField('\u200B', '\u200B');

    fields.forEach(function (field) {
        embed.addField(field.name, field.value)
    });

    embed.addField('\u200B', '\u200B');

    channel.send({
        embed
    });
}