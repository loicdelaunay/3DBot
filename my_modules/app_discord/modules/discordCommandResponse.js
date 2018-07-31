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
            case 'roll':
                let valeurs = roll(args[1],args[2]);
                global.module.discord.embed.sendRoll(valeurs,message.channel);
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
                    restart();
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
                global.module.discord.embed.sendInfo(message.channel);
                break;
        }
    }
}
module.exports = new discordCommandResponse();

function roll(nombreDes,valeurMax){

    let lance = 0;
    let valeurs = [];
    while(lance<parseInt(nombreDes)){
        valeurs.push(Math.floor(Math.random() * Math.floor(valeurMax)));
        lance++;
    }
    return valeurs;
}

function restart(){
    setTimeout(function(){
        global.module.electron_app.relaunch();
        global.module.electron_app.exit(0);
    },4000);
};