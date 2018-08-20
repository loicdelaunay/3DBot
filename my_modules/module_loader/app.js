global.module = [];
global.mymodule = [];

console.log('\n/**** Lancement de 3Dbot ' + global.config.versionApp + ' ... ****/');

console.log('\n-------------- Chargement des modules... --------------\n');

try{

    console.log('chargement de path ...');
    global.module.path = require('path');
    global.appRoot = global.module.path.dirname(require.main.filename);

    console.log('chargement de log manager ...');
    global.mymodule.logmanager = require(global.appRoot + '/my_modules/log_manager/app');

    console.log('chargement de filesytem ...');
    global.module.fs = require('fs');

    console.log('chargement de my enumerator ...');
    require(global.appRoot + '/my_modules/my_enumerator/app');

    console.log('chargement de my class ...');
    require(global.appRoot + '/my_modules/my_class/app');

    console.log('chargement de mongodb ...');
    global.module.mongoClient = require('mongodb').MongoClient;

    console.log('chargement de electron ...');
    global.module.electron = require('electron');

    console.log('chargement de electron app ...');
    global.module.electron_app = global.module.electron.app;

    console.log('chargement de electron browser window ...');
    global.module.electron_browserWindow = global.module.electron.BrowserWindow;

    console.log('chargement de electron ipc ...');
    global.module.electron_ipcMain = global.module.electron.ipcMain;

    console.log('chargement de electron remote ...');
    global.module.electron_remote = global.module.electron.remote;

    console.log('chargement de express ...');
    global.module.express = require('express');
    global.module.express_app = global.module.express();

    console.log('chargement de http module ...');
    global.module.http = require('http').Server(global.module.express_app);

    console.log('chargement de socket.io ...');
    global.module.io = require('socket.io')(global.module.http);

    console.log('chargement de discord js ...');
    global.module.discord = require('discord.js');

    console.log('chargement de my electron app ...');
    global.mymodule.electron_app = require(global.appRoot + '/my_modules/app_electron/app');

    console.log('chargement de my express app ...');
    global.mymodule.express_app = require(global.appRoot + '/my_modules/app_express/app');

    console.log('chargement de my mongodb app ...');
    global.mymodule.mongodb_app = require(global.appRoot + '/my_modules/app_mongodb/app');

    console.log('chargement de my discord app ...');
    global.mymodule.discord_app = require(global.appRoot + '/my_modules/app_discord/app');

    console.log('chargement de my socket io app ...');
    global.mymodule.socketio = require(global.appRoot + '/my_modules/app_socketio/app');

    console.log('Tous les modules on été chargé !');
}catch (e) {
    console.error('Erreur pendant le chargement des modules ' + e)
}

console.log('\n--------------- Loading modules done ---------------\n');
global.mymodule.logmanager.addLog('project folder is : ' + global.appRoot,global.enum.type.info);