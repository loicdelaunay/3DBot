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

    sendRoll(valeurs,channel){
        let tempField = new global.class.field();
        let index = 1;
        valeurs.forEach(function(uneValeur){
            tempField.addField("Dès numéro " + index,uneValeur);
            index++;
        });
        this.sendEmbed("ROLL", 0x42f4ee, "🎲", "Lancé de dés !", tempField, channel);
    }

    sendInfo(channel){
        let tempField = new global.class.field();
        tempField.addField("/roll 'nombres de dés' 'valeur max du dés'", "lance un des");
        tempField.addField("/monid", "indique votre identifiant Discord");
        tempField.addField("/permission", "indique votre niveau de permission sur le bot");
        tempField.addField("/aide", "indique toutes les commandes disponibles");
        this.sendEmbed("HELP", 0x4286f4, "❓", "Ici vous retrouverez toutes les commandes disponible pour vous", tempField, channel);
    }
}

module.exports = new discordEmbed();

