global.module = [];
global.mymodule = [];

console.log('\n/**** Starting 3Dbot ' + global.versionApp + ' ... ****/');

console.log('\n-------------- Loading modules --------------\n');

try{
    global.module.fs = require('fs');
    console.log('loading filesytem done');

    global.module.path = require('path');
    global.appRoot = global.module.path.dirname(require.main.filename);
    console.log('loading path done');

    global.module.mongoClient = require('mongodb').MongoClient;
    console.log('loading filesytem done');

    global.module.electron = require('electron');
    console.log('loading electron done');

    global.module.electron_app = global.module.electron.app;
    console.log('loading electron app done');

    global.module.electron_browserWindow = global.module.electron.BrowserWindow;
    console.log('loading electron browser window done');

    global.module.electron_ipcMain = global.module.electron.ipcMain;
    console.log('loading electron ipc main done');

    global.module.express = require('express');
    global.module.express_app = global.module.express();
    console.log('loading express done');

    global.mymodule.electron_app = require(global.appRoot + '/my_modules/app_electron/app');
    global.mymodule.express_app = require(global.appRoot + '/my_modules/app_express/app');
    global.mymodule.mongodb_app = require(global.appRoot + '/my_modules/app_mongodb/app');
    global.mymodule.diff = require(global.appRoot + '/my_modules/diff/app');
    console.log('loading app modules done');

}catch (e) {
    console.error('Error loading module ' + e)
}

console.log('\n--------------- Loading modules done ---------------\n');
console.log('project folder is : ' + global.appRoot);