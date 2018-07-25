let mainWindow;

function createWindow() {
    mainWindow = new global.module.electron_browserWindow(
        {
            width: 1200,
            height: 800,
            title: 'home',
            isMaximized: false,
            frame: false,
            center: true
        });
    mainWindow.loadURL(`http://localhost:3000/`);
    mainWindow.on('closed', () => {
        mainWindow = null;
    })
}

global.module.electron_ipcMain.on('close', () => {
    global.module.electron_app.quit();
});

global.module.electron_app.on('ready', createWindow);

global.module.electron_app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        global.module.electron_app.quit();
    }
});

global.module.electron_app.on('activate', () => {
    if (home === null) {
        createWindow();
    }
});