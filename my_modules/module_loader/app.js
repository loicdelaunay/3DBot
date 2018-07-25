global.module = [];
global.mymodule = [];

console.log('\n/**** Starting 3Dbot ' + global.setting.versionApp + ' ... ****/');

console.log('\n-------------- Loading modules --------------\n');

try{

    console.log('loading path ...');
    global.module.path = require('path');
    global.appRoot = global.module.path.dirname(require.main.filename);

    console.log('loading filesytem ...');
    global.module.fs = require('fs');

    console.log('loading my enumerator ...');
    require(global.appRoot + '/my_modules/my_enumerator/app');

    console.log('loading log manager ...');
    global.mymodule.logmanager = require(global.appRoot + '/my_modules/log_manager/app');

    console.log('loading mongodb ...');
    global.module.mongoClient = require('mongodb').MongoClient;

    console.log('loading electron ...');
    global.module.electron = require('electron');

    console.log('loading electron app ...');
    global.module.electron_app = global.module.electron.app;

    console.log('loading electron browser window ...');
    global.module.electron_browserWindow = global.module.electron.BrowserWindow;

    console.log('loading electron ipc ...');
    global.module.electron_ipcMain = global.module.electron.ipcMain;

    console.log('loading express ...');
    global.module.express = require('express');
    global.module.express_app = global.module.express();

    console.log('loading http module ...');
    global.module.http = require('http').Server(global.module.express_app);

    console.log('loading socket.io ...');
    global.module.io = require('socket.io')(global.module.http);

    console.log('loading discord js ...');
    global.module.discord = require('discord.js');

    console.log('loading my electron app ...');
    global.mymodule.electron_app = require(global.appRoot + '/my_modules/app_electron/app');

    console.log('loading my express app ...');
    global.mymodule.express_app = require(global.appRoot + '/my_modules/app_express/app');

    console.log('loading my mongodb app ...');
    global.mymodule.mongodb_app = require(global.appRoot + '/my_modules/app_mongodb/app');

    console.log('loading my discord app ...');
    global.mymodule.discord_app = require(global.appRoot + '/my_modules/app_discord/app');

    console.log('loading my socket io app ...');
    global.mymodule.socketio = require(global.appRoot + '/my_modules/app_socketio/app');

}catch (e) {
    console.error('Error loading module ' + e)
}

console.log('\n--------------- Loading modules done ---------------\n');
global.mymodule.logmanager.addLog('project folder is : ' + global.appRoot,global.enum.type.info);