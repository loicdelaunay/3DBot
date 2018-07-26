/**
 * Discord module autoresponse
 */
class discordMessageResponse {
    give(message){
        if (message.content === 'ping') {
            message.reply('pong !');
        }

        if (message.content.endsWith('quoi') || message.content.endsWith('quoi ?')) {
            message.reply('feur !');
        }
    }
}
module.exports = new discordMessageResponse();
