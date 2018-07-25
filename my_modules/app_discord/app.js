const bot = new global.module.discord.Client();

bot.on('ready', function () {
    global.mymodule.logmanager.addLog('Bot Discord Ready',global.enum.type.info,global.enum.context.discordjs);
})

bot.login(global.setting.discordToken);

bot.on('message', message => {
    if (message.content === 'ping') {
        message.reply('pong !')
    }
})

bot.on('message', message => {
    if (message.content === 'quoi') {
        message.reply('feur !')
    }
})