/**
 * Discord module command
 */
class discordCommandResponse {
    give(message) {

        let args = message.content.split(' ');
        let command = args[0].replace(global.config.discordCommand,'');
        let permission = global.module.discord.permission.getPermission(message.author.id);

        switch (command) {

            //Lancé de dès aléatoire
            case 'des':
                message.reply('Jet de dès de : ' + '');
                break;

            // Retourne l'id d'une personne
            case 'monid':
                message.reply('votre id est : ' + message.author.id);
                break;

            // Retourne l'id d'une personne
            case 'permission':
                message.reply('votre niveau de permission est de : ' + permission);
                break;

            case 'restart':
                if(permission<5){
                    message.reply("Vous n'avez pas le niveau de permission pour cela");
                }else{
                    message.reply('restart en cours...');
                    global.module.electron_app.relaunch();
                    global.module.electron_app.exit(0);
                }

            case 'stop':
                if(permission<5){
                    message.reply("Vous n'avez pas le niveau de permission pour cela");
                }else{
                    message.reply('arret en cours...');
                    global.module.electron_app.exit(0);
                }

            //Aide par défaut
            default:
                let tempField = new global.class.field();
                tempField.addField("/des", "lance un des");
                tempField.addField("/monid", "indique votre identifiant Discord");
                tempField.addField("/permission", "indique votre niveau de permission sur le bot");
                tempField.addField("/aide", "indique toutes les commandes disponibles");
                global.module.discord.embed.sendEmbed("HELP", 0x4286f4, "❓", "Ici vous retrouverez toutes les commandes disponible pour vous", tempField, message.channel);
                break;
        }
    }
}

module.exports = new discordCommandResponse();
