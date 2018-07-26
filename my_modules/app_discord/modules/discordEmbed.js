/**
 * Discord module embed
 */
class discordEmbed {
    /**
     * Send embed discord message
     * @param title title of the embed
     * @param color color of teh embed
     * @param icon icon of the embed
     * @param description description of the embed
     * @param fields fileds off the embed field = {name,value}
     * @param channel channel where message send
     */
    sendEmbed(title, color, icon, description, fields, channel) {
        let embed = new global.module.discord.RichEmbed()
            .setTitle("   " + icon + "   " + title + ":   " + icon + "   ")
            .setColor(color)
            .setDescription(description)
            .setFooter('© 3DBOT copyright Dream')
            .setTimestamp()

            .addField('\u200B', '\u200B');

        fields.fields.forEach(function (field) {
            embed.addField(field.name, field.value)
        });

        embed.addField('\u200B', '\u200B');

        channel.send({
            embed
        });
    }
}
module.exports = new discordEmbed();

