global.module.discord.bot = new global.module.discord.Client();
global.module.discord.messageResponse = require(global.appRoot + '/my_modules/app_discord/modules/discordMessageResponse');
global.module.discord.commandResponse = require(global.appRoot + '/my_modules/app_discord/modules/discordCommandResponse');
global.module.discord.embed = require(global.appRoot + '/my_modules/app_discord/modules/discordEmbed');
global.module.discord.permission = require(global.appRoot + '/my_modules/app_discord/modules/discordPermission');

global.module.discord.bot.on('ready', function () {
    global.mymodule.logmanager.addLog('Bot Discord Ready', global.enum.type.success, global.enum.context.discordjs);
});
global.module.discord.bot.login(global.config.discordToken);

try {
    //Router message
    global.module.discord.bot.on('message', message => {
        if(message.content.startsWith(global.config.discordCommand)){
            global.module.discord.commandResponse.give(message);
        }else{
            global.module.discord.messageResponse.give(message);
        }
    });
} catch (e) {
    global.mymodule.logmanager.addLog("Error Discord App : " + e, global.enum.type.critical, global.enum.context.discordjs);
}